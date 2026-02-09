import React from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from '@/components/ui/CustomHeader';
import PrimaryCard from '@/components/ui/PrimaryCard';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import InputLabel from '@/components/ui/shared/InputLabel';

import { sampleJobs } from '@/app/(customer)/data/sampleJobs';
import { formatDateTime } from '@/utils/helper';
import ShadowCard from '@/components/ui/ShadowCard';
import CheckInCircleWithBg from '@/components/ui/icons/CheckInCircleWithBg';
import { DownLoadIcon, StarIcon } from '@/components/icons';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function InvoicePage() {
  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const job = sampleJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Invoice not found" />
      </View>
    );
  }

  const provider = job.assignedProvider;
  const beforeImage = job.providerBeforeAfterImages?.before?.[0];
  const afterImage = job.providerBeforeAfterImages?.after?.[0];

  const serviceCharge = job.serviceCharge ?? 0;
  const totalPaid = job.price + serviceCharge;
  const customerRating = job.customerRating ?? 0;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <CustomHeader
        title="Invoice"
        subtitle={job.service}
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView className="flex-1 bg-background">
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <ShadowCard>
            <View className="flex flex-row justify-between ">
              <View className="">
                <InputLabel text="Service" className="font-semibold" />
                <TextBodySecondary text={job.service} style={{ textAlign: 'left' }} />
              </View>
              <View className="">
                <InputLabel text="Invoice Date" className="font-semibold" />
                <TextBodySecondary text="Jan 19, 2026" style={{ textAlign: 'right' }} />
              </View>
            </View>
            <View className="mt-6 gap-2  ">
              <View className="flex flex-row justify-between">
                <TextBodySecondary text="Service Provider" className="font-nunitoSemi" />
                <TextBodySmall
                  text={job.assignedProvider?.provider}
                  style={{ textAlign: 'left' }}
                />
              </View>
              <View className="flex flex-row justify-between">
                <TextBodySecondary text="Service Address" className="font-nunitoSemi" />
                <TextBodySmall
                  text={job.customerAddress}
                  style={{ textAlign: 'right', maxWidth: 100 }}
                />
              </View>

              <View className="flex-row justify-between">
                <TextBodySecondary text="Job Date" className="font-nunitoSemi" />
                <TextBodySmall text={job.date || '—'} />
              </View>
            </View>
            {/* Horizontal line */}
            <View className="my-5  h-px w-full bg-gray-300 " />

            {/* Price Breakdown */}
            <View className="mb-6 gap-3">
              <InputLabel text="Payment Details" className="text-center font-semibold" />

              <View className="flex-row justify-between">
                <TextBodySecondary text="Service Price" className="font-nunitoSemi" />
                <TextBodySmall text={`$${job.price}`} />
              </View>
              <View className="flex-row justify-between">
                <TextBodySecondary text="Service Charge" className="font-nunitoSemi" />
                <TextBodySmall text={`$${job.serviceCharge}`} />
              </View>

              <View className="mt-2 flex-row justify-between border-t border-gray-300 pt-2">
                <TextBodySecondary text="Total Paid" className="font-nunitoBold" />
                <TextBodySecondary text={`$${totalPaid}`} className="font-nunitoBold" />
              </View>
            </View>

            <PrimaryCard>
              <View className="flex flex-row items-center justify-center gap-3 ">
                <CheckInCircleWithBg />
                <View className="flex items-center justify-center ">
                  <TextBodySecondary text="You rated this service" className="font-nunitoSemi" />
                  <View className="flex flex-row justify-center ">
                    <StarIcon color="#FFB703" size={20} />
                    <StarIcon color="#FFB703" size={20} />
                    <StarIcon color="#FFB703" size={20} />
                    <StarIcon color="#FFB703" size={20} />
                    <StarIcon color="#FFB703" size={20} />
                  </View>
                </View>
              </View>
            </PrimaryCard>
          </ShadowCard>
          <PrimaryButton title="Download Invoice" leftIcon={<DownLoadIcon />} className="mt-7" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
