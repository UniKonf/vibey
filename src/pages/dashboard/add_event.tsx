import { Heading } from '@/components';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';

import React from 'react';

function add_event() {
  return (
    <section className="layout flex flex-col gap-6 py-[100px]" id="add-event">
      <Heading title="Add New Events" />
      <form>
        <Input
          name="name"
          label="name"
          value=""
          placeholder="hello"
          onChange={() => {}}
        />
        <TextArea
          name="name"
          label="name"
          value=""
          placeholder="hello"
          onChange={() => {}}
        />
      </form>
    </section>
  );
}

export default add_event;
