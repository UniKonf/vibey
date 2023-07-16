import Image from 'next/image';
import { useEffect, useState } from 'react';

function GetContributor() {
  const [contributors, setContributors] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://api.github.com/repos/UniKonf/vibey/contributors?per_page=100`
    );

    const data = await res.json();
    const contributorsData = data.filter(
      (contributor: any) => !contributor.login.includes('dependabot[bot]')
    );
    setContributors(contributorsData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-32">
      <p className="text-white text-4xl uppercase text-center font-semibold">
        Our Contributors
      </p>
      <div
        className="w-[100%] flex flex-wrap justify-evenly pt-10"
        style={{ rowGap: '1.5rem' }}
      >
        {contributors?.map((contributor: any, i) => (
          <div
            className="w-[80%] md:w-[26%] border-2 border-black py-4 px-5 rounded-xl flex items-center flex-col dark:border-white space-y-3 
            hover:scale-105 ease-linear shadow-xl shadow-slate-700"
            key={i}
          >
            <Image
              className="rounded-full w-52 hover:scale-105"
              src={contributor.avatar_url}
              alt={contributor.login}
            />
            <p className="text-xl">{contributor.login}</p>
            <p>{contributor.contributions} Commits</p>
            <a href={contributor.html_url} target="_blank" rel="noreferrer">
              <button className="px-20 py-2 rounded-lg bg-violet-500">
                Profile
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetContributor;
