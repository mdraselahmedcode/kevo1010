// import { useState } from "react";
// import { FieldsType, FieldType, KeyboardType } from "@/types/Types";

// const ForgetPasswordFields = () => {
//   const [fields, setFields] = useState<FieldsType[]>([
//     {
//       name: "phone",
//       type: FieldType.STRING,
//       placeHolder: "Enter Phone Number",
//       label: "Phone Number",
//       error: false,
//       value: "+8801566026301",
//       required: true,
//       keyboard: KeyboardType.NUMERIC,
//     },
//   ]);
//   return { fields, setFields };
// };

// export default ForgotPasswordFields;

import { useState } from 'react';
import { FieldsType, FieldType, KeyboardType } from '@/types/Types';

const ForgotPasswordFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: 'email',
      type: FieldType.STRING,
      placeHolder: 'Enter your email',
      label: 'Email Address',
      error: false,
      value: 'mdraselahmed.code@gmail.com',
      required: true,
      keyboard: KeyboardType.EMAIL_ADDRESS,
    },
  ]);

  return { fields, setFields };
};

export default ForgotPasswordFields;
