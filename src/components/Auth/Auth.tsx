import clsxm from '@/lib/clsxm';

// import { googleAuth } from '@/lib/db/useAppwriteClient';
import LogIn from '@/components/Auth/Login';
import SignUp from '@/components/Auth/Register';
import Button from '@/components/Buttons/Button';
import Backdrop from '@/components/layout/Backdrop';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
// import GoogleLogo from '~/svg/GoogleLogo.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useContext } from 'react';
import { SettingsContext } from '@/lib/context/settings';
type Props = {
  modal: null | 'auth' | 'menu';
  setModal: (modal: null | 'auth' | 'menu') => void;
  buttonClass?: string;
  setMenuStyle?: (e: string) => void;
  setStyle?: ((p: any) => void) | undefined;
};

export const Auth = ({ modal, setModal, buttonClass, setStyle }: Props) => {
  const { data: session } = useSession();

  
  const {theme}=useContext(SettingsContext)

  const router = useRouter();
  const [isSession, setIsSession] = useState<boolean>(false);

  const authHandler = () => {
    setModal('auth');
    setStyle &&
      setStyle((p: string) => (p === '-right-72' ? 'right-0' : '-right-72'));
  };
  function getCookie(cookieName: string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const [name] = cookies[i].trim().split('=');
      if (name === cookieName) {
        return true;
      }
    }
    return false;
  }
  const handleSignIn = async (type: string) => {
    signIn(type, { callbackUrl: '/dashboard' });
  };

  const handleSignOut = async () => {
    setIsSession(false);
    if (getCookie('token')) {
      Cookies.remove('token');
      router.push('/');
    } else {
      await signOut({ callbackUrl: '/' });
    }
  };

  useEffect(() => {
    if ((session && session.user) || getCookie('token')) {
      setIsSession(true);
    } else {
      setIsSession(false);
    }
  }, [session, getCookie('token')]);

  return (
    <>
      {!isSession ? (
        <Button
          type="button"
          variant="outline"
          className={clsxm(`ml-auto px-4 md:ml-0 md:px-7`, buttonClass)}
          onClick={authHandler}
        >
          Get started
        </Button>
      ) : (
        <Button
          type="button"
          variant="outline"
          className={clsxm(`ml-auto px-4 md:ml-0 md:px-7`, buttonClass)}
          onClick={() => handleSignOut()}
        >
          Sign Out
        </Button>
      )}

      <Backdrop
        preventScroll
        isBlur
        isGradient
        isDarkBg
        className={` ${theme==='dark'?' bg-gray-900':'bg-white'} z-100 relative mx-auto mt-24 h-max w-11/12 max-w-lg rounded-xl p-10 shadow-xl`}
        isOpen={modal === 'auth'}
        onRequestClose={() => setModal(null)}
      >
        <button
          onClick={() => setModal(null)}
          className="absolute right-2 top-2"
        >
          <AiOutlineClose className= {` ${theme==='dark'?'text-white':'text-black'} h3 `} aria-hidden="true" />
        </button>
        <Tabs className={theme==='dark'?'text-white bg-gray-900 ':''}>
          <TabList className="flex flex-row justify-center space-x-1 rounded-xl bg-blue-900/20 p-1 text-sm">
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2  ring-offset-blue-400 default:select-all focus:bg-white focus:shadow  focus:outline-none focus:ring-2 aria-selected:bg-white aria-selected:shadow  aria-selected:outline-none aria-selected:ring-2">
              Signup
            </Tab>
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:bg-white focus:shadow focus:outline-none focus:ring-2 aria-selected:bg-white aria-selected:shadow  aria-selected:outline-none aria-selected:ring-2">
              Login
            </Tab>
          </TabList>

          <TabPanel className="text-center">
            <SignUp setModal={setModal} />
          </TabPanel>
          <TabPanel className="text-center">
            <LogIn setModal={setModal} />

          </TabPanel>
        </Tabs>
        <div className={` ${theme==='dark'?'text-white bg-gray-900':'text-black'}   mb-2 text-center text-xl font-medium`}>
          Or
        </div>
        <div className='flex flex-row  gap-5'>
        <Button
          type="submit"
          onClick={() => handleSignIn('Google')}
          className="mx-auto flex flex-row justify-center  rounded-full border-2 px-5 py-4 font-bold text-white shadow-2xl"

          darkBg
        >
          {/* <GoogleLogo />  */}
          Sign in with Google
        </Button>
        <Button
          type="submit"
          onClick={() => handleSignIn('Github')}
          className="mx-auto flex flex-row justify-center  rounded-full border-2 px-5 py-4 font-bold text-white shadow-2xl"

          darkBg
        >
          {/* <GoogleLogo />  */}
          Sign in with Github
        </Button>
        </div>
      </Backdrop>
    </>
  );
};
