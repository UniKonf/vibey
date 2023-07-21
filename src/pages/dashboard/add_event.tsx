import { EventFormType } from '@/lib/types';

import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Form/Input';
import Textarea from '@/components/Form/TextArea';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

function AddEvent() {
  const schema: ZodType<EventFormType> = z.object({
    name: z.string().trim().nonempty(),
    description: z.string().trim().nonempty(),
    date: z.date().min(new Date()),
    location: z.string().trim().nonempty(),
    tags: z.string().array().nonempty(),
    link: z.string().url(),
    theme: z.string().trim().nonempty(),
    linkedin: z.string().url(),
    twitter: z.string().url(),
  });

  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<EventFormType>({
    resolver: zodResolver(schema),
  });

  const submit = (data: EventFormType) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  // inputs
  const inputs = [
    {
      label: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Event Name',
    },
    {
      label: 'link',
      name: 'link',
      type: 'url',
      placeholder: 'Event Link',
    },
    {
      element: 'textarea',
      label: 'description',
      name: 'description',
      placeholder: 'Event Description',
      divClassName: 'md:col-span-2',
    },
    {
      label: 'tags',
      name: 'tags',
      type: 'text',
      placeholder: 'Event Tags',
    },
    {
      label: 'theme',
      name: 'theme',
      type: 'text',
      placeholder: 'Event Theme',
    },
    {
      label: 'date',
      name: 'date',
      type: 'date',
      placeholder: 'Event Date',
    },
    {
      label: 'location',
      name: 'location',
      type: 'text',
      placeholder: 'Event Name',
    },
    {
      label: 'likedin',
      name: 'linkedin',
      type: 'url',
      placeholder: 'Event Linkedin url',
    },
    {
      label: 'twitter',
      name: 'twitter',
      type: 'url',
      placeholder: 'Event twitter url',
    },
  ];
  return (
    <section className="layout flex flex-col gap-6 py-[100px]" id="add-event">
      <Heading title="Add New Events" />
      <form onSubmit={handleFormSubmit(submit)}>
        <div className="grid gap-4 md:grid-cols-2">
          {inputs.map((input, index) => (
            <div key={index} className={input.divClassName}>
              {input.element == 'textarea' ? (
                <Textarea {...registerForm(input.name)} {...input} />
              ) : (
                <Input {...registerForm(input.name)} {...input} />
              )}
              {errors.name && (
                <div className="m-auto mt-2 w-fit bg-background px-[5px] text-sm font-medium text-red-500">
                  {errors.name.message}
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-6">Add Event</Button>
      </form>
    </section>
  );
}

export default AddEvent;
