import clsxm from '@/lib/clsxm';

import * as React from 'react';
import { IconType } from 'react-icons';

const ButtonLinkVariant = ['primary', 'outline'] as const;

type ButtonProps = {
  variant?: (typeof ButtonLinkVariant)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  darkBg?: boolean;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center rounded-full',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary',
          'shadow-sm',
          'transition-colors duration-75',
          'px-7 py-2',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-color-pink text-white',
              'border-2 border-color-pink',
              'hover:bg-color-pink/[0.9]',
            ],
            variant === 'outline' && [
              'bg-transparent text-white',
              'border-2 border-color-pink',
              'hover:bg-color-pink',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {LeftIcon && (
          <div className="mr-1">
            <LeftIcon
              className={clsxm('md:text-md text-md', leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className="ml-1">
            <RightIcon
              className={clsxm('text-md md:text-md', rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
