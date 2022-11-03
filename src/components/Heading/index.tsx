import Link from 'next/link';
import { FC } from 'react';
import { LeftArrowicon } from '../../Icons';

interface Props {
  title: string;
  btnText: string;
  href: string;
}

const Heading: FC<Props> = ({ title, btnText, href }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <div className="h-1 flex-1 rounded-lg bg-base-300" />
      <Link
        href={href}
        className="btn flex w-max items-center justify-center gap-2 bg-primary/40 "
      >
        {btnText}
        <span className="inline-block aspect-square w-8">
          <LeftArrowicon />
        </span>
      </Link>
    </div>
  );
};

export default Heading;
