import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import ReviewCard from '@/components/ui/review/ReviewCard';
import { sampleJobs } from '@/app/(customer)/data/sampleJobs';
import { mockReviews } from '@/app/(customer)/data/reviewSample';
import CustomHeader from '@/components/ui/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AllReviewsPage() {
  const { providerId } = useLocalSearchParams<{ providerId: string }>();

  // find provider if needed
  const provider = sampleJobs
    .flatMap((job) => [
      ...(job.assignedProvider ? [job.assignedProvider] : []),
      ...(job.applications || []),
    ])
    .find((p) => p.id === providerId);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="All Reviews"
              subtitle={provider?.provider ?? ''}
              backButton={true}
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
        }}
      />

      <SafeAreaView className=" flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView
          className="px-5 pt-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // 🔑 extra space at bottom
        >
          <View className="flex gap-4 ">
            {mockReviews.length > 0 ? (
              mockReviews.map((review) => <ReviewCard key={review.id} review={review} />)
            ) : (
              <TextBodySecondary text="No reviews yet" />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
