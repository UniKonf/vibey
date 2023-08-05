import { SettingsContext } from '@/lib/context/settings';
import { NewsLetterFormType } from '@/lib/types';
import { FaSpinner } from 'react-icons/fa';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import { z, ZodType } from 'zod';

const NewsLetter = () => {
  const { theme } = useContext(SettingsContext);

  
const [isLoading, setIsLoading] = useState(false);

  const [selectedInput, setSelectedInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const submit = async (data: NewsLetterFormType) => {
    try {
      setIsLoading(true);
      console.log(data);
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send newsletter subscription data.');
      }
  
      console.log('Newsletter subscription data sent successfully!');
      setIsSubscribed(true);
    } catch (error) {
      console.error('Error sending newsletter subscription data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <form
      onSubmit={handleFormSubmit(submit)}
      className="m-auto flex flex-col items-center justify-center md:flex-row md:gap-5"
    >
      {/* name input */}
      {/* <div className="mt-5 w-full md:w-9/12 lg:w-6/12">
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
      </div> */}
      {/* email input */}
      <div
        className={`mt-5 w-full lg:w-7/12 py-1 md:py-2 rounded-xl relative flex items-center ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
      >
        <input
          {...registerForm('email')}
          className={`w-full rounded-md bg-background px-4 py-4 text-center border-none text-foreground outline-none ${
            selectedInput === 'email' && 'border border-solid border-slate-50'
          }`}
          type="email"
          placeholder="Your Email"
          onClick={() => setSelectedInput('email')}
        />
        {errors.email && (
          <div className="absolute -bottom-6 m-auto mt-2 w-fit px-[5px] text-sm font-medium text-red-500">
            *You must enter a valid email!
          </div>
        )}
<button
  className={`mr-2 w-fit rounded-xl ${
    theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-200'
  } py-3 px-6 text-center text-color-pink lg:text-lg transition-none`}
  type="submit"
  disabled={isLoading}
>
  {isLoading ? (
    <span
      className="loader inline-block mr-2"
      style={{
        width: '48px',
        height: '48px',
        border: '5px solid #FFF',
        borderBottomColor: '#FF3D00',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: 'rotation 1s linear infinite',
      }}
    ></span>
  ) : isSubscribed ? (
    <>
      <FaCheckCircle className="inline-block mr-2" />
      Subscribed!
    </>
  ) : (
    'Subscribe'
  )}
  <style>
    {`
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
  </style>
</button>




      </div>
    </form>
  );
};

export default NewsLetter;
