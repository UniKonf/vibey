import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

import { useRouter } from 'next/router';
import * as React from 'react';

type NavLinkProps = UnstyledLinkProps & {
  onClick?: () => void;
  closeMenu?: () => void; // Add closeMenu prop
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, className, onClick, closeMenu, ...rest }, ref) => {
    const { theme } = React.useContext(SettingsContext);

    const route = useRouter();
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
      if (closeMenu) {
        closeMenu(); // Call the closeMenu function to close the navbar
      }
    };

    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        onClick={handleClick}
        className={clsxm(
          'font-medium',
          'relative w-max transition-all duration-200',
          'after:absolute after:-bottom-1  after:right-0',
          'after:h-[2px] after:w-0',
          'after:bg-base-content after:transition-all after:duration-200',
          `hover:after:left-0 hover:after:right-auto hover:after:w-full ${
            theme === 'light' ? 'hover:after:bg-black' : 'hover:after:bg-white'
          }`,
          route.asPath === rest.href && 'after:left-0 after:w-full',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default NavLink;
