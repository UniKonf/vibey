import 'react-toastify/dist/ReactToastify.css';
import { SettingsContext } from '../../lib/context/settings';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z, ZodType } from 'zod';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreePolicy: boolean;
};
interface setModalType {
  setModal: (modal: null | 'auth' | 'menu') => void;
}
export default function SignUp({ setModal }: setModalType) {
  const router = useRouter();
  const { theme } = useContext(SettingsContext);
  const schema: ZodType<FormData> = z
    .object({
      name: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
      agreePolicy: z.boolean().refine((value) => value === true, {
        message: 'You must agree to the terms and conditions',
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/register`,
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
            setModal(null);
            router.push('/dashboard');
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
    <form onSubmit={handleFormSubmit(submitData)} aria-label="Register form">
      <fieldset className="mt-2 text-center font-sans text-base font-semibold ">
        Sign up with your email
        <hr className="mt-3" />
      </fieldset>

      <div className="font-xl mt-6">
        <input
          {...registerForm('name')}
          type="text"
          className="mx-auto h-10 w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
          placeholder="Enter Your Name"
          aria-label="Enter your name"
          aria-describedby="name-error"
        />
        {errors.name && (
          <p
            className="mt-2 text-sm font-medium text-red-500"
            role="alert"
            id="name-error"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="mt-6">
        <input
          {...registerForm('email')}
          className="mx-auto  h-10 w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="email"
          placeholder="Email"
          aria-label="Enter your email"
          aria-describedby="email-error"
        />
        {errors.email && (
          <p
            className="mt-2 text-sm font-medium text-red-500"
            role="alert"
            id="email-error"
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="mt-6">
        <input
          {...registerForm('password')}
          className="mx-auto h-10  w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="password"
          placeholder="Create New Password"
          aria-label="Enter your password"
          aria-describedby="password-error"
        />
        {errors.password && (
          <p
            className="mt-2 text-sm font-medium text-red-500"
            role="alert"
            id="password-error"
          >
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="mt-6">
        <input
          {...registerForm('confirmPassword')}
          className="mx-auto h-10  w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="password"
          placeholder="Confirm Password"
          aria-label="Confirm your password"
          aria-describedby="confirmPassword-error"
        />
        {errors.confirmPassword && (
          <p
            className="mt-2 text-sm font-medium text-red-500"
            role="alert"
            id="confirmPassword-error"
          >
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          id="agreePolicy"
          {...registerForm('agreePolicy')}
        />
        <label className="ml-1 font-sans text-sm" htmlFor="agreePolicy">
          I agree to the{' '}
          <a href="#/" className="font-semibold text-blue-700">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#/" className="font-sans font-semibold text-blue-700">
            Privacy Policy
          </a>
        </label>
        {errors.agreePolicy && (
          <p className="mt-2 text-sm font-medium text-red-500" role="alert">
            {errors.agreePolicy.message}
          </p>
        )}
      </div>

      <button
        className="mt-4 w-5/6 rounded-3xl bg-blue-600 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-800"
        type="submit"
      >
        Create account
      </button>
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
    </form>
  );
}
