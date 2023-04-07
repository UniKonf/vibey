import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="w-full pb-36 pt-56">
      <div className="layout flex flex-col items-center justify-center gap-24">
        {/* Heading */}
        <h1 className="heading font-thin">
          <span className="relative">
            A{/* Svg like Wolvarine Claw */}
            <svg
              className="absolute bottom-4 left-1 aspect-[148/181] w-[10vw] -translate-x-full"
              viewBox="0 0 146 181"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M141.705 130.642C105.908 114.13 75.1435 91.8513 53.9444 60.6962C43.8787 45.9032 32.6227 27.4089 31.0329 9.57942"
                stroke="#4DDCEF"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M121.189 171.356C81.3698 160.954 28.1548 137.321 13.3031 106.159"
                stroke="#4DDCEF"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M132.645 152.123C103.78 145.337 78.3989 127.501 55.9666 110.722C48.6273 105.233 40.9475 97.8263 34.4942 91.4716C28.7903 85.8549 23.3767 78.8711 18.5533 72.712C8.82484 60.2895 6.97235 53.5705 3.17874 47.9952"
                stroke="#4DDCEF"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          ll the{' '}
          <span className="relative">
            o{/* Spiral Svg at o */}
            <svg
              className="absolute -top-[2vw] left-0 aspect-[88/45] w-[10vw] -translate-x-1/2 md:-top-[1vw] md:w-[8vw]"
              viewBox="0 0 88 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 23.9015C5.89823 27.9247 20.8867 47.117 27.8454 41.9034C30.3397 40.0346 29.8921 33.5423 29.0886 30.4302C28.3021 27.3836 25.7514 24.2272 24.2175 21.4195C23.4603 20.0335 20.3338 16.8879 21.7798 17.3428C27.3928 19.109 40.3507 34.7794 45.2641 32.9107C50.433 30.9448 48.2093 17.3391 45.9565 12.8548C44.3885 9.73356 39.0574 0.76717 41.3415 3.45562C46.4425 9.45964 54.9457 22.8164 63.0216 23.9717C73.5049 25.4715 80.9254 13.863 85.226 6.98549"
                stroke="url(#paint0_linear_27_809)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_27_809"
                  x1="6.59116"
                  y1="20.0008"
                  x2="62.8775"
                  y2="-15.9906"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D9B227" />
                  <stop offset="1" stopColor="#FD4141" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          nline{' '}
          <span className="relative font-bold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-xl after:bg-primary md:after:h-2">
            CONF,
          </span>
          <br />
          <span className="relative font-bold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-xl after:bg-primary md:after:h-2">
            WORKSHOPS,
          </span>{' '}
          and{' '}
          <span className="relative font-bold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-xl after:bg-primary md:after:h-2">
            EVENTS
          </span>
          <br /> at one place
          <span className="relative">
            .{/* End curl SVG */}
            <svg
              className="absolute bottom-0 right-0 aspect-[64/58] w-[10vw] translate-x-1/2 translate-y-1/2 md:w-[5vw]"
              viewBox="0 0 64 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.7753 55.2563C0.908232 33.9805 0.212376 24.5229 18.2525 30.0285C25.581 32.265 31.956 40.5466 38.3438 37.8256C44.7233 35.1082 44.5462 18.7756 45.6835 10.3404C46.9719 0.784726 62.142 14.4801 60.8538 3.1825"
                stroke="#A000D9"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
