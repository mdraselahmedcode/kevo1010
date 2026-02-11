import { useState } from 'react';
import { FieldsType, FieldType, KeyboardType } from '../../types/Types';

const SupportFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: 'fullName',
      type: FieldType.STRING,
      placeHolder: 'John Doe',
      label: 'Full Name',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'email',
      type: FieldType.STRING,
      placeHolder: 'example@email.com',
      label: 'Email Address',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.EMAIL_ADDRESS,
    },
    {
      name: 'description',
      type: FieldType.TEXTAREA,
      placeHolder: 'Enter your message...',
      label: 'Description',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);

  return { fields, setFields };
};

export default SupportFields;
