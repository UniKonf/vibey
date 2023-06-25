import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

import * as React from 'react';

type FooterLinkProps = UnstyledLinkProps;

const FooterLink = React.forwardRef<HTMLAnchorElement, FooterLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'relative w-max transition-all duration-200',
          'after:absolute after:bottom-0 after:right-0',
          'after:h-[2px] after:w-0',
          'after:bg-base-content after:transition-all after:duration-200',
          'hover:after:left-0 hover:after:right-auto hover:after:w-full',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default FooterLink;
