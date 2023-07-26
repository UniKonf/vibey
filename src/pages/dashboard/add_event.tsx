import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';

import { Switch } from '@headlessui/react';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import React from 'react';

interface TagType {
  id: number;
  name: string;
}
const Tags = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'ReactJs' },
  { id: 4, name: 'NodeJs' },
  { id: 5, name: 'NextJs' },
];

function AddEvent() {
  const formRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [isOnlineEvent, setIsOnlineEvent] = useState<boolean>(false);
  const [isTicketRequires, setIsTicketRequires] = useState<boolean>(false);
  // const [sponsors, setSponsors] = useState<string[]>([])
  const [speakerCount, setSpeakerCount] = useState<number>(0);
  const [sponsorsCount, setSponsorsCount] = useState<number>(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const formData = formRef.current;
  };

  const handleSponsors = (type: string) => {
    if (type === 'add') {
      setSponsorsCount(sponsorsCount + 1);
      // setSponsors((prevSponsors)=>[...prevSponsors,name])
    }
    if (type === 'remove') {
      setSponsorsCount(sponsorsCount - 1);
      // setSponsors((prevSponsors)=>{
      //   return prevSponsors.filter((sponsorName: string,currentIndex:number)=>index!==currentIndex)

      // })
    }
  };
  // inputs
  const inputs = [
    {
      element: 'input',
      label: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Event Name',
    },
    {
      element: 'input',
      label: 'Organizer',
      name: 'name',
      type: 'text',
      placeholder: 'Event Name',
    },
    {
      element: 'textarea',
      label: 'description',
      name: 'description',
      placeholder: 'Event Description',
    },
    {
      element: 'switch',
      label: 'online',
      name: 'name',
      type: 'switch',
      placeholder: 'Event Name',
    },
    {
      element: 'input',
      label: 'date',
      name: 'date',
      type: 'datetime-local',
      placeholder: 'Event Date',
    },
    {
      element: 'input',
      label: 'duration',
      name: 'duration',
      type: 'number',
      placeholder: 'Event Date',
    },
    {
      element: 'input',
      label: 'link',
      name: 'link',
      type: 'url',
      placeholder: 'Event Link',
    },

    {
      element: 'multi-dropdown',
      label: 'tags',
      name: 'tags',
      type: 'multi-dropdown',
      placeholder: 'Event Tags',
    },
    {
      element: 'input',
      label: 'linkedin',
      name: 'linkedin',
      type: 'url',
      placeholder: 'Event Linkedin url',
    },
    {
      element: 'input',
      label: 'twitter',
      name: 'twitter',
      type: 'url',
      placeholder: 'Event twitter url',
    },
    {
      element: 'input',
      label: 'logo',
      name: 'logo',
      type: 'url',
      placeholder: 'Event logo',
    },
    {
      element: 'button',
      label: 'speakers',
      name: 'speakers',
      type: 'input',
      placeholder: 'Event Speakers',
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
    <section className="layout flex flex-col gap-2 py-[100px]" id="add-event">
      <Heading title="Add New Events" />
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
                {input.element === 'multi-dropdown' && (
                  <div>
                    <Listbox
                      value={selectedTags}
                      onChange={setSelectedTags}
                      multiple
                    >
                      <div className="relative mt-1">
                        <Listbox.Button className="relative h-10 w-full cursor-default rounded-lg bg-white text-left outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 placeholder:center focus:outline-4 sm:text-sm">
                          <span
                            className="block truncate ml-6"
                            style={{ color: 'black' }}
                            placeholder="Tags"
                          >
                            {selectedTags
                              .map((tag: TagType) => tag.name)
                              .join(', ')}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {Tags.map((tag: TagType, tagIdx: number) => (
                              <Listbox.Option
                                key={tagIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? 'bg-amber-100 text-amber-900'
                                      : 'text-gray-900'
                                  }`
                                }
                                value={tag}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {tag.name as string}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
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
                      checked={isOnlineEvent}
                      onChange={setIsOnlineEvent}
                      className={`${
                        isOnlineEvent ? 'bg-teal-900' : 'bg-teal-700'
                      }
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          isOnlineEvent ? 'translate-x-9' : 'translate-x-0'
                        }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    {!isOnlineEvent && (
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
                        onClick={() => setSpeakerCount(speakerCount + 1)}
                      >
                        Add Speakers
                      </Button>{' '}
                      <Button
                        className="mt-6"
                        onClick={() => setSpeakerCount(speakerCount - 1)}
                      >
                        Delete Speakers
                      </Button>
                    </div>

                    {Array.from({ length: speakerCount }).map(
                      (_, index: number) => (
                        <div key={index}>
                          <>Speaker {index + 1}</>
                          <input
                            type="text"
                            id="speaker-name"
                            name="speaker-name"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Speaker-Name"
                            aria-label="Speaker-Name"
                            aria-describedby="Speaker-Name"
                          />
                          <input
                            type="text"
                            id="speaker-profile"
                            name="speaker-profile"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Speaker-Profile"
                            aria-label="Speaker-Profile"
                            aria-describedby="Speaker-Profile"
                          />
                          <input
                            type="text"
                            id="speaker-designation"
                            name="speaker-designation"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Speaker Designation"
                            aria-label="Speaker Designation"
                            aria-describedby="Speaker Designation"
                          />
                          <input
                            type="text"
                            id="speaker-twitter"
                            name="speaker-twitter"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            placeholder="Twitter"
                            aria-label="Twitter"
                            aria-describedby="Twitter"
                          />
                          <input
                            type="text"
                            id="speaker-linkedIn"
                            name="speaker-linkedIn"
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
                {}
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
        <Button className="mt-6">Add Event</Button>
      </form>
    </section>
  );
}

export default AddEvent;
