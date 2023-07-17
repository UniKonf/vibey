import { CfpDataType } from '@/lib/types';

import Image from 'next/image';
import Link from 'next/link';

const CfpCardPage = ({
  name,
  link,
  address,
  image,
  date,
  tags,
  logo,
}: CfpDataType) => {
  return (
    <Link
      href={link as string}
      target="_blank"
      className="event-card group relative h-[250px] cursor-pointer overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-rose-500"
    >
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="to-black-black/70 absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/70 p-2 hover:from-[rgb(231,65,123)] group-focus:to-primary">
        <div className="text-center">
          {logo && (
            <Image
              src={image}
              alt={name}
              height={80}
              width={80}
              className="mb-2 inline-block"
              loading="lazy"
            />
          )}
          <h3 className="text-3xl font-bold text-white">{name}</h3>
          <h4 className="mt-5 text-base text-white">
            <span className="block">
              {new Date(date).toLocaleString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="block">
              {!address.isOnline && address.location}
            </span>
          </h4>
          <div className="grow">
            <ul className="mb-3 flex list-inside list-disc flex-wrap justify-center text-color-pink">
              {tags.map((tag: string, index: number) => (
                <li key={index} className="px-2 py-1 text-sm capitalize">
                  <span className="text-foreground">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CfpCardPage;
