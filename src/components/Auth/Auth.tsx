import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';

// import { googleAuth } from '@/lib/db/useAppwriteClient';
import LogIn from '@/components/Auth/Login';
import SignUp from '@/components/Auth/Register';
import Button from '@/components/Buttons/Button';
import Backdrop from '@/components/layout/Backdrop';

import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
// import GoogleLogo from '~/svg/GoogleLogo.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { toast, ToastContainer } from 'react-toastify';

type Props = {
  modal: null | 'auth' | 'menu';
  setModal: (modal: null | 'auth' | 'menu') => void;
  buttonClass?: string;
  setMenuStyle?: (e: string) => void;
  setStyle?: ((p: any) => void) | undefined;
};

export const Auth = ({ modal, setModal, buttonClass, setStyle }: Props) => {
  const { data: session } = useSession();

  const { theme } = useContext(SettingsContext);

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
    try {
      signIn(type, { callbackUrl: '/dashboard' }).then((response) => {
        if (response && response?.error) {
          // Handle error
          toast.error('Something went wrong. Try again', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
          router.push('/');
        } else {
          toast.success('You have successfully Sign in!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
          router.push('/dashboard');
        }
      });
    } catch (error) {
      toast.error('Something went wrong. Try again', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
    }
  };

  const handleSignOut = async () => {
    setIsSession(false);
    try {
      if (getCookie('token')) {
        Cookies.remove('token');
        toast.success('You have successfully Sign out!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          theme: theme,
          onClose: () => {
            setModal(null);
            router.push('/');
          },
        });
      } else {
        await signOut({ callbackUrl: '/' });
        toast.success('You have successfully Sign out!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme,
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Try again', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        onClose: () => {
          router.push('/dashboard');
        },
      });
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
      <Backdrop
        preventScroll
        isBlur
        isGradient
        isDarkBg
        className={` ${
          theme === 'dark' ? ' bg-gray-900' : 'bg-white'
        } z-100 relative mx-auto mt-24 h-max w-11/12 max-w-lg rounded-xl p-10 shadow-xl`}
        isOpen={modal === 'auth'}
        onRequestClose={() => setModal(null)}
      >
        <button
          onClick={() => setModal(null)}
          className="absolute right-2 top-2"
        >
          <AiOutlineClose
            className={` ${theme === 'dark' ? 'text-white' : 'text-black'} h3 `}
            aria-hidden="true"
          />
        </button>
        <Tabs className={theme === 'dark' ? 'text-white bg-gray-900 ' : ''}>
          <TabList className="flex flex-row justify-center space-x-1 rounded-xl bg-blue-900/20 p-1 text-sm">
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 focus:text-blue-700 ring-white ring-opacity-60 ring-offset-2  ring-offset-blue-400 default:select-all focus:bg-white focus:shadow  focus:outline-none focus:ring-2 aria-selected:bg-white aria-selected:shadow  aria-selected:outline-none aria-selected:ring-2">
              Signup
            </Tab>
            <Tab className="w-full rounded-lg py-2.5 text-center font-medium leading-5 focus:text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:bg-white focus:shadow focus:outline-none focus:ring-2 aria-selected:bg-white aria-selected:shadow  aria-selected:outline-none aria-selected:ring-2">
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
        <div
          className={` ${
            theme === 'dark' ? 'text-white bg-gray-900' : 'text-black'
          }   mb-2 text-center text-xl font-medium`}
        >
          Or
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <Button
            type="submit"
            onClick={() => handleSignIn('Google')}
            className="svgIcons"
          >
            {/* <GoogleLogo />  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M2.897 4.181c2.43-2.828 5.763-4.181 9.072-4.181 4.288 0 8.535 2.273 10.717 6.554-2.722.001-6.984 0-9.293 0-1.674.001-2.755-.037-3.926.579-1.376.724-2.415 2.067-2.777 3.644l-3.793-6.596zm5.11 7.819c0 2.2 1.789 3.99 3.988 3.99s3.988-1.79 3.988-3.99-1.789-3.991-3.988-3.991-3.988 1.791-3.988 3.991zm5.536 5.223c-2.238.666-4.858-.073-6.293-2.549-1.095-1.891-3.989-6.933-5.305-9.225-1.33 2.04-1.945 4.294-1.945 6.507 0 5.448 3.726 10.65 9.673 11.818l3.87-6.551zm2.158-9.214c1.864 1.734 2.271 4.542 1.007 6.719-.951 1.641-3.988 6.766-5.46 9.248 7.189.443 12.752-5.36 12.752-11.972 0-1.313-.22-2.66-.69-3.995h-7.609z" />
            </svg>
          </Button>
          <Button
            type="submit"
            onClick={() => handleSignIn('Github')}
            className="svgIcons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Button>
        </div>
      </Backdrop>
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
    </>
  );
};
