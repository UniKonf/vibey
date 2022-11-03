import { FC } from 'react';
import { useSocialIcons } from '../../Icons/Social Icons';
import { EventInterface } from '../../lib/types';

interface Props {
  event: EventInterface;
}

const Event: FC<Props> = ({
  event: { date, description, link, socials, themes, time, title },
}) => {
  const socialIcons = useSocialIcons();
  return (
    <div className="w-full rounded-xl border-2 border-transparent bg-base-content/30 p-5 transition-all duration-200 hover:border-primary">
      <div className="flex items-center">
        <span className="flex-1 text-3xl">{title}</span>
        <span className="flex gap-2">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <span className="block aspect-square w-12 rounded-full border-2 border-primary bg-base-100 p-2 text-primary">
                {socialIcons[social.name]}
              </span>
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Event;
