import React from 'react';
import { View } from 'react-native';
import PrimaryCard from '@/components/ui/PrimaryCard';
import AvatarWithBadge from '@/components/ui/shared/AvatarWithBadge';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import { Review } from '@/app/(customer)/data/reviewSample';
import StarRating from '@/components/ui/shared/StarRating';

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <PrimaryCard style={{ backgroundColor: 'white', borderColor: '#cccccc44' }}>
      <View className="flex items-start gap-3">
        {/* Header */}
        <View className="flex flex-row items-center gap-3">
          <AvatarWithBadge
            imageUri={review.customerAvatar}
            showVerified={review.verified}
            size={40}
            badgeSize={10}
            badgeTranslateX={1.5}
            badgeTranslateY={1.5}
            checkBgColor="white"
            padding={0}
            curlyBottom={2}
            curlyRight={2}
          />

          <View className="flex items-start">
            <TextBodySecondary text={review.customerName} className="text-text-lighter-dark" />
            {/* Rating */}
            <StarRating rating={review.rating} size={16} />
          </View>
        </View>

        {/* Content */}
        <View className="flex items-start gap-1">
          <TextBodySmall style={{ textAlign: 'left', color: '#52525B' }} text={review.comment} />
          <TextBodySecondary style={{ textAlign: 'left', color: '#52525B' }} text={review.date} />
        </View>
      </View>
    </PrimaryCard>
  );
}
