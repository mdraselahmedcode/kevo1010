import React from 'react';
import { View, Pressable, TouchableOpacity } from 'react-native';
import InputLabel from '@/components/ui/shared/InputLabel';
import ReviewCard from './ReviewCard';
import { Review } from '@/app/(customer)/data/reviewSample';

type Props = {
  reviews: Review[];
  onSeeAll?: () => void;
};

export default function ReviewSection({ reviews, onSeeAll }: Props) {
  if (!reviews.length) return null;

  return (
    <View className="flex gap-3">
      {/* Header */}
      <View className="flex flex-row items-center justify-between">
        <InputLabel text="Review" />
        {onSeeAll && (
          <TouchableOpacity onPress={onSeeAll}>
            <InputLabel text="See All" />
          </TouchableOpacity>
        )}
      </View>

      {/* Reviews */}
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </View>
  );
}
