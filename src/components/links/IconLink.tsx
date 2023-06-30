import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

import * as React from 'react';
import { IconType } from 'react-icons';

const IconLinkVariant = ['primary', 'outline'] as const;

type IconLinkProps = {
  isDarkBg?: boolean;
  variant?: (typeof IconLinkVariant)[number];
  icon?: IconType;
  iconClassName?: string;
} & Omit<UnstyledLinkProps, 'children'>;

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  (
    { className, icon: Icon, variant = 'primary', iconClassName, ...rest },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        type="button"
        className={clsxm(
          'inline-flex items-center justify-center rounded text-xl font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary',
          'shadow-sm',
          'transition-colors duration-75',
          'min-h-[28px] min-w-[28px] p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          'rounded-full',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-color-pink text-white',
              'border border-color-pink',
              'hover:border-color-pink[0.8]',
            ],
            variant === 'outline' && [
              'bg-transparent text-color-pink',
              'border-2 border-color-pink',
              'hover:bg-color-pink hover:text-white',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && <Icon className={clsxm(iconClassName)} />}
      </UnstyledLink>
    );
  }
);

export default IconLink;
