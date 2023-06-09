import { NewsLetterFormType } from '@/lib/types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

const NewsLetter = () => {
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
      className="m-auto items-start justify-center sm:flex"
    >
      {/* name input */}
      <div className="mt-6">
        <input
          {...registerForm('name')}
          className="w-full bg-background px-[1rem] py-[0.5rem] text-center text-foreground outline-none"
          type="text"
          placeholder="Your Name"
        />
        {errors.name && (
          <div className="m-auto mt-2 w-fit bg-background px-[5px] text-sm font-medium text-red-500">
            {errors.name.message}
          </div>
        )}
      </div>
      {/* email input */}
      <div className="mt-6">
        <input
          {...registerForm('email')}
          className="w-full bg-background px-[1rem] py-[0.5rem] text-center text-foreground outline-none"
          type="email"
          placeholder="Your Email"
        />
        {errors.email && (
          <div className="m-auto mt-2 w-fit bg-background px-[5px] text-sm font-medium text-red-500">
            {errors.email.message}
          </div>
        )}
      </div>

      <button
        className="mt-6 w-full bg-background px-[1rem] py-[0.5rem] text-center text-color-pink sm:w-fit"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter;
