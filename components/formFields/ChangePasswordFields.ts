// components/formFields/ChangePasswordFields.ts
import { useState } from 'react';
import { FieldsType, FieldType, KeyboardType } from '../../types/Types';

const ChangePasswordFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: 'currentPassword',
      type: FieldType.PASSWORD,
      placeHolder: 'Enter your current password',
      label: 'Current Password',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'newPassword',
      type: FieldType.PASSWORD,
      placeHolder: 'Enter your new password',
      label: 'New Password',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'confirmPassword',
      type: FieldType.PASSWORD,
      placeHolder: 'Confirm your New Password',
      label: 'Confirm New Password',
      error: false,
      value: '',
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);

  return { fields, setFields };
};

export default ChangePasswordFields;
