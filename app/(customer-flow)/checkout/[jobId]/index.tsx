import React from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from '@/components/ui/CustomHeader';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { sampleJobs } from '@/app/(customer)/data/sampleJobs';
import PrimaryCard from '@/components/ui/PrimaryCard';
import CheckInCircleWithBg from '@/components/ui/icons/CheckInCircleWithBg';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import InputLabel from '@/components/ui/shared/InputLabel';
import OutlineButton from '@/components/ui/OutlineButton';
import { JobImage } from '@/components/ui/JobImage';
import { formatDateTime } from '@/utils/helper';
import Toast from 'react-native-toast-message';

export default function CheckoutPage() {
  const router = useRouter();

  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const job = sampleJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Job not found" />
      </View>
    );
  }

  const isProviderDone = job.providerDone === true;
  const canConfirmOrReport =
    job.providerDone === true && job.customerCompletionStatus !== 'confirmed';

  const beforeImage = job.providerBeforeAfterImages?.before?.[0];

  const afterImage = job.providerBeforeAfterImages?.after?.[0];

  const statusUI = {
    created: {
      title: 'Job Created',
      message: `Your ${job.service} job has been created.`,
    },
    'in-progress': {
      title: 'Job In Progress',
      message: `Your ${job.service} service is currently in progress.`,
    },
    completed: {
      title: 'Job Completed!',
      message: `Your ${job.service} service has been completed successfully.`,
    },
  } as const;

  const { title, message } = statusUI[job.status];

  // handle job completion
  const handleJobCompletion = () => {
    // later → API call to mark job completed

    Toast.show({
      type: 'success',
      text1: 'Job completed',
      text2: 'Please rate your service provider',
    });

    setTimeout(() => {
      router.push({
        pathname: '../rate-provider/[jobId]',
        params: { jobId: job.id },
      });
    }, 600);
  };

  // handle report a problem
  const handleReport = () => {
    router.push({
      pathname: '../report-problem/[jobId]',
      params: { jobId: job.id },
    });
  };

  return (
    <>
      {/* 🚫 Disable default Expo header */}
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {/* ✅ Your custom header */}
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
        <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 0 }}>
          <View className="mb-6 gap-12  ">
            <View className="flex items-center gap-8 ">
              <PrimaryCard className="flex w-full items-center justify-center ">
                <CheckInCircleWithBg />

                <TextBodySecondary text={title} className="mt-2 font-nunitoSemi" />

                <TextBodySmall text={message} numberOfLines={2} className="text-center" />
              </PrimaryCard>

              <View className="flex w-full gap-2">
                <View className="flex flex-row justify-between">
                  <InputLabel text="Before Image" />

                  <TextBodySmall text={beforeImage ? formatDateTime(beforeImage.uploadedAt) : ''} />
                </View>

                <JobImage uri={beforeImage?.url} />
              </View>

              {isProviderDone && (
                <View className="flex w-full gap-2">
                  <View className="flex flex-row justify-between">
                    <InputLabel text="After Image" />
                    <TextBodySmall text={afterImage ? formatDateTime(afterImage.uploadedAt) : ''} />
                  </View>
                  <JobImage uri={afterImage?.url} />
                </View>
              )}

              <View className="w-full">
                <InputLabel text="Provider's Note:" className="mb-2" />
                <PrimaryCard className="flex items-center justify-center ">
                  <TextBodySmall
                    text={job.providerNote ?? 'No note provided by the provider.'}
                    // style={{textAlign: 'left'}}
                  />
                </PrimaryCard>
              </View>
            </View>

            {canConfirmOrReport && (
              <View className="w-full gap-4 ">
                <PrimaryButton
                  title="Confirm & Complete Job"
                  className="w-full"
                  onPress={handleJobCompletion}
                />

                <OutlineButton
                  title="Report a Problem"
                  className=" w-full"
                  onPress={handleReport}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
