import { googleAuth } from '@/lib/db/useAppwriteClient';

import LogIn from '@/components/Auth/Login';
import SignUp from '@/components/Auth/Register';

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="ml-10 rounded-full px-5 py-1.5 text-center text-base font-medium text-white outline outline-2 outline-white  hover:bg-gray-800"
      >
        Get started
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="h-84 z-2 z-100 mx-auto my-auto mt-32 w-11/12 rounded-xl bg-white p-5 shadow-xl xl:w-1/3"
      >
        <button
          onClick={closeModal}
          className="relative left-4 bottom-4 float-right"
        >
          <AiOutlineClose
            className="block h-6 w-6 bg-white text-end text-blue-800"
            aria-hidden="true"
          />
        </button>
        <Tabs>
          <TabList className="mb-3 flex flex-row justify-center space-x-1 rounded-xl bg-blue-900/20 p-1 text-sm">
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2  ring-offset-blue-400 default:select-all focus:bg-white focus:shadow  focus:outline-none focus:ring-2">
              Signup
            </Tab>
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:bg-white focus:shadow focus:outline-none focus:ring-2">
              Login
            </Tab>
          </TabList>
          <TabPanel className="xl:text-center">
            <SignUp />
          </TabPanel>
          <TabPanel className="xl:text-center">
            <LogIn />
          </TabPanel>
        </Tabs>
        <div className="mb-2 text-center text-xl font-medium text-black">
          Or
        </div>
        <button
          type="submit"
          onClick={googleAuth}
          className="mx-auto flex flex-row gap-5 rounded-3xl border-2 border-blue-400 bg-white px-4 py-3 font-bold text-blue-600 shadow-2xl"
        >
          <span className="google-button__icon">
            <svg
              viewBox="0 0 366 372"
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                id="Shape"
                fill="#EA4335"
              />
              <path
                d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                id="Shape"
                fill="#FBBC05"
              />
              <path
                d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                id="Shape"
                fill="#4285F4"
              />
              <path
                d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                fill="#34A853"
              />
            </svg>
          </span>
          <span className="google-button__text">sign in with Google</span>
        </button>
      </Modal>
    </>
  );
};
