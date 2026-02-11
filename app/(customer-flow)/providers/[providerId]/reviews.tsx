import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import ReviewCard from '@/components/ui/review/ReviewCard';
import { sampleJobs } from '@/app/(customer)/data/sampleJobs';
import { mockReviews } from '@/app/(customer)/data/reviewSample';
import CustomHeader from '@/components/ui/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AllReviewsPage() {
  const { providerId } = useLocalSearchParams<{ providerId?: string }>();

  // 🔥 Temporary fallback
  // const finalProviderId = providerId ?? 'prov-1';
  const finalProviderId = 'prov-1';

  // as it has used in the provider side profile section in ratings and reviews
  // need to make sure if the provider id is missing in the params then logged in
  // provider id will be send for the provider side profile view.

  // Find provider (for subtitle)
  const provider = sampleJobs
    .flatMap((job) => [
      ...(job.assignedProvider ? [job.assignedProvider] : []),
      ...(job.applications || []),
    ])
    .find((p) => p.id === finalProviderId);

  // Filter reviews
  const providerReviews = mockReviews.filter((review) => review.providerId === finalProviderId);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="All Reviews"
              subtitle={provider?.provider ?? ''}
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
        <FlatList
          data={providerReviews}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <ReviewCard review={item} />
            </View>
          )}
          ListEmptyComponent={
            <View style={{ marginTop: 20 }}>
              <TextBodySecondary text="No reviews yet" />
            </View>
          }
        />
      </SafeAreaView>
    </>
  );
}
