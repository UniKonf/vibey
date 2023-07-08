import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink'; // UnstyledLinkProps,

import { FC } from 'react';

type LogoProps = UnstyledLinkProps;

const Logo: FC<LogoProps> = ({ className, ...rest }) => {
  return (
    <UnstyledLink
      {...rest}
      href="/"
      className={clsxm('font-medium', 'hover:text-color-pink', className)}
    >
      {'<Vibey/>'}
    </UnstyledLink>
  );
};

export default Logo;
