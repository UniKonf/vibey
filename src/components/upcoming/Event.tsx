import { EventType } from '@/lib/types';

import Image from 'next/image';

const Event = ({ name, location, date, image, logo }: EventType) => {
  return (
    <div className="event-card group relative h-[250px] cursor-pointer overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-primary">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="h-full w-full object-cover"
      />
      <div className="to-black-black/70 absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/70 p-2 hover:from-primary group-focus:from-primary">
        <div className="text-center">
          {logo && (
            <Image
              src={logo}
              alt={name}
              height={80}
              width={80}
              className="mb-2 inline-block"
            />
          )}
          <h3 className="text-3xl text-white ">{name}</h3>
          <h4 className="mt-5 text-sm text-white">
            <span className="block">
              {date.toLocaleString('en-IN', {
                dateStyle: 'long',
              })}
            </span>
            <span className="block">{location}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Event;
