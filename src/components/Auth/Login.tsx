import { login } from '@/lib/db/useAppwriteClient';

import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z, ZodType } from 'zod';

type FormData = {
  email: string;
  password: string;
};

export default function LogIn() {
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

  const submitData = (data: FormData) => {
    login(data.email, data.password)
      .then(
        () => {
          alert(`Successfully logged In`);
          toast.success('loggged in sucessfully', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        function () {
          toast.error('invalid credentials! please sign up', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      )
      .finally(() => router.push('/dashboard'));
  };

  return (
    <form onSubmit={handleFormSubmit(submitData)}>
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
        />
        {errors.email && (
          <div className="mt-2 text-sm font-medium text-red-500">
            {errors.email.message}
          </div>
        )}
      </div>
      <div className="mt-6">
        <input
          {...registerForm('password')}
          className="mx-auto h-10 w-72 max-w-full rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="mt-2 text-sm font-medium text-red-500">
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
    </form>
  );
}
