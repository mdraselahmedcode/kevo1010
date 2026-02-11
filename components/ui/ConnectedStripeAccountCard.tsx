// components/ui/ConnectedStripeAccountCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PenIconWithBg from './icons/PenIconWithBg';
import HomeIconWithBg from './icons/HomeIconWithBg';
import { StripeLogo } from '../icons/StripeLogo';
import { BookOpenIcon } from '../icons';

type Props = {
  accountType: string;
  connected: boolean;
  accountEmail?: string; // optional, shows when connected
  onEditPress: () => void;
};

export default function ConnectedStripeAccountCard({
  accountType,
  connected,
  accountEmail,
  onEditPress,
}: Props) {
  return (
    <View className="mb-4 flex-row items-center justify-between rounded-xl border border-[#cccccc77] bg-white p-4">
      <View className="flex flex-row items-center justify-start gap-3">
        <HomeIconWithBg
          size={40}
          iconSize={24}
          iconColor="#939393"
          bgColor="#F7F7F7"
          translateX={3}
          translateY={2}
        />
        <View style={{ alignItems: 'flex-start' }}>
          <StripeLogo color="#635BFF" width={48} height={20} />
          <View className="flex flex-row items-center justify-start">
            {accountEmail && connected && (
              <BookOpenIcon style={{ marginTop: 5, marginRight: 4 }} size={14} color="#939393" />
            )}

            <Text
              style={{
                color: connected ? '#A3A9B0' : '#EF4444',
                marginTop: 4,
                fontFamily: 'Syne-SemiBold',
                fontSize: 12,
              }}>
              {connected ? accountEmail : 'Not Connected'}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={onEditPress}>
        <PenIconWithBg
          size={35}
          iconSize={24}
          iconColor="white"
          bgColor="#939393"
          translateX={-3}
          translateY={-3}
        />
      </TouchableOpacity>
    </View>
  );
}
