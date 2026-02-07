import { TextInput, View, TextInputProps } from 'react-native';
import PrimaryCard from '@/components/ui/PrimaryCard';

type Props = TextInputProps & {
  minHeight?: number;
};

export default function MultilineInputField({
  value,
  onChangeText,
  placeholder,
  minHeight = 120,
  style,
  ...rest
}: Props) {
  return (
    <View className="rounded-lg border-2 border-[#D8D9DB] bg-background  p-1">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline
        textAlignVertical="top"
        numberOfLines={6}
        style={[
          {
            fontSize: 14,
            minHeight,
            padding: 8,
            color: '#111',
            fontFamily: 'Nunito-Regular',
          },
          style,
        ]}
        {...rest}
      />
    </View>
  );
}
