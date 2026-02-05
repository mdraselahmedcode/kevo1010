// app/(customer-flow)/jobs/[jobId]/providers.tsx
import React from 'react';
import { View, ScrollView, StatusBar, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import JobApplicationItem from '@/components/ui/jobs/JobApplicationItem';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { Job, ProviderApplication, sampleJobs } from '@/app/(customer)/data/sampleJobs';
import CustomHeader from '@/components/ui/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryCard from '@/components/ui/PrimaryCard';

export default function ProvidersList() {
  const router = useRouter();
  const { jobId } = useLocalSearchParams<{ jobId: string }>();

  // ✅ fetch job by id
  const job: Job | undefined = sampleJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Job not found" />
      </View>
    );
  }

  // Number of providers applied
  const appliedCount = job.applications ? job.applications.length : 0;

  // Handle provider selection with confirmation modal
  const handleProviderPress = (providerName: string, providerPrice: number) => {
    Alert.alert(
      'Confirm Provider Selection',
      `Are you sure you want to hire ${providerName} for $${providerPrice}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => selectProvider(providerName),
        },
      ]
    );
  };

  // Function to process provider selection
  const selectProvider = (providerName: string) => {
    console.log('Provider selected:', providerName);
    // TODO: Call backend API to mark provider as selected for this job
    // Example: await api.selectProvider(jobId, providerName);

    // Optional: navigate to job details page
    // router.push(`/jobs/${jobId}/details`);
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="Available Providers"
              subtitle={`${appliedCount} provider${appliedCount !== 1 ? 's' : ''} applied`}
              backButton={true}
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
        }}
      />

      {/* Wrap ScrollView in SafeAreaView */}
      <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView className="flex-1 px-4 pb-10 pt-0" showsVerticalScrollIndicator={false}>
          {/* Service name */}
          <TextBodySecondary className="mb-4 text-xl font-bold" text={job.service} />

          {job.applications && job.applications.length > 0 ? (
            job.applications.map((ap: ProviderApplication, idx: number) => (
              <View key={idx} className="">
                <PrimaryCard className="mb-8">
                  <JobApplicationItem
                    price={job.price}
                    provider={ap.provider}
                    rating={ap.rating}
                    counterOffer={ap.counterOffer}
                    status={ap.status}
                    profileImage={ap.profileImage}
                    verified={ap.verified}
                    address={ap.address}
                    distance={ap.distance}
                    jobsCompleted={ap.jobsCompleted}
                    applied
                    onProfilePress={() => router.push(`../../providers/${ap.id}`)}
                  />

                  {/* Select Provider Button */}
                  <PrimaryButton
                    className="mt-3"
                    title="Select Provider"
                    onPress={() => handleProviderPress(ap.provider, job.price)}
                  />
                </PrimaryCard>
              </View>
            ))
          ) : (
            <TextBodySmall text="No providers have applied yet." className="text-gray-500" />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
