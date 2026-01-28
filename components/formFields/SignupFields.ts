// components/formFields/SignupFields.ts

import { useState } from 'react';
import { FieldsType, FieldType, KeyboardType } from '../../types/Types';

const SignupFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: 'name',
      type: FieldType.STRING,
      placeHolder: 'Enter your name',
      label: 'Full Name',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'email',
      type: FieldType.STRING,
      placeHolder: 'Enter email address',
      label: 'Email Address',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.EMAIL_ADDRESS,
    },
    {
      name: 'password',
      type: FieldType.PASSWORD,
      placeHolder: '******',
      label: 'Password',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'confirmPassword',
      type: FieldType.PASSWORD,
      placeHolder: '******',
      label: 'Confirm Password',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);

  return { fields, setFields };
};

export default SignupFields;
