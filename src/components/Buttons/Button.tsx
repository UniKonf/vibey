import clsxm from '@/lib/clsxm';

import * as React from 'react';
import { IconType } from 'react-icons';

const ButtonLinkVariant = ['primary'] as const;

type ButtonProps = {
  variant?: typeof ButtonLinkVariant[number];
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
      darkBg,
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
          'ml-auto inline-flex items-center rounded-full md:ml-0',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary',
          'shadow-sm',
          'transition-colors duration-75',
          'px-4 py-2 md:px-7',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-black text-white',
              'border-2 border-primary',
              'hover:border-primary/90 hover:bg-base-content/5 hover:text-white',
              'active:scale-95',
              'disabled:bg-primary/20',
              'transition-transform',
              darkBg && [
                'hover:bg-black/80',
                'disabled:bg-primary/20 disabled:text-black',
              ],
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
