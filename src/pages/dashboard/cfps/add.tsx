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

interface TopicsType {
  name: string;
  details: string;
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

function AddCfp() {
  const formRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [isOnlineCfp, setIsOnlineCfp] = useState<OnlineEventType>({
    isOnline: false,
    location: '',
  });
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [topicsDetails, setTopicsDetails] = useState<TopicsType[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formData.append('address', JSON.stringify(isOnlineCfp));
      formData.append('tags', JSON.stringify(selectedTags));
      formData.append('topics', JSON.stringify(topicsDetails));

      const object: { [key: string]: any } = {};

      formData.forEach(function (value: any, key: string) {
        object[key] = value;
      });

      try {
        const res = await fetch('/api/cfps/addCfp', {
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
          } else {
            toast.error(res.message, {
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

  const handleOnlineCfp = (value: boolean) => {
    setIsOnlineCfp((prevValue) => ({
      ...prevValue,
      isOnline: value,
    }));
  };

  const handleTopicsCount = (e: any, type: string, index = 0) => {
    e.preventDefault();
    if (type === 'add') {
      topicsDetails.push({ name: '', details: '' });
      setTopicsDetails([...topicsDetails]);
    }
    if (type === 'remove') {
      const newTopics = topicsDetails.filter(
        (_, currentIndex: number) => currentIndex !== index
      );
      setTopicsDetails(newTopics);
    }
  };
  // inputs
  const inputs = [
    {
      element: 'input',
      label: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Cfp Name',
    },
    {
      element: 'input',
      label: 'Organizer',
      name: 'organizer',
      type: 'text',
      placeholder: 'Cfp Name',
    },
    {
      element: 'textarea',
      label: 'description',
      name: 'description',
      placeholder: 'Cfp Description',
    },
    {
      element: 'switch',
      label: 'online',
      name: 'address',
      type: 'switch',
      placeholder: 'Cfp Name',
    },
    {
      element: 'input',
      label: 'image',
      name: 'image',
      type: 'text',
      placeholder: 'Cfp Image',
    },
    {
      element: 'input',
      label: 'date',
      name: 'date',
      type: 'date',
      placeholder: 'Cfp date',
    },
    {
      element: 'input',
      label: 'duration',
      name: 'duration',
      type: 'number',
      placeholder: 'Cfp Duration',
    },
    {
      element: 'input',
      label: 'link',
      name: 'link',
      type: 'url',
      placeholder: 'Cfp Link',
    },
    {
      element: 'button',
      label: 'topics',
      name: 'topics',
      type: 'button',
      placeholder: 'Cfp Topics',
    },
    {
      element: 'multi-dropdown',
      label: 'tags',
      name: 'tags',
      type: 'multi-dropdown',
      placeholder: 'Cfp Tags',
    },
    {
      element: 'input',
      label: 'logo',
      name: 'logo',
      type: 'url',
      placeholder: 'Cfp logo',
    },
    {
      element: 'input',
      label: 'guidelines',
      name: 'guidelines',
      type: 'text',
      placeholder: 'Cfp Name',
    },
  ];

  return (
    <section className="layout flex flex-col gap-2 py-[100px]" id="add-Cfp">
      <Heading title="Add New Cfps" />
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
                {input.element === 'button' && (
                  <div>
                    <div className="flex items-stretch">
                      <Button
                        className="mt-6"
                        onClick={(e) => handleTopicsCount(e, 'add')}
                      >
                        Add Topic
                      </Button>{' '}
                      {/* <Button
                        className="mt-6"
                        onClick={() => setTopicsCount(topicsCount - 1)}
                      >
                        Delete Topic
                      </Button> */}
                    </div>
                    {topicsDetails.map((topic, index: number) => (
                      <div key={index}>
                        <>topic no {index + 1}</>
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
                          id="topic-detail"
                          name="topic-detail"
                          className="mr-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                          placeholder="Topic detail"
                          aria-label="Topic detail"
                          aria-describedby="Topic detail"
                        />
                        <Button
                          className="mt-6"
                          onClick={(e) => handleTopicsCount(e, 'remove', index)}
                        >
                          Delete Topic
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
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
                      checked={isOnlineCfp.isOnline as boolean}
                      onChange={(val) => handleOnlineCfp(val)}
                      className={`${
                        isOnlineCfp.isOnline ? 'bg-teal-900' : 'bg-teal-700'
                      }
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          isOnlineCfp.isOnline
                            ? 'translate-x-9'
                            : 'translate-x-0'
                        }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    {!isOnlineCfp.isOnline && (
                      <input
                        type={input.type}
                        id={input.name}
                        name={input.name}
                        className="ml-2 mx-auto h-10 w-full max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
                        onChange={(e) =>
                          setIsOnlineCfp((prevValue) => ({
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
              </div>
            </React.Fragment>
          ))}
        </div>
        <Button type="submit" className="mt-6">
          {buttonLoading ? 'loading' : 'Add Cfp'}
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

export default AddCfp;
