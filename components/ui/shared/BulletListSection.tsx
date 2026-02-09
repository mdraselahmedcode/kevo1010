import React from 'react';
import { View } from 'react-native';
import InputLabel from '@/components/ui/shared/InputLabel';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';

type BulletListSectionProps = {
  label: string;
  items: string[];
};

export default function BulletListSection({ label, items }: BulletListSectionProps) {
  return (
    <View className="flex items-start gap-2">
      <InputLabel text={label} style={{ color: '#0F243E', marginBottom: 4 }} />

      <View style={{ flexDirection: 'column', rowGap: 8 }}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: '100%',
            }}>
            {/* Bullet */}
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: '#7E8792',
                marginTop: 8,
                marginRight: 12,
              }}
            />

            {/* Text */}
            <View style={{ flex: 1 }}>
              <TextBodySecondary
                text={item}
                style={{
                  lineHeight: 20,
                  textAlign: 'left',
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
