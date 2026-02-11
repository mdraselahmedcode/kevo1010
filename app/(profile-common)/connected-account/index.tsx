// app/(profile-common)/ConnectedAccount.tsx
import React from 'react';
import { StatusBar, View, ScrollView, Text } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '@/components/ui/CustomHeader';
import ConnectedStripeAccountCard from '@/components/ui/ConnectedStripeAccountCard';
import { providerProfileSampleData } from '../data/providerProfileSampleData';
import { customerProfileSampleData } from '../data/customerProfileSampleData';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function ConnectedAccountScreen() {
  // Redux state
  const { role } = useSelector((state: RootState) => state.auth);

  // Determine which profile to use
  const userProfile = role === 'provider' ? providerProfileSampleData : customerProfileSampleData;

  const stripeAccount = userProfile.stripeAccount;

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Top safe area */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }} />

      <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-background">
        <CustomHeader
          title="Connected Account"
          backButton
          height={60}
          paddingTop={20}
          paddingBottom={20}
          backgroundColor="#FFFFFF"
        />

        <ScrollView
          className="mt-6 flex-1 px-5"
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}>
          {stripeAccount ? (
            <ConnectedStripeAccountCard
              accountType={stripeAccount.accountType}
              connected={!!stripeAccount.accountId}
              accountEmail={stripeAccount.accountId ?? undefined}
              onEditPress={() => {
                console.log('Connect or edit Stripe account');
              }}
            />
          ) : (
            <View style={{ marginTop: 40, alignItems: 'center' }}>
              <Text>No Stripe account info available</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
