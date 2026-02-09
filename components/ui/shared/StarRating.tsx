import React from 'react';
import { View } from 'react-native';
import { StarIcon } from '@/components/icons';

type StarRatingProps = {
  rating: number; // current rating value (e.g., 3)
  maxStars?: number; // default 5
  size?: number; // star size
  filledColor?: string;
  emptyColor?: string;
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = 16,
  filledColor = '#FFB400',
  emptyColor = '#cccccc77',
}: StarRatingProps) {
  return (
    <View style={{ flexDirection: 'row', gap: 1 }}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <StarIcon key={index} size={size} color={index < rating ? filledColor : emptyColor} />
      ))}
    </View>
  );
}
