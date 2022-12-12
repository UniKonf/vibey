import { LeftArrowicon } from '../../Icons';
import Link from 'next/link';
import { FC } from 'react';

type Props = { title: string } & (
  | { btnText?: never; href?: never }
  | { btnText: string; href: string }
);

const Heading: FC<Props> = ({ title, btnText, href }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <h1 className="text-2xl font-bold md:text-4xl ">{title}</h1>
      <div className="hidden h-1 flex-1 rounded-lg bg-base-300 md:block " />
      {typeof btnText === 'string' && typeof href === 'string' ? (
        <Link href={href}>
          <div className="btn flex w-max items-center justify-center gap-2 bg-primary/40 ">
            {btnText}
            <span className="inline-block aspect-square w-8">
              <LeftArrowicon />
            </span>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Heading;
