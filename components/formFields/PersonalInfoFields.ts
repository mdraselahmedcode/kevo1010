// app/(profile-common)/formFields/PersonalInfoFields.ts
import { FieldType, KeyboardType, FieldsType } from '@/types/Types';

export const getPersonalInfoFields = (role: 'customer' | 'provider', data?: any): FieldsType[] => {
  // Base fields for all roles
  const baseFields: FieldsType[] = [
    {
      name: 'name',
      label: 'Full Name',
      value: data?.name || '',
      type: FieldType.STRING,
      keyboard: KeyboardType.DEFAULT,
      required: true,
      error: false,
    },
    {
      name: 'email',
      label: 'Email',
      value: data?.email || '',
      type: FieldType.STRING,
      keyboard: KeyboardType.EMAIL_ADDRESS,
      required: true,
      error: false,
    },
    {
      name: 'phone',
      label: 'Phone',
      value: data?.phone || '',
      type: FieldType.STRING,
      keyboard: KeyboardType.PHONE_PAD,
      required: true,
      error: false,
    },
    {
      name: 'address',
      label: 'Address',
      value: data?.address || '',
      type: FieldType.STRING,
      keyboard: KeyboardType.DEFAULT,
      required: false,
      error: false,
    },
  ];

  if (role === 'provider') {
    // future provider-specific fields can be added here
    // baseFields.push({ name: 'companyName', label: 'Company Name', ... })
  }

  return baseFields;
};
