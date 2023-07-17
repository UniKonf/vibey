import { getDateTime } from '@/lib/helper';
import { EventInterface } from '@/lib/types';

import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';

import { useSocialIcons } from '@/Icons/Social Icons';

import { FC } from 'react';

interface Props {
  event: EventInterface;
}

const Event: FC<Props> = ({
  event: { description, link, socials, themes, startTime, endTime, title },
}) => {
  const socialIcons = useSocialIcons();

  return (
    <div className="card flex flex-col p-6 hover:-translate-y-1">
      {/* date */}
      <p className="mb-1 text-color-pink">
        {getDateTime(startTime)} - {endTime && getDateTime(endTime)}
      </p>
      {/* heading and socials */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="block flex-1 text-2xl font-bold">{title}</span>
        <span className="flex gap-2">
          {socials.map((social) => (
            <IconLink
              key={social.name}
              variant="outline"
              href={social.link}
              icon={socialIcons[social.name]}
              aria-label={`Visit us on ${social.name}`}
            />
          ))}
        </span>
      </div>
      {/* description */}
      <p className="webkit-box line-clamp-3 my-2 overflow-hidden text-ellipsis text-base">
        {description}
      </p>
      {/* theme */}
      <div className="grow">
        <p className="text-color-pink">Theme</p>
        <ul className="mb-3 flex list-inside list-disc flex-wrap text-color-pink">
          {themes?.map((theme) => (
            <li key={theme} className="px-2 py-1 text-sm capitalize">
              <span className="text-foreground">{theme}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* know more button */}
      <ButtonLink href={link} className="w-full justify-center font-medium">
        Know More
      </ButtonLink>
    </div>
  );
};

export default Event;
