import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';

import 'react-toastify/dist/ReactToastify.css';
import { Switch } from '@headlessui/react';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface TagType {
  id: number;
  name: string;
}

interface RewardsType {
  title: string;
  prize: string;
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

function AddHackathon() {
  const formRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [isOnlineHackathon, setIsOnlineHackathon] = useState<OnlineEventType>({
    isOnline: false,
    location: '',
  });
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  // const [isTicketRequires, setIsTicketRequires] = useState<boolean>(false);
  const [rewardsDetails, setRewardsDetails] = useState<RewardsType[]>([]);
  // const [judgesDetails, setJudgesDetails] = useState([]);
  // const [topicsDetails, setTopicsDetails] = useState([]);
  // const [sponsorsDetails, setSponsorsDetails] = useState([]);
  // const [count, setCount] = useState({
  //   judges: { count: 0, array: [] },
  //   sponsors: { count: 0, array: [] },
  //   ideas: { count: 0, array: [] },
  // });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formData.append('mode', JSON.stringify(isOnlineHackathon));
      formData.append('tags', JSON.stringify(selectedTags));
      formData.append('rewards', JSON.stringify(rewardsDetails));

      const object: { [key: string]: any } = {};

      formData.forEach(function (value: any, key: string) {
        object[key] = value;
      });

      try {
        const res = await fetch('/api/hackathons/createHackathon', {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(object),
        }).then((r) => r.json());
        if (res.success) {
          setButtonLoading(false);
          //router.push('/dashboard');
        } else {
          if (res.errors && res.errors.length > 0) {
            let errorMessage = '';
            for (let i = 0; i < res.errors.length; i++) {
              errorMessage += i + 1 + '. ' + res.errors[i].msg + '\n';
            }
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

  const handleOnlineHackathon = (value: boolean) => {
    setIsOnlineHackathon((prevValue) => ({
      ...prevValue,
      isOnline: value,
    }));
  };
  // const handleSponsors = (e: any, type: string, index = 0) => {
  //   e.preventDefault();
  //   if (type === 'add') {
  //     sponsorsDetails.push('');
  //     setSponsorsDetails([...sponsorsDetails]);
  //   }
  //   if (type === 'remove') {
  //     const newSponsors = sponsorsDetails.filter(
  //       (sp: string, currentIndex: number) => currentIndex !== index
  //     );
  //     setSponsorsDetails(newSponsors);
  //   }
  // };

  const handleRewardsCount = (e: any, type: string, index = 0) => {
    e.preventDefault();
    if (type === 'add') {
      rewardsDetails.push({ title: '', prize: '' });
      setRewardsDetails([...rewardsDetails]);
    }
    if (type === 'remove') {
      const newSponsors = rewardsDetails.filter(
        (_, currentIndex: number) => currentIndex !== index
      );
      setRewardsDetails(newSponsors);
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
      name: 'organizer',
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
      name: 'mode',
      type: 'switch',
      placeholder: 'Hackathon Name',
    },
    {
      element: 'input',
      label: 'image',
      name: 'image',
      type: 'text',
      placeholder: 'Hackathon Image',
    },
    {
      element: 'input',
      label: 'deadline',
      name: 'deadline',
      type: 'date',
      placeholder: 'Hackathon deadline',
    },
    {
      element: 'input',
      label: 'Start Date',
      name: 'startDate',
      type: 'date',
      placeholder: 'Hackathon Start Date',
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
      element: 'input',
      label: 'Size',
      name: 'size',
      type: 'number',
      placeholder: 'Hackathon Size',
    },
    {
      element: 'input',
      label: 'Eligibility',
      name: 'eligibility',
      type: 'number',
      placeholder: 'Hackathon Eligibility',
    },

    // {
    //   element: 'topic-button',
    //   label: 'topics',
    //   name: 'topics',
    //   type: 'topic-button',
    //   placeholder: 'Hackathon Topics',
    // },
    {
      element: 'multi-dropdown',
      label: 'tags',
      name: 'tags',
      type: 'multi-dropdown',
      placeholder: 'Hackathon Tags',
    },
    {
      element: 'button',
      label: 'Rewards',
      name: 'linkedin',
      type: 'multi-input',
      placeholder: 'Hackathon Rewards',
    },
    // {
    //   element: 'input',
    //   label: 'linkedin',
    //   name: 'linkedin',
    //   type: 'url',
    //   placeholder: 'Hackathon Linkedin url',
    // },
    // {
    //   element: 'input',
    //   label: 'twitter',
    //   name: 'twitter',
    //   type: 'url',
    //   placeholder: 'Hackathon twitter url',
    // },
    {
      element: 'input',
      label: 'logo',
      name: 'logo',
      type: 'url',
      placeholder: 'Hackathon logo',
    },
    // {
    //   element: 'button',
    //   label: 'judges',
    //   name: 'judges',
    //   type: 'input',
    //   placeholder: 'Hackathon judges',
    // },
    // {
    //   element: 'switch',
    //   label: 'ticket',
    //   name: 'requires ticket',
    //   type: 'switch',
    //   placeholder: 'requires ticket',
    // },
    // {
    //   element: 'sponor-button',
    //   label: 'Sponsors',
    //   name: 'Sponsors',
    //   type: 'button',
    //   placeholder: 'Sponsors',
    // },
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
                {/* {input.element === 'topic-button' && (
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
                )} */}
                {input.element === 'multi-dropdown' && (
                  <div>
                    <Listbox
                      value={selectedTags}
                      onChange={setSelectedTags}
                      multiple
                    >
                      <div className="relative mt-1">
                        <Listbox.Button className="relative h-10 w-full cursor-default rounded-lg bg-gray-700 text-left outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-200 placeholder:center focus:outline-4 sm:text-sm">
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
                {input.element === 'button' && (
                  <div>
                    <div className="flex items-stretch">
                      <Button
                        className="mt-6"
                        onClick={(e) => handleRewardsCount(e, 'add')}
                      >
                        Add Reward
                      </Button>{' '}
                    </div>
                    {rewardsDetails.map((reward, index: number) => (
                      <div key={index}>
                        <>Reward for {index + 1}</>
                        <input
                          type="text"
                          id="reward-title"
                          name="reward-title"
                          className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                          onBlur={(e) => {
                            rewardsDetails[index].title = e.target.value;
                            setRewardsDetails([...rewardsDetails]);
                          }}
                          style={{ color: 'black' }}
                          placeholder="Reward-Title"
                          aria-label="Reward-Title"
                          aria-describedby="Reward-Title"
                        />

                        <input
                          type="text"
                          id="Reward-Prize"
                          name="reward-prize"
                          className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                          onBlur={(e) => {
                            rewardsDetails[index].prize = e.target.value;
                            setRewardsDetails([...rewardsDetails]);
                          }}
                          style={{ color: 'black' }}
                          placeholder="Reward-Prize"
                          aria-label="Reward-Prize"
                          aria-describedby="Reward-Prize"
                        />

                        <Button
                          className="mt-6"
                          onClick={(e) =>
                            handleRewardsCount(e, 'remove', index)
                          }
                        >
                          Delete Reward
                        </Button>
                      </div>
                    ))}
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
                      checked={isOnlineHackathon.isOnline as boolean}
                      onChange={(val) => handleOnlineHackathon(val)}
                      className={`${
                        isOnlineHackathon.isOnline
                          ? 'bg-teal-900'
                          : 'bg-teal-700'
                      }
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          isOnlineHackathon.isOnline
                            ? 'translate-x-9'
                            : 'translate-x-0'
                        }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    {!isOnlineHackathon.isOnline && (
                      <input
                        type={input.type}
                        id={input.name}
                        name={input.name}
                        className="ml-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                        onChange={(e) =>
                          setIsOnlineHackathon((prevValue) => ({
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
                {/* {input.element === 'switch' && input.label === 'ticket' && (
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
                )} */}
                {/* {input.element === 'button' && (
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
                )}*/}
              </div>
            </React.Fragment>
          ))}
        </div>
        <Button type="submit" className="mt-6">
          {buttonLoading ? 'loading' : 'Add Hackathon'}
        </Button>
      </form>
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

export default AddHackathon;
