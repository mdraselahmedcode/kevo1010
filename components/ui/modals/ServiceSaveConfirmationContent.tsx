import React from 'react';
import { View, Text } from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import OutlineButton from '@/components/ui/OutlineButton';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import WarningIconWithBg from '../icons/WarningIconWithBg';
import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const ServiceSaveConfirmationContent = ({ onCancel, onConfirm }: Props) => {
  return (
    <>
      <View className="mb-4 items-center">
        <WarningIconWithBg size={60} iconSize={40} iconColor="#FBBF24" bgColor="#FFFBEB" />
      </View>

      <HeaderPrimary style={{ textAlign: 'center', marginBottom: 8 }} text="Warning" />

      <TextBodySecondary
        text="Are you sure you want to add this service to the system?"
        style={{ textAlign: 'center', marginBottom: 16 }}
      />

      <View className="flex flex-row items-center gap-3">
        <View className="flex-1">
          <OutlineButton title="Cancel" onPress={onCancel} />
        </View>

        <View className="flex-1">
          <PrimaryButton title="Confirm" onPress={onConfirm} />
        </View>
      </View>
    </>
  );
};

export default ServiceSaveConfirmationContent;
