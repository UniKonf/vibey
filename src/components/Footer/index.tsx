import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="font-mono">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg md:text-4xl">
          {'<Dev.Conf/>'}
        </Link>
        <span className="text-xl">© 2022,Open Source</span>
      </div>
      <div className="mt-7 mb-10 h-1 rounded-lg bg-base-300" />
      <p className="text-center">
        Thanks to all contributers to maintain this. 🙏 ❤️‍🔥 You can contribute at{' '}
        <a
          href="https://github.com/mkubdev/DevConf"
          className="udnerline text-primary"
        >
          github.com
        </a>
        .{' '}
      </p>
    </div>
  );
};

export default Footer;
