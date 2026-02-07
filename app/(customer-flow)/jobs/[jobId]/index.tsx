import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from '@/components/ui/CustomHeader';
import AssignedProviderCard from '@/components/ui/AssignedProviderCard';
import JobDetailsCard from '@/components/ui/JobDetailsCard';
import JobProgressCard from '@/components/ui/JobProgressCard';

import { sampleJobs } from '@/app/(customer)/data/sampleJobs';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import ShadowCard from '@/components/ui/ShadowCard';
import PrimaryButton from '@/components/ui/PrimaryButton';
import OutlineButton from '@/components/ui/OutlineButton';
import { makePhoneCall } from '@/utils/phone';
import { ChatIcon } from '@/components/icons';
import { PhoneCallIcon } from '@/components/icons/PhoneCallIcon';

export default function JobTrackingPage() {
  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const router = useRouter();

  const job = sampleJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Job not found" />
      </View>
    );
  }

  const handleCheckout = () => {
    if (job.status !== 'completed') {
      alert('Your provider is still working on this job. You can review it once completed.');
      return; // stop navigation
    }

    router.push({
      pathname: '../checkout/[jobId]', // include /index here
      params: { jobId: job.id },
    });
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="Job Tracking"
              subtitle={job.service}
              backButton
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
        }}
      />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}>
          {/* Job Progress Timeline */}
          <JobProgressCard job={job} />

          {/* Assigned Provider */}
          {job.assignedProvider && (
            <ShadowCard className="mb-6 px-4 py-4">
              <AssignedProviderCard
                provider={job.assignedProvider}
                jobPrice={job.price}
                jobStatus={job.status}
              />

              {/* Buttons Row */}
              <View className="mt-4 flex-row justify-between">
                {/* Chat Button */}
                <PrimaryButton
                  title="Chat"
                  leftIcon={<ChatIcon size={20} color="#FFFFFF" />}
                  className="mr-2 flex-1"
                  onPress={() => alert(`Chat with ${job.assignedProvider?.provider}`)}
                />

                {/* Call Button */}
                <OutlineButton
                  title="Call"
                  leftIcon={<PhoneCallIcon size={20} color="#2C80EC" />}
                  className="ml-2 flex-1"
                  onPress={() => makePhoneCall(job.assignedProvider?.phoneNumber)}
                />
              </View>
            </ShadowCard>
          )}

          {/* Job Details */}
          <JobDetailsCard
            customerAddress={job.customerAddress}
            service={job.service}
            type={job.type}
          />

          {/* Actions */}
          {/* <JobActions
            status={job.status}
            onMarkComplete={() => alert('Mark job as completed')}
            onLeaveReview={() => alert('Leave review')}
          /> */}

          {/* Checkout Button at Bottom */}
          <View className="mt-12">
            <PrimaryButton title="Go to Checkout" onPress={handleCheckout} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
