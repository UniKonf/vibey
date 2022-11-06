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
    <div className="card">
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
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="font-medium">Theme</span>
          <div className="mt-1 flex gap-2">
            {themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border-2 border-base-content px-2 py-1 text-xs uppercase"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          className="rounded-lg bg-base-content px-5 py-3 text-xl font-bold text-base-100"
        >
          JOIN
        </a>
      </div>
    </div>
  );
};

export default Event;
