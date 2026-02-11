// export default AccountSecurityScreen;

import React from 'react';
import { View, ScrollView, StatusBar, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

import CustomHeader from '@/components/ui/CustomHeader';
import InputLabel from '@/components/ui/shared/InputLabel';
import ProfileItem from '@/components/ui/shared/ProfileItem';

import { LockIcon, TrashBinIcon } from '@/components/icons';
import { accountSecurityMenu } from './data/accountSecurityMenu';
import DeleteAccountContent from '@/components/ui/modals/DeleteAccountContent';
import BottomSheetModal from '@/components/ui/modals/BottomSheetModal';

const AccountSecurityScreen = () => {
  const router = useRouter();

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const handlePress = (item: any) => {
    if (item.route === 'DELETE_ACCOUNT') {
      setShowDeleteModal(true);
      return;
    }

    router.push(item.route as any);
  };

  const renderLeftIcon = (item: any) => {
    if (item.icon === 'lock') {
      return <LockIcon size={20} color="#4A4F61" />;
    }

    if (item.icon === 'trash') {
      return <TrashBinIcon size={20} color="#D32F2F" />;
    }

    return null;
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeader
        title="Account & Security"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
          <View className="gap-4">
            <InputLabel text="Security" style={{ textTransform: 'uppercase' }} />

            {accountSecurityMenu.map((item) => (
              <ProfileItem
                key={item.title}
                title={item.title}
                leftIcon={renderLeftIcon(item)}
                titleStyle={item.destructive ? { color: '#D32F2F' } : undefined}
                showChevron={!item.destructive}
                onPress={() => handlePress(item)}
              />
            ))}
          </View>

          <BottomSheetModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
            <DeleteAccountContent
              onCancel={() => setShowDeleteModal(false)}
              onConfirm={() => {
                setShowDeleteModal(false);
                console.log('Delete account confirmed');
                // API call + logout
              }}
            />
          </BottomSheetModal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AccountSecurityScreen;
