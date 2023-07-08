import { EventType } from '@/lib/types';

import Image from 'next/image';
import Link from 'next/link';
const stylee = {
  boxShadow:
    'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
  margin: '10px',
  opacity: '80%',
};
const text = {
  fontWeight: 'bolder',
  // boxShadow: "#fc5c7d 0px 10px 50px",
  padding: '6px',
  boxShadow:
    'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
};
const Event = ({ name, location, date, link, image, logo }: EventType) => {
  return (
    <Link
      style={stylee}
      href={link}
      target="_blank"
      className=" card_event event-card group relative h-[250px] cursor-pointer overflow-hidden rounded-xl shadow-lg duration-500 ease-in hover:scale-90 hover:from-[rgb(231,65,123)] focus:outline-none focus:ring-4 focus:ring-rose-500"
    >
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="h-full w-full object-cover  hover:rotate-45"
      />

      <div className="to-black-black/70 absolute inset-0 z-10 flex items-center justify-center  bg-gradient-to-t from-black/70 p-2 duration-1000 duration-500 ease-in ease-in hover:-rotate-[360deg]  hover:scale-90 hover:from-[rgb(231,65,123)] group-focus:to-primary">
        <div style={text} className="text-center">
          {logo && (
            <Image
              src={logo}
              alt={name}
              height={80}
              width={80}
              className="mb-2 inline-block"
            />
          )}
          <h3 className="text-3xl font-bold text-white">{name}</h3>
          <h4 className="mt-5 text-base text-white">
            <span className="block">
              {date.toLocaleString('en-IN', {
                dateStyle: 'long',
              })}
            </span>
            <span className="block">{location}</span>
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Event;
