import { SettingsContext } from '@/lib/context/settings';
import { NewsLetterFormType } from '@/lib/types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

const NewsLetter = () => {
  const { theme } = useContext(SettingsContext);
  const [submitted, setSubmitted] = useState(false);
  const [selectedInput, setSelectedInput] = useState('');

  const schema: ZodType<NewsLetterFormType> = z.object({
    email: z.string().email(),
    // name: z.string().trim().nonempty(),
  });

  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<NewsLetterFormType>({
    resolver: zodResolver(schema),
  });

  // eslint-disable-next-line unused-imports/no-unused-vars
  const submit = (data: NewsLetterFormType) => {
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleFormSubmit(submit)}
      className="m-auto flex flex-col items-center justify-center md:flex-row md:gap-5"
    >
      <div
        className={`mt-5 w-full lg:w-7/12 rounded-xl relative flex items-center ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
      >
        <input
          {...registerForm('email')}
          className={`w-full rounded-md bg-background px-4 py-4 text-center border-none text-foreground outline-none ${
            selectedInput === 'email' && 'border border-solid border-slate-50'
          }
            ${submitted && 'hidden'}`}
          type="email"
          placeholder="Your Email"
          onClick={() => setSelectedInput('email')}
          disabled={submitted}
        />
        {errors.email && (
          <div className="absolute -bottom-6 m-auto mt-2 w-fit px-[5px] text-sm font-medium text-red-500">
            *You must enter a valid email!
          </div>
        )}
        <button
          className={`${
            submitted ? 'w-full expanded bg-[#53ce67]' : 'ml-2 bg-[#ed587e]'
          } rounded-md ${
            theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-200'
          } py-3 px-6 text-center text-color-black lg:text-lg duration-[0.3s] ease-in-out m-0`}
          type="submit"
          disabled={submitted}
        >
          {submitted ? 'Thanks for Subscribing! 👍' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
