import React from 'react';
import { View, Text } from 'react-native';
import PrimaryButton from '../PrimaryButton';
import OutlineButton from '../OutlineButton';
import TextBodySecondary from '../shared/TextBodySecondary';
import HeaderPrimary from '../shared/HeaderPrimary';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteAccountContent = ({ onCancel, onConfirm }: Props) => {
  return (
    <>
      <HeaderPrimary style={{ textAlign: 'center' }} text="Delete Account" />
      <TextBodySecondary
        className="mb-8"
        text="Are you sure you want to delete your account? All your data will be lost after deletion."
      />

      <View className="flex-row gap-2">
        <View className="flex-1">
          <OutlineButton title="Back" onPress={onCancel} />
        </View>

        <View className="flex-1">
          <PrimaryButton className="bg-red-500 " title="Delete" onPress={onConfirm} />
        </View>
      </View>
    </>
  );
};

export default DeleteAccountContent;
