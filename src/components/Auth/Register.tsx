import { register } from '@/lib/db/useAppwriteClient';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreePolicy: boolean;
};

export default function SignUp() {
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

  const submitData = (data: FormData) => {
    register(data.email, data.password).then((account) =>
      alert(`Successfully created account with ID: ${account.$id}`)
    );
  };

  return (
    <form onSubmit={handleFormSubmit(submitData)}>
      <fieldset className="mt-2 text-center font-sans text-base font-semibold">
        Sign up with your email
        <hr className="mt-3" />
      </fieldset>

      <div className="font-xl mt-6">
        <input
          {...registerForm('name')}
          type="text"
          className="mx-auto h-10 w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-gray-500 focus:outline-4"
          placeholder="Enter Your Name"
        />
        {errors.name && (
          <div className="mt-2 text-sm font-medium text-red-500">
            {errors.name.message}
          </div>
        )}
      </div>

      <div className="mt-6">
        <input
          {...registerForm('email')}
          className="mx-auto  h-10 w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
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
          className="mx-auto h-10  w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="password"
          placeholder="Create New Password"
        />
        {errors.password && (
          <div className="mt-2 text-sm font-medium text-red-500">
            {errors.password.message}
          </div>
        )}
      </div>
      <div className="mt-6">
        <input
          {...registerForm('confirmPassword')}
          className="mx-auto h-10  w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <div className="mt-2 text-sm font-medium text-red-500">
            {errors.confirmPassword.message}
          </div>
        )}
      </div>
      <div className="mt-4">
        <input type="checkbox" {...registerForm('agreePolicy')} />
        <label className="ml-1 font-sans text-sm">
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
          <div className="mt-2 text-sm font-medium text-red-500">
            {errors.agreePolicy.message}
          </div>
        )}
      </div>

      <button
        className="mt-4 w-5/6 rounded-3xl bg-blue-600 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-800"
        type="submit"
      >
        Create account
      </button>
    </form>
  );
}
