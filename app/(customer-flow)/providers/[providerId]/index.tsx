import React from 'react';
import { View, ScrollView, Image, StatusBar } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {
  sampleJobs,
  ProviderApplication,
  AssignedProvider,
} from '@/app/(customer)/data/sampleJobs';
import CustomHeader from '@/components/ui/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VerifiedIcon } from '@/components/icons';

export default function ProviderProfilePage() {
  const { providerId } = useLocalSearchParams<{ providerId: string }>();

  // Search for provider in both applications and assignedProvider
  const provider: (ProviderApplication | AssignedProvider) | undefined = sampleJobs
    .flatMap((job) => {
      const assigned = job.assignedProvider ? [job.assignedProvider] : [];
      const applicants = job.applications || [];
      return [...assigned, ...applicants];
    })
    .find((p) => p.id === providerId);

  if (!provider) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Provider not found" />
      </View>
    );
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="Provider Profile"
              subtitle={provider.provider}
              backButton={true}
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
        }}
      />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView className="flex-1 px-4 pb-10 pt-4" showsVerticalScrollIndicator={false}>
          {/* Avatar */}
          {provider.profileImage && (
            <Image
              source={{ uri: provider.profileImage }}
              className="mb-4 h-28 w-28 self-center rounded-full"
              resizeMode="cover"
            />
          )}

          {/* Name + Verified */}
          <View className="mb-2 flex-row items-center justify-center">
            <TextBodySecondary className="text-2xl font-bold" text={provider.provider} />
            {provider.verified && (
              <View className="ml-2">
                <VerifiedIcon size={24} color="#10B981" />
              </View>
            )}
          </View>

          {/* Rating */}
          <TextBodySmall
            className="mb-2 text-center text-gray-700"
            text={`${provider.rating.toFixed(1)} ⭐ (${provider.jobsCompleted ?? 0} jobs completed)`}
          />

          {/* Address + Distance */}
          {provider.address && (
            <TextBodySmall
              className="mb-4 text-center text-gray-600"
              text={`${provider.address}${provider.distance ? ` • ${provider.distance} away` : ''}`}
            />
          )}

          {/* Optional: Actions */}
          <PrimaryButton
            title="Hire this Provider"
            onPress={() => alert(`Hire ${provider.provider} functionality here`)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
