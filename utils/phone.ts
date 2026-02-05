// src/utils/phone.ts
import { Linking } from 'react-native';
import Toast from 'react-native-toast-message';

export const makePhoneCall = async (phoneNumber?: string) => {
  if (!phoneNumber) {
    Toast.show({
      type: 'error',
      text1: 'Phone number unavailable',
      text2: 'This user has not added a phone number',
    });
    return;
  }

  const url = `tel:${phoneNumber}`;
  const supported = await Linking.canOpenURL(url);

  if (!supported) {
    Toast.show({
      type: 'error',
      text1: 'Calling not supported',
      text2: 'Your device cannot make phone calls',
    });
    return;
  }

  await Linking.openURL(url);
};
