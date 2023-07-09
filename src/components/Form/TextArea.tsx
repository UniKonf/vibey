import clsxm from '@/lib/clsxm';

import React from 'react';

export type TextAreaProps = {
  divClassName?: string;
  label: string;
  name: string;
  className?: string;
} & React.ComponentPropsWithRef<'textarea'>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ divClassName, label, name, className, ...rest }, ref) => {
    return (
      <div className={clsxm('w-full mb-4', divClassName)}>
        <label className="uppercase" htmlFor={name}>
          {label}:
        </label>
        <textarea
          ref={ref}
          {...rest}
          id={name}
          name={name}
          rows={5}
          className={clsxm(
            'w-full rounded-md resize-y bg-background px-[1rem] py-[0.7rem] mt-2',
            'text-foreground',
            'outline-none border border-foreground border-opacity-[0.5]',
            'focus:border-opacity-[1]',
            className
          )}
        />
      </div>
    );
  }
);

export default TextArea;
