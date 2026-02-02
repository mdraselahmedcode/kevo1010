import { useState } from 'react';
import { FieldsType, FieldType, KeyboardType } from '@/types/Types';

const CustomerRequireServiceFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: 'serviceAddress',
      type: FieldType.STRING,
      placeHolder: '123 Main St Ann Arbor',
      label: 'Service Address',
      error: false,
      value: '456 Oak St, Detroit, MI', // sample
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'price',
      type: FieldType.NUMBER,
      placeHolder: '$0',
      label: 'Price',
      error: false,
      value: '150', // sample
      required: true,
      keyboard: KeyboardType.NUMBER_PAD,
    },
    {
      name: 'requestType',
      type: FieldType.SELECT,
      label: 'Request Type',
      value: 'scheduled', // default for testing
      options: [
        { label: 'Instant', value: 'instant' },
        { label: 'Scheduled', value: 'scheduled' },
      ],
      required: true,
      keyboard: KeyboardType.DEFAULT, // ✅ required
      error: false, // ✅ required
    },
    {
      name: 'date',
      type: FieldType.DATE,
      placeHolder: 'mm/dd/yyyy',
      label: 'Date',
      error: false,
      value: '02/05/2026', // sample
      required: true,
      keyboard: KeyboardType.DEFAULT,
      showLabel: true,
    },
    {
      name: 'time',
      type: FieldType.TIME,
      placeHolder: 'hh:mm am/pm',
      label: 'Time',
      error: false,
      value: '09:00 am', // sample
      required: true,
      keyboard: KeyboardType.DEFAULT,
      showLabel: true,
    },
    {
      name: 'additionalNote',
      type: FieldType.STRING,
      placeHolder: 'Any specific instruction or details..',
      label: 'Additional Notes',
      error: false,
      value: "It's an urget request", // sample
      required: false,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: 'images',
      type: FieldType.GRIDINPUT,
      label: 'Upload Images',
      //   value: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      value: '',
      required: false,
      multiple: true,
      max: 3,
      keyboard: KeyboardType.DEFAULT, // ✅ required
      error: false, // ✅ required
    },
  ]);

  return { fields, setFields };
};

export default CustomerRequireServiceFields;
