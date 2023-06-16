import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink'; // UnstyledLinkProps,

import { FC } from 'react';
// import { string } from 'zod';

type LogoProps = UnstyledLinkProps;

const Logo: FC<LogoProps> = ({ className, ...rest }) => {
  return (
    <UnstyledLink
      {...rest}
      href="/"
      className={clsxm(
        'text-2xl font-medium',
        'hover:text-color-pink',
        className
      )}
    >
      {'<Vibey/>'}
    </UnstyledLink>
  );
};
export default Logo;
