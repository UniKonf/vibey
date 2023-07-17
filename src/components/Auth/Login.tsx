import 'react-toastify/dist/ReactToastify.css';
import { SettingsContext } from '../../lib/context/settings';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z, ZodType } from 'zod';

type FormData = {
  email: string;
  password: string;
};
interface setModalType {
  setModal: (modal: null | 'auth' | 'menu') => void;
}
export default function LogIn({ setModal }: setModalType) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { theme } = useContext(SettingsContext);

  const togglePasswordVisibility = (e: any) => {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  };

  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const submitData = async (data: FormData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      ).then((res) => res.json());

      if (response.success) {
        const { token } = response;
        Cookies.set('token', token, { expires: 7 });
        toast.success(response.message, {
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
            router.push('/dashboard');
            setModal(null);
          },
        });
      } else {
        if (response.errors && response.errors.length > 0) {
          const errorMessage = response.errors[0].msg;
          toast.error(errorMessage, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
        } else {
          toast.error(response.message, {
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
      });
    }
  };
  return (
    <form onSubmit={handleFormSubmit(submitData)} aria-label="Login-form">
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
        theme={theme}
      />
      <fieldset className="mt-2 text-center font-sans text-base font-semibold">
        Login with your email
        <hr className="mt-3" />
      </fieldset>
      <div className="mt-6">
        <input
          {...registerForm('email')}
          className="mx-auto h-10 w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="email"
          placeholder="Email"
          aria-label="Enter your email"
          aria-describedby="email-error"
        />
        {errors.email && (
          <div
            className="mt-2 text-sm font-medium text-red-500"
            role="alert"
            id="email-error"
          >
            {errors.email.message}
          </div>
        )}
      </div>
      <div className="mt-6">
        <div className="container relative">
          <input
            {...registerForm('password')}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
            className="mx-auto h-10 w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
            aria-label="Enter your password"
            aria-describedby="password-error"
          />
          <button
            className="absolute inset-y-0 right-1 flex items-center px-4 text-gray-600 md:right-16"
            onClick={(e) => togglePasswordVisibility(e)}
            aria-label={isPasswordVisible ? 'Hide Password' : 'Show Password'}
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <div
            className="mt-2 text-sm font-medium text-red-500"
            role="alert"
            id="password-error"
          >
            {errors.password.message}
          </div>
        )}
      </div>
      <button
        className="mt-5 w-5/6 rounded-3xl bg-blue-600 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-800"
        type="submit"
      >
        Login
      </button>
      <ToastContainer
        position="top-right"
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
    </form>
  );
}
