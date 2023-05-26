import ButtonLink from '@/components/links/ButtonLink';

import { FC } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

type Props = { title: string } & (
  | { btnText?: never; href?: never }
  | { btnText: string; href: string }
);

const Heading: FC<Props> = ({ title, btnText, href }) => {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      {typeof btnText === 'string' && typeof href === 'string' ? (
        <ButtonLink href={href} openNewTab={false} rightIcon={AiOutlineRight}>
          {btnText}
        </ButtonLink>
      ) : null}
    </div>
  );
};

export default Heading;
