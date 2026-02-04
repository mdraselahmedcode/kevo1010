// import React from 'react';
// import { Text, TextStyle } from 'react-native';

// const TextBodySecondary = ({ text, style }: { text?: string; style?: TextStyle }) => {
//   return (
//     <Text
//       className="tracking-[ -0.41px] text-center font-nunito text-[14px] font-normal leading-[23px] text-[#4B4B4B]  "
//       style={[{}, style]}>
//       {text ?? 'text here'}
//     </Text>
//   );
// };

// export default TextBodySecondary;

import React from 'react';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';

type Props = TextProps & {
  text?: string;
  style?: StyleProp<TextStyle>;
  className?: string; // allows NativeWind classes
};

const TextBodySecondary = ({ text, style, className, ...rest }: Props) => {
  return (
    <Text
      className={`text-center font-nunito text-[14px] font-normal leading-[23px] tracking-[-0.41px] text-[#4B4B4B] ${className ?? ''}`}
      style={style}
      {...rest} // <-- allows numberOfLines, ellipsizeMode, etc.
    >
      {text ?? 'text here'}
    </Text>
  );
};

export default TextBodySecondary;
