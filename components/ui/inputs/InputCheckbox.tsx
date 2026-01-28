import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // or import from react-native-vector-icons/Feather

type Props = {
  label: string | React.ReactNode;
  value: boolean;
  name: string;
  error?: boolean;
  handler: (name: string, value: boolean) => void;
};

const InputCheckbox = ({ label, value, name, error = false, handler }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handler(name, !value)}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      {/* Checkbox square */}
      <View
        style={{
          width: 20,
          height: 20,
          borderWidth: 2,
          borderColor: '#2C80EC',
          backgroundColor: value ? '#2C80EC' : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}>
        {value && <Feather name="check" size={16} color="white" />}
      </View>

      {/* Label */}
      <Text style={{ fontSize: 14, color: error ? 'red' : '#1A202C' }}>
        {typeof label === 'string' ? label : <Text>{label}</Text>}
      </Text>
    </TouchableOpacity>
  );
};

export default InputCheckbox;
