'use client';
import { SingleEventType } from '@/lib/types';

import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';

import 'react-toastify/dist/ReactToastify.css';
import { Switch } from '@headlessui/react';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState } from 'react';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

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
interface OnlineEventType {
  isOnline: boolean;
  location: string;
}

interface SocialType {
  name: string;
  link: string;
}
interface SpeakerType {
  name: string;
  profile: string;
  designation: string;
  socials: SocialType[];
}

interface getEventDataValue extends SingleEventType {
  [key: string]: any;
}

function EditEvent() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { id } = router.query;
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [isOnlineEvent, setIsOnlineEvent] = useState<OnlineEventType>({
    isOnline: false,
    location: '',
  });
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [isTicketRequires, setIsTicketRequires] = useState<boolean>(false);
  const [speakerDetails, setSpeakerDetails] = useState<SpeakerType[]>([]);
  const [sponsorsDetails, setSponsorsDetails] = useState<string[]>([]);
  const [eventData, setEventData] = useState<getEventDataValue>({
    _id: '',
    name: '',
    slug: '',
    organizer: '',
    description: '',
    address: { isOnline: false, location: '' },
    date: new Date(),
    duration: 0,
    tags: [],
    link: '',
    image: '',
    logo: '',
    speakers: [],
    requiresTicket: false,
    sponsors: [],
  });
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setInitialLoading(true);
    const response = await fetch(
      `http://localhost:5000/api/events/id/${id}`
    ).then((res) => res.json());

    // console.log(response);
    if (response.success) {
      setEventData(response.events[0]);
      setIsOnlineEvent(response.events[0].address);
      setSponsorsDetails(response.events[0].sponsors);
      setSpeakerDetails(response.events[0].speakers);
      setIsTicketRequires(response.events[0].requiresTicket);
      setInitialLoading(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonLoading(true);
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formData.append('address', JSON.stringify(isOnlineEvent));
      formData.append('tags', JSON.stringify(selectedTags));
      formData.append('speakers', JSON.stringify(speakerDetails));
      formData.append('sponsors', JSON.stringify(sponsorsDetails));
      formData.append('requiresTicket', JSON.stringify(isTicketRequires));
      if (formRef?.current?.date1 !== '') {
        formData.append('date', formRef.current.date1.value.split('T')[0]);
        formData.append('time', formRef.current.date1.value.split('T')[1]);
      }

      const object: { [key: string]: any } = {};

      formData.forEach(function (value: any, key: string) {
        object[key] = value;
      });
      const finalData = { data: object, id: id };

      try {
        const res = await fetch('/api/events/editEvent', {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(finalData),
        }).then((r) => r.json());
        if (res.success) {
          toast.success('Event is successfully updated', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setButtonLoading(false);
          router.push('/dashboard');
        } else {
          if (res.errors && res.errors.length > 0) {
            const errorMessage = res.errors[0].msg;
            toast.error(errorMessage, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }
      } catch (errors) {
        toast.error('Something went wrong. Try again', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const handleSponsorsCount = (e: any, type: string, index = 0) => {
    e.preventDefault();
    if (type === 'add') {
      sponsorsDetails.push('');
      setSponsorsDetails([...sponsorsDetails]);
    }
    if (type === 'remove') {
      const newSponsors = sponsorsDetails.filter(
        (_sp: string, currentIndex: number) => currentIndex !== index
      );
      setSponsorsDetails(newSponsors);
    }
  };

  const handleSponsorsAdd = (_e: any, name: string, index: number) => {
    sponsorsDetails[index] = name;
    setSponsorsDetails([...sponsorsDetails]);
  };
  const handleSpeakerCount = (e: any, type: string, index = 0) => {
    e.preventDefault();
    if (type === 'add') {
      speakerDetails.push({
        name: '',
        profile: '',
        designation: '',
        socials: [{ name: '', link: '' }],
      });
      setSpeakerDetails([...speakerDetails]);
    }
    if (type === 'remove') {
      const newSpeaker = speakerDetails.filter(
        (_, currentIndex: number) => currentIndex !== index
      );
      setSpeakerDetails(newSpeaker);
    }
  };
  const handleOnlineEvent = (value: boolean) => {
    setIsOnlineEvent((prevValue) => ({
      ...prevValue,
      isOnline: value,
    }));
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
      name: 'organizer',
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
      label: 'date1',
      name: 'date1',
      type: 'datetime-local',
      placeholder: 'Event Date',
    },
    {
      element: 'input',
      label: 'duration',
      name: 'duration',
      type: 'number',
      placeholder: 'Event Duration',
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
      element: 'input',
      label: 'image',
      name: 'image',
      type: 'url',
      placeholder: 'Event Image',
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
      {initialLoading ? (
        'Loading'
      ) : (
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
                      defaultValue={eventData.description}
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
                                          selected
                                            ? 'font-medium'
                                            : 'font-normal'
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
                      defaultValue={
                        eventData[input.name as keyof SingleEventType] as any
                      }
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
                        checked={isOnlineEvent.isOnline as boolean}
                        onChange={(val) => handleOnlineEvent(val)}
                        className={`${
                          isOnlineEvent.isOnline ? 'bg-teal-900' : 'bg-teal-700'
                        }
relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            isOnlineEvent.isOnline
                              ? 'translate-x-9'
                              : 'translate-x-0'
                          }
pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                      {!isOnlineEvent.isOnline && (
                        <input
                          type="location"
                          id="location"
                          name="location"
                          defaultValue={eventData?.address?.location}
                          style={{ color: 'black' }}
                          className="ml-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                          onChange={(e) =>
                            setIsOnlineEvent((prevValue) => ({
                              ...prevValue,
                              location: e.target.value,
                            }))
                          }
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
relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
                          onClick={(e) => handleSpeakerCount(e, 'add')}
                        >
                          Add Speakers
                        </Button>{' '}
                      </div>
                      {speakerDetails.map((speaker, index: number) => (
                        <div key={index}>
                          <>Speaker {index + 1}</>
                          <input
                            type="text"
                            id="speaker-name"
                            name="speaker-name"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            onBlur={(e) => {
                              speakerDetails[index].name = e.target.value;
                              setSpeakerDetails([...speakerDetails]);
                            }}
                            defaultValue={speaker.name}
                            style={{ color: 'black' }}
                            placeholder="Speaker-Name"
                            aria-label="Speaker-Name"
                            aria-describedby="Speaker-Name"
                          />

                          <input
                            type="text"
                            id="speaker-profile"
                            name="speaker-profile"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            onBlur={(e) => {
                              speakerDetails[index].profile = e.target.value;
                              setSpeakerDetails([...speakerDetails]);
                            }}
                            defaultValue={speaker.profile}
                            style={{ color: 'black' }}
                            placeholder="Speaker-Profile"
                            aria-label="Speaker-Profile"
                            aria-describedby="Speaker-Profile"
                          />
                          <input
                            type="text"
                            id="speaker-designation"
                            name="speaker-designation"
                            defaultValue={speaker.designation}
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            onBlur={(e) => {
                              speakerDetails[index].designation =
                                e.target.value;
                              setSpeakerDetails([...speakerDetails]);
                            }}
                            style={{ color: 'black' }}
                            placeholder="Speaker Designation"
                            aria-label="Speaker Designation"
                            aria-describedby="Speaker Designation"
                          />
                          <input
                            type="text"
                            id="speaker-twitter"
                            name="speaker-twitter"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            onBlur={(e) => {
                              speakerDetails[index].socials.push({
                                name: 'twitter',
                                link: e.target.value,
                              });
                              setSpeakerDetails([...speakerDetails]);
                            }}
                            defaultValue={
                              speaker.socials[index].name === 'twitter'
                                ? speaker.socials[index].link
                                : ''
                            }
                            style={{ color: 'black' }}
                            placeholder="Twitter"
                            aria-label="Twitter"
                            aria-describedby="Twitter"
                          />
                          <input
                            type="text"
                            id="speaker-linkedIn"
                            name="speaker-linkedIn"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            onBlur={(e) => {
                              speakerDetails[index].socials.push({
                                name: 'linkedIn',
                                link: e.target.value,
                              });
                              setSpeakerDetails([...speakerDetails]);
                            }}
                            defaultValue={
                              speaker.socials[index].name === 'linkedIn'
                                ? (speaker.socials[index].link as string)
                                : ''
                            }
                            style={{ color: 'black' }}
                            placeholder="LinkedIn"
                            aria-label="LinkedIn"
                            aria-describedby="LinkedIn"
                          />
                          <Button
                            className="mt-6"
                            onClick={(e) =>
                              handleSpeakerCount(e, 'remove', index)
                            }
                          >
                            Delete Speakers
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  {input.element === 'sponor-button' && (
                    <div>
                      <div className="flex items-stretch">
                        <Button
                          className="mt-6"
                          onClick={(e) => handleSponsorsCount(e, 'add')}
                        >
                          Add Sponser
                        </Button>{' '}
                      </div>

                      {sponsorsDetails.map((sponsor, index: number) => (
                        <div key={index}>
                          {' '}
                          <input
                            type="text"
                            id="sponsor-name"
                            name="sponsor-name"
                            className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                            onBlur={(e) =>
                              handleSponsorsAdd(e, e.target.value, index)
                            }
                            defaultValue={sponsor}
                            style={{ color: 'black' }}
                            placeholder="Sponsor Name"
                            aria-label="Sponsor Name"
                            aria-describedby="Sponsor Name"
                          />
                          <Button
                            className="mt-6"
                            onClick={(e) =>
                              handleSponsorsCount(e, 'remove', index)
                            }
                          >
                            Delete Sponser
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          <Button type="submit" className="mt-6">
            {buttonLoading ? 'loading' : 'Add Event'}
          </Button>
        </form>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default EditEvent;
