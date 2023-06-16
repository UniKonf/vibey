import { NewsLetterFormType } from '@/lib/types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

const NewsLetter = () => {
  const [selectedInput, setSelectedInput] = useState('');

  const schema: ZodType<NewsLetterFormType> = z.object({
    email: z.string().email(),
    name: z.string().trim().nonempty(),
  });

  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<NewsLetterFormType>({
    resolver: zodResolver(schema),
  });

  const submit = (data: NewsLetterFormType) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form
      onSubmit={handleFormSubmit(submit)}
      className="m-auto flex flex-col items-center justify-center md:flex-row md:gap-5"
    >
      {/* name input */}
      <div className="mt-5 w-full md:w-9/12 lg:w-6/12">
        <input
          {...registerForm('name')}
          className={`w-full rounded-md bg-background px-[1rem] py-[0.7rem] text-center text-foreground outline-none ${
            selectedInput === 'name' && 'border border-solid border-slate-50'
          }`}
          type="text"
          placeholder="Your Name"
          onClick={() => setSelectedInput('name')}
        />
        {errors.name && (
          <div className="m-auto mt-2 w-fit bg-background px-[5px] text-sm font-medium text-red-500">
            {errors.name.message}
          </div>
        )}
      </div>
      {/* email input */}
      <div className="mt-5 w-full md:w-9/12 lg:w-6/12">
        <input
          {...registerForm('email')}
          className={`w-full rounded-md bg-background px-[1rem] py-[0.7rem] text-center text-foreground outline-none ${
            selectedInput === 'email' && 'border border-solid border-slate-50'
          }`}
          type="email"
          placeholder="Your Email"
          onClick={() => setSelectedInput('email')}
        />
        {errors.email && (
          <div className="m-auto mt-2 w-fit bg-background px-[5px] text-sm font-medium text-red-500">
            {errors.email.message}
          </div>
        )}
      </div>

      <button
        className="mt-5 w-full rounded-full bg-background px-[2rem] py-[0.7rem] text-center text-color-pink sm:w-fit lg:px-10 lg:text-lg"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter;
