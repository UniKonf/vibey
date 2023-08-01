import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';

import { Switch } from '@headlessui/react';
import { useRef, useState } from 'react';
import React from 'react';

function AddHackathon() {
  const formRef = useRef(null);
  const [isOnlineHackathon, setIsOnlineHackathon] = useState<boolean>(false);
  const [isTicketRequires, setIsTicketRequires] = useState<boolean>(false);
  // const [sponsors, setSponsors] = useState<string[]>([]);
  const [judgesCount, setJudgesCount] = useState<number>(0);
  const [topicsCount, setTopicsCount] = useState<number>(0);
  const [sponsorsCount, setSponsorsCount] = useState<number>(0);
  // const [count, setCount] = useState({
  //   judges: { count: 0, array: [] },
  //   sponsors: { count: 0, array: [] },
  //   ideas: { count: 0, array: [] },
  // });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const formData = formRef.current;
  };

  const handleSponsors = (type: string) => {
    if (type === 'add') {
      setSponsorsCount(sponsorsCount + 1);
    }
    if (type === 'remove') {
      setSponsorsCount(sponsorsCount - 1);
    }
  };
  // inputs
  const inputs = [
    {
      element: 'input',
      label: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Hackathon Name',
    },
    {
      element: 'input',
      label: 'Organizer',
      name: 'name',
      type: 'text',
      placeholder: 'Hackathon Name',
    },
    {
      element: 'textarea',
      label: 'description',
      name: 'description',
      placeholder: 'Hackathon Description',
    },
    {
      element: 'switch',
      label: 'online',
      name: 'name',
      type: 'switch',
      placeholder: 'Hackathon Name',
    },
    {
      element: 'input',
      label: 'date',
      name: 'date',
      type: 'date',
      placeholder: 'Hackathon Date',
    },
    {
      element: 'input',
      label: 'duration',
      name: 'duration',
      type: 'number',
      placeholder: 'Hackathon Duration',
    },
    {
      element: 'input',
      label: 'link',
      name: 'link',
      type: 'url',
      placeholder: 'Hackathon Link',
    },

    {
      element: 'topic-button',
      label: 'topics',
      name: 'topics',
      type: 'topic-button',
      placeholder: 'Hackathon Topics',
    },
    {
      element: 'input',
      label: 'linkedin',
      name: 'linkedin',
      type: 'url',
      placeholder: 'Hackathon Linkedin url',
    },
    {
      element: 'input',
      label: 'twitter',
      name: 'twitter',
      type: 'url',
      placeholder: 'Hackathon twitter url',
    },
    {
      element: 'input',
      label: 'logo',
      name: 'logo',
      type: 'url',
      placeholder: 'Hackathon logo',
    },
    {
      element: 'button',
      label: 'judges',
      name: 'judges',
      type: 'input',
      placeholder: 'Hackathon judges',
    },
    {
      element: 'switch',
      label: 'ticket',
      name: 'requires ticket',
      type: 'switch',
      placeholder: 'requires ticket',
    },
    {
      element: 'sponor-button',
      label: 'Sponsors',
      name: 'Sponsors',
      type: 'button',
      placeholder: 'Sponsors',
    },
  ];

  return (
    <section
      className="layout flex flex-col gap-2 py-[100px]"
      id="add-Hackathon"
    >
      <Heading title="Add New Hackathons" />
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-4 md:grid-cols-2">
          {inputs.map((input, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <label htmlFor={input.name} className="w-28 text-right">
                  {input.label}:
                </label>
              </div>
              <div>
                {input.element === 'textarea' && (
                  <textarea
                    id={input.name}
                    name={input.name}
                    style={{ color: 'black' }}
                    className="h-20 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4 "
                    placeholder={input.placeholder}
                    aria-label={input.placeholder}
                    aria-describedby={input.placeholder}
                  />
                )}
                {input.element === 'topic-button' && (
                  <div>
                    <div className="flex items-stretch">
                      <Button
                        className="mt-6"
                        onClick={() => setTopicsCount(topicsCount + 1)}
                      >
                        Add Topic
                      </Button>{' '}
                      <Button
                        className="mt-6"
                        onClick={() => setTopicsCount(topicsCount - 1)}
                      >
                        Delete Topic
                      </Button>
                    </div>

                    {Array.from({ length: topicsCount }).map(
                      (_, index: number) => (
                        <div key={index}>
                          <>topics {index + 1}</>
                          <input
                            type="text"
                            id="topic-name"
                            name="topic-name"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Topic-Name"
                            aria-label="Topic-Name"
                            aria-describedby="Topic-Name"
                          />
                          <input
                            type="text"
                            id="topic-description"
                            name="topic-description"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Topic description"
                            aria-label="Topic description"
                            aria-describedby="Topic description"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
                {input.element === 'input' && (
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    style={{ color: 'black' }}
                    className="mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                    placeholder={input.placeholder}
                    aria-label={input.placeholder}
                    aria-describedby={input.placeholder}
                  />
                )}
                {input.element === 'switch' && input.label === 'online' && (
                  <div className="flex items-stretch">
                    <Switch
                      checked={isOnlineHackathon}
                      onChange={setIsOnlineHackathon}
                      className={`${
                        isOnlineHackathon ? 'bg-teal-900' : 'bg-teal-700'
                      }
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          isOnlineHackathon ? 'translate-x-9' : 'translate-x-0'
                        }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    {!isOnlineHackathon && (
                      <input
                        type={input.type}
                        id={input.name}
                        name={input.name}
                        className="ml-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                        placeholder="location"
                        aria-label="location"
                        aria-describedby="location"
                      />
                    )}
                  </div>
                )}
                {input.element === 'switch' && input.label === 'ticket' && (
                  <Switch
                    checked={isTicketRequires}
                    onChange={setIsTicketRequires}
                    className={`${
                      isTicketRequires ? 'bg-teal-900' : 'bg-teal-700'
                    }
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        isTicketRequires ? 'translate-x-9' : 'translate-x-0'
                      }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                )}
                {input.element === 'button' && (
                  <div>
                    <div className="flex items-stretch">
                      <Button
                        className="mt-6"
                        onClick={() => setJudgesCount(judgesCount + 1)}
                      >
                        Add Judges
                      </Button>{' '}
                      <Button
                        className="mt-6"
                        onClick={() => setJudgesCount(judgesCount - 1)}
                      >
                        Delete Speakers
                      </Button>
                    </div>

                    {Array.from({ length: judgesCount }).map(
                      (_, index: number) => (
                        <div key={index}>
                          <>Speaker {index + 1}</>
                          <input
                            type="text"
                            id="judges-name"
                            name="judges-name"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="judges-Name"
                            aria-label="judges-Name"
                            aria-describedby="judges-Name"
                          />
                          <input
                            type="text"
                            id="judges-profile"
                            name="judges-profile"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="judges-Profile"
                            aria-label="judges-Profile"
                            aria-describedby="judges-Profile"
                          />
                          <input
                            type="text"
                            id="judges-designation"
                            name="judges-designation"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="judges Designation"
                            aria-label="judges Designation"
                            aria-describedby="judges Designation"
                          />
                          <input
                            type="text"
                            id="judges-twitter"
                            name="judges-twitter"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Twitter"
                            aria-label="Twitter"
                            aria-describedby="Twitter"
                          />
                          <input
                            type="text"
                            id="judges-linkedIn"
                            name="judges-linkedIn"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="LinkedIn"
                            aria-label="LinkedIn"
                            aria-describedby="LinkedIn"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
                {input.element === 'sponor-button' && (
                  <div>
                    <div className="flex items-stretch">
                      <Button
                        className="mt-6"
                        onClick={() => handleSponsors('add')}
                      >
                        Add Sponser
                      </Button>{' '}
                      <Button
                        className="mt-6"
                        onClick={() => handleSponsors('remove')}
                      >
                        Delete Sponser
                      </Button>
                    </div>

                    {Array.from({ length: sponsorsCount }).map(
                      (_, index: number) => (
                        <div key={index}>
                          {' '}
                          <input
                            type="text"
                            id="sponsor-name"
                            name="sponsor-name"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Sponsor Name"
                            aria-label="Sponsor Name"
                            aria-describedby="Sponsor Name"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <Button className="mt-6">Add Hackathon</Button>
      </form>
    </section>
  );
}

export default AddHackathon;
