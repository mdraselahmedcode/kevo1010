import React, { useMemo } from 'react';
import { StatusBar, View, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '@/components/ui/CustomHeader';
import ReviewCard from '@/components/ui/review/ReviewCard';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import { mockReviews } from '@/app/(customer)/data/reviewSample';

export default function ProviderRatingsReviewsScreen() {
  /**
   * 🔥 In real integration:
   * const providerId = loggedInProvider.id
   */
  const providerId = 'prov-1';

  // Filter provider reviews
  const providerReviews = useMemo(
    () => mockReviews.filter((review) => review.providerId === providerId),
    [providerId]
  );

  /**
   * 🔥 Rating Calculations
   */
  const totalReviews = providerReviews.length;

  const averageRating =
    totalReviews > 0
      ? (providerReviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1)
      : '0.0';

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = providerReviews.filter((r) => r.rating === star).length;
    return {
      star,
      count,
      percentage: totalReviews > 0 ? (count / totalReviews) * 100 : 0,
    };
  });

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }} />
      <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-background">
        <CustomHeader
          title="Ratings & Reviews"
          backButton
          height={60}
          paddingTop={20}
          paddingBottom={20}
          backgroundColor="#FFFFFF"
        />
        <FlatList
          data={providerReviews}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 30,
          }}
          ListHeaderComponent={
            <View style={{ marginVertical: 20 }}>
              {/* ⭐ Average Rating */}
              <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <TextBodySecondary text="Average Rating" />
                <View style={{ marginTop: 8 }}>
                  <TextBodySecondary text={`${averageRating} ⭐ (${totalReviews} reviews)`} />
                </View>
              </View>

              {/* ⭐ Rating Breakdown */}
              {ratingBreakdown.map((item) => (
                <View
                  key={item.star}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}>
                  <View style={{ width: 30 }}>
                    <TextBodySecondary text={`${item.star}⭐`} />
                  </View>

                  <View
                    style={{
                      flex: 1,
                      height: 8,
                      backgroundColor: '#E5E7EB',
                      borderRadius: 4,
                      overflow: 'hidden',
                      marginHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: `${item.percentage}%`,
                        height: '100%',
                        backgroundColor: '#F59E0B',
                      }}
                    />
                  </View>

                  <View style={{ width: 30 }}>
                    <TextBodySecondary text={`${item.count}`} />
                  </View>
                </View>
              ))}

              {/* Divider */}
              <View
                style={{
                  height: 1,
                  backgroundColor: '#E5E7EB',
                  marginVertical: 20,
                }}
              />
            </View>
          }
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <ReviewCard review={item} />
            </View>
          )}
          ListEmptyComponent={
            <View style={{ marginTop: 40, alignItems: 'center' }}>
              <TextBodySecondary text="No reviews yet" />
            </View>
          }
        />
      </SafeAreaView>
    </>
  );
}
