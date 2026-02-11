// components/ui/content/PolicySection.tsx
import React from 'react';
import { View, Text } from 'react-native';
import TextBodySecondary from '../shared/TextBodySecondary';
import InputLabel from '../shared/InputLabel';
import TextBodySmall from '../shared/TextBodySmall';

type Props = {
  index: number;
  title: string;
  description: string;
};

export default function PolicySection({ index, title, description }: Props) {
  return (
    <View className="gap-1">
      <InputLabel text={`${index}. ${title}`} style={{ textAlign: 'left' }} />
      <TextBodySecondary
        text={description}
        style={{ textAlign: 'left', color: '#52525B', fontSize: 14 }}
      />
    </View>
  );
}
