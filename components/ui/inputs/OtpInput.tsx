// export default OtpInput;

import React, { useRef, useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

type OtpInputProps = {
  length?: number;
  onChange?: (otp: string) => void;
  onComplete?: (otp: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  inputProps?: TextInputProps;
};

const OtpInput: React.FC<OtpInputProps> = ({
  length = 4,
  onChange,
  onComplete,
  autoFocus = true,
  disabled = false,
  inputProps,
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    const otp = newCode.join('');
    onChange?.(otp);

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (!newCode.includes('') && otp.length === length) {
      onComplete?.(otp);
    }
  };

  const handleBackspace = (index: number) => {
    if (code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex flex-row justify-center gap-3 px-4">
      {code.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) inputs.current[index] = ref;
          }}
          value={value}
          editable={!disabled}
          autoFocus={autoFocus && index === 0}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') handleBackspace(index);
          }}
          keyboardType="number-pad"
          returnKeyType="done"
          maxLength={1}
          textContentType="oneTimeCode"
          className={`
    h-[50px]
    min-w-[48px]
    max-w-[72px]
    flex-1
    rounded-full
    border
    border-[#E1E1E1]
    bg-[#E9E9E9]
    text-center
    text-xl
    font-semibold
    ${focusedIndex === index ? 'border-primary' : 'text-black'}
  `}
          {...inputProps}
        />
      ))}
    </View>
  );
};

export default OtpInput;
