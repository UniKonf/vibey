import { register } from '@/lib/db/useAppwriteClient';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreePolicy: boolean;
};

export default function SignUp() {
  const router = useRouter();
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
    
  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const confirmPasswordToggle = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else setConfirmPasswordType("password");
  };

  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    register(data.name, data.email, data.password).then(() =>
      alert(`Successfully created account with ID:`)
    );
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleFormSubmit(submitData)}>
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
        />
        {errors.name && (
          <p className="mt-2 text-sm font-medium text-red-500">
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
        />
        {errors.email && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative flex item-center mt-6">
        <input
          {...registerForm('password')}
          className="mx-auto h-10  w-72 max-w-full rounded-lg pl-5 pr-8 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type={passwordType}
          placeholder="Create New Password"
        />
        <div onClick={passwordToggle} className="absolute right-3 lg:right-20 md:right-20 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
        </div>
        {errors.password && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="relative flex item-center mt-6">
        <input
          {...registerForm('confirmPassword')}
          className="mx-auto h-10  w-72 max-w-full rounded-lg pl-5  pr-8 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-gray-500 focus:outline-4"
          type={confirmPasswordType}
          placeholder="Confirm Password"
        />
        <div onClick={confirmPasswordToggle} className="absolute right-3 lg:right-20 md:right-20 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {confirmPasswordType === "password" ? <FiEyeOff /> : <FiEye />}
        </div>
        {errors.confirmPassword && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.confirmPassword.message}
          </p>
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
          <p className="mt-2 text-sm font-medium text-red-500">
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
    </form>
  );
}
