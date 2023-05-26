import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';
import { googleAuth } from '@/lib/db/useAppwriteClient';

import LogIn from '@/components/Auth/Login';
import SignUp from '@/components/Auth/Register';
import Button from '@/components/Buttons/Button';
import Backdrop from '@/components/layout/Backdrop';

import GoogleLogo from '~/svg/GoogleLogo.svg';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
type Props = {
  modal: null | 'auth' | 'menu';
  setModal: (modal: null | 'auth' | 'menu') => void;
  visibility: string;
};

export const Auth = ({ modal, setModal, visibility }: Props) => {
  const { theme } = useContext(SettingsContext);
  return (
    <>
      <Button
        type="button"
        className={clsxm(
          `${visibility}`,
          theme === 'light' ? 'hover:text-black' : ''
        )}
        onClick={() => {
          setModal('auth');
        }}
      >
        Get started
      </Button>
      <Backdrop
        preventScroll
        isBlur
        isGradient
        isDarkBg
        className="z-100 relative mx-auto mt-24 h-max w-11/12 max-w-lg rounded-xl bg-white p-10 shadow-xl"
        isOpen={modal === 'auth'}
        onRequestClose={() => setModal(null)}
      >
        <button
          onClick={() => setModal(null)}
          className="absolute right-2 top-2"
        >
          <AiOutlineClose className="h3" aria-hidden="true" />
        </button>
        <Tabs>
          <TabList className="flex flex-row justify-center space-x-1 rounded-xl bg-blue-900/20 p-1 text-sm">
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2  ring-offset-blue-400 default:select-all focus:bg-white focus:shadow  focus:outline-none focus:ring-2 aria-selected:bg-white aria-selected:shadow  aria-selected:outline-none aria-selected:ring-2">
              Signup
            </Tab>
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:bg-white focus:shadow focus:outline-none focus:ring-2 aria-selected:bg-white aria-selected:shadow  aria-selected:outline-none aria-selected:ring-2">
              Login
            </Tab>
          </TabList>
          <TabPanel className="text-center">
            <SignUp />
          </TabPanel>
          <TabPanel className="text-center">
            <LogIn />
          </TabPanel>
        </Tabs>
        <div className="mb-2 text-center text-xl font-medium text-black">
          Or
        </div>
        <Button
          type="submit"
          onClick={googleAuth}
          className="mx-auto flex flex-row justify-center gap-5 rounded-full border-2 px-5 py-4 font-bold text-white shadow-2xl"
          darkBg
        >
          <GoogleLogo /> Sign in with Google
        </Button>
      </Backdrop>
    </>
  );
};
