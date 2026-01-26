import { View, Text, Image } from 'react-native';
import React from 'react';
import {
  BushIcon,
  GrassCuttingIcon,
  IceIcon,
  LocationIcon,
  NotificationBellIcon,
  SearchIcon,
} from '@/components/icons';
import { ShovelSnowIcon } from '@/components/icons/illustrations/ShovelSnowIcon';
// @ts-ignore

const index = () => {
  return (
    <View className="">
      <Text>index</Text>
      <LocationIcon width={32} height={32} color="blue" />
      <SearchIcon width={32} height={32} color="blue" />
      <NotificationBellIcon width={32} height={32} color="blue" />
      <BushIcon width={32} height={32} color="blue" />
      <ShovelSnowIcon size={32} />
      <IceIcon width={32} height={32} color="blue" />
      <GrassCuttingIcon size={32} />
    </View>
  );
};

export default index;
