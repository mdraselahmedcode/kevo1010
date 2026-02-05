import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import CustomHeader from '@/components/ui/CustomHeader';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { sampleJobs } from '@/app/(customer)/data/sampleJobs';

export default function CheckoutPage() {
  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const job = sampleJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Job not found" />
      </View>
    );
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {/* Render Custom Header manually */}
      <CustomHeader
        title="Checkout"
        subtitle={job.service}
        backButton
        height={100}
        paddingTop={20}
        paddingBottom={0}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <TextBodySecondary text="Before Images" />
          {/* Render job.images or before images */}

          <TextBodySecondary text="After Images" className="mt-4" />
          {/* Render job.afterImages if you have it */}

          <TextBodySecondary text="Provider Note" className="mt-4" />
          {/* Render provider note if any */}

          <PrimaryButton
            title="Mark Job as Completed"
            className="mt-6"
            onPress={() => alert('Completing job...')}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
