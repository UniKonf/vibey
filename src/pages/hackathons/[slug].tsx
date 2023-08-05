import { SingleHackathonType } from '@/lib/types';

import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { BsCashCoin } from 'react-icons/bs';
import { GiDuration } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { IoTicket } from 'react-icons/io5';
import { MdGroups2 } from 'react-icons/md';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { RiQuestionLine } from 'react-icons/ri';

interface IParams extends ParsedUrlQuery {
  id: string;
}

// const SpeakerCard: FC<SpeakerType> = ({
//   name,
//   profile,
//   designation,
//   socials,
// }) => {
//   const { theme } = React.useContext(SettingsContext);

//   return (
//     <div
//       className={`rounded-xl ${
//         theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
//       }  flex flex-col items-center p-6 drop-shadow-lg transition-all duration-300 ease-in-out hover:shadow-lg md:p-6  `}
//     >
//       <div className="h-36 w-fit overflow-hidden rounded-full">
//         <Image
//           alt="Profile"
//           className="h-full w-full"
//           src={profile}
//           width={500}
//           height={500}
//           loading="lazy"
//         ></Image>
//       </div>
//       <div className="mt-4 text-center">
//         <h2 className="text-2xl">{name}</h2>
//         <p
//           className={`${
//             theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
//           } text-sm`}
//         >
//           {designation}
//         </p>
//         <div className="mt-2 flex justify-center gap-1">
//           {socials[0]?.name === 'Twitter' && (
//             <a href={socials[0].link} target="_blank" rel="noreferrer">
//               <AiOutlineTwitter className="cursor-pointer text-2xl" />
//             </a>
//           )}
//           {socials[1]?.name === 'Github' && (
//             <a href={socials[1].link} target="_blank" rel="noreferrer">
//               <AiOutlineGithub className="cursor-pointer text-2xl" />
//             </a>
//           )}
//           {socials[2]?.name === 'LinkedIn' && (
//             <a href={socials[2].link} target="_blank" rel="noreferrer">
//               <AiOutlineLinkedin className="cursor-pointer text-2xl" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
interface hackathontype {
  hackathon: SingleHackathonType;
}
const HackathonDetails: NextPage<hackathontype> = ({
  hackathon,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="pt-24 pb-8">
      {/* hackathon Detail wrapper */}
      <div className=" mx-auto w-11/12 md:w-8/12">
        {/* hackathon Image and details container */}
        <div className="dark:bg-zinc-900 bg-neutral-200 rounded-lg">
          {/* hackathon Image */}
          <div className="relative rounded-lg md:h-96">
            <Image
              alt="hackathon Image"
              className="h-full w-full rounded-lg"
              src={hackathon.image}
              width={1000}
              height={1000}
              loading="lazy"
            ></Image>
          </div>
          {/* hackathon Details short */}
          <div className="px-4 py-6 md:px-6 md:py-8 ">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold md:text-4xl">
                  {hackathon?.name}
                </h1>
                <p className="mt-2 text-neutral-400">
                  By {hackathon?.organizer}
                </p>
              </div>
              <button className="hidden rounded-md bg-color-pink px-4 py-2 text-neutral-100 shadow-md md:block">
                <a href={hackathon?.link} target="_blank" rel="noreferrer">
                  Register
                </a>
              </button>
              <div className="fixed bottom-0 left-0 z-50 block w-full md:hidden">
                <button className="w-full bg-color-pink px-4 py-3 text-lg text-neutral-100 ">
                  <a href={hackathon?.link} target="_blank" rel="noreferrer">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* New section start */}
        <div className="flex gap-4 mt-4 flex-col-reverse lg:flex-row">
          <div className="flex-1 dark:bg-zinc-900 bg-neutral-200 rounded-xl">
            <div className="px-4 py-6 md:px-6 md:py-8 ">
              {/* About the hackathon */}
              <div className="">
                <h1 className="text-2xl font-bold md:text-4xl">
                  About the hackathon
                </h1>
                <hr className="mt-4 block border-neutral-600 md:hidden"></hr>

                {/* About the hackathon icons */}

                <div className="mt-6 text-lg ">
                  <p className="dark:text-neutral-300 text-neutral-700 whitespace-pre-line">
                    {hackathon?.description}
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-10">
                {/* Rewards Section  */}
                <h1 className="text-2xl font-bold md:text-4xl ">Rewards</h1>
                <hr className="mt-4 block border-neutral-600 md:hidden"></hr>
                <div className="relative mt-6 grid grid-cols-1 gap-3 text-lg sm:grid-cols-2 lg:grid-cols-3 ">
                  {hackathon?.rewards?.title.trim().length > 0 &&
                  hackathon?.rewards?.prize.trim().length > 0 ? (
                    <div className="dark:bg-zinc-800 bg-neutral-100 py-4 px-3 w-full rounded-lg">
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                          <MdOutlineLeaderboard className="text-3xl" />
                          <div className="flex flex-col">
                            <p className="text-xl">Title</p>
                            <p className="text-sm ">
                              {hackathon?.rewards?.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <BsCashCoin className="text-3xl" />
                          <div className="flex flex-col">
                            <p className="text-xl">Prize</p>
                            <p className="text-sm ">
                              ${hackathon?.rewards?.prize}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Rewards not yet revealed!</p>
                  )}
                </div>
              </div>
              <div className="mt-12 mb-4">
                <h1 className="text-2xl font-bold md:text-4xl ">
                  Hackathon Sponsors
                </h1>
                <hr className="mt-4 block border-neutral-600 md:hidden"></hr>
                {hackathon?.sponsors ? (
                  <div className="mt-6 grid grid-cols-2 items-center gap-8 md:grid-cols-4 md:gap-8 dark:bg-zinc-800 bg-zinc-400 rounded-lg p-4">
                    {hackathon?.sponsors?.map(
                      (sponsor: string, index: number) => {
                        return (
                          <div key={index} className="overflow-hidden">
                            <Image
                              alt="Sponsor"
                              className="w-44"
                              src={sponsor}
                              width={500}
                              height={500}
                              loading="lazy"
                            ></Image>
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : (
                  <p className="mt-5">No sponsors to show!</p>
                )}
              </div>
            </div>
          </div>
          {/* Right section */}
          <div className="dark:bg-zinc-900 bg-neutral-200 rounded-xl p-6 w-full h-fit lg:w-72">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 dark:bg-gray-700 bg-gray-300">
                  <IoLocationOutline className="text-3xl" />
                </div>

                <div className="ml-1">
                  <p>Location</p>
                  <p className="dark:text-neutral-400 text-zinc-500">
                    {hackathon?.address.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 dark:bg-gray-700 bg-gray-300">
                  <IoTicket className="text-3xl" />
                </div>

                <div className="ml-1">
                  <p>Ticket</p>
                  <p className="dark:text-neutral-400 text-zinc-500">
                    {hackathon?.requiresTicket ? 'Requires Ticket' : 'Free'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 dark:bg-gray-700 bg-gray-300">
                  <GiDuration className="text-3xl" />
                </div>

                <div className="ml-1">
                  <p>Duration</p>
                  <p className="dark:text-neutral-400 text-zinc-500">
                    {hackathon?.duration} days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 dark:bg-gray-700 bg-gray-300">
                  <RiQuestionLine className="text-3xl" />
                </div>

                <div className="ml-1">
                  <p>Mode</p>
                  <p className="dark:text-neutral-400 text-zinc-500">
                    {hackathon?.mode}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 dark:bg-gray-700 bg-gray-300">
                  <MdGroups2 className="text-3xl " />
                </div>

                <div className="ml-1">
                  <p>Team Size</p>
                  <p className="dark:text-neutral-400 text-zinc-500">
                    {hackathon?.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 dark:bg-gray-700 bg-gray-300">
                  <BsCalendarDate className="text-3xl" />
                </div>

                <div className="ml-1">
                  <p>Deadline</p>
                  <p className="dark:text-neutral-400 text-zinc-500">
                    {hackathon?.deadline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_ENDPOINT as string
    }/api/hackathons/slug/${slug}`
  );
  const response = await res.json();
  const hackathon = response.hackathon[0];

  return {
    props: {
      hackathon,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/hackathons/`
  );
  const response = await res.json();

  const arr: string[] = response.hackathon.map((e: any) => {
    return e.slug;
  });

  const paths = arr.map((slug) => {
    return {
      params: { slug },
    };
  });

  return { paths, fallback: true };
};

export default HackathonDetails;
