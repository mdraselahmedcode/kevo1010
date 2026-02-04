// import React from 'react';
// import { Text, TextStyle } from 'react-native';

// const TextBodySmall = ({ text, style }: { text?: string; style?: TextStyle }) => {
//   return (
//     <Text
//       className="text-center font-nunito text-[12px] font-normal leading-[18px] tracking-[-0.17px] text-[#4B4B4B]  "
//       style={[{}, style]}>
//       {text ?? 'text here'}
//     </Text>
//   );
// };

// export default TextBodySmall;

import React from 'react';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';

type Props = TextProps & {
  text?: string;
  style?: StyleProp<TextStyle>;
  className?: string; // for NativeWind classes
};

const TextBodySmall = ({ text, style, className, ...rest }: Props) => {
  return (
    <Text
      className={`text-center font-nunito text-[12px] font-normal leading-[18px] tracking-[-0.17px] text-[#4B4B4B] ${className ?? ''}`}
      style={style}
      {...rest} // <-- now accepts numberOfLines, ellipsizeMode, etc.
    >
      {text ?? 'text here'}
    </Text>
  );
};

export default TextBodySmall;
