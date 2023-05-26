import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import { FC } from 'react';

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <UnstyledLink
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
