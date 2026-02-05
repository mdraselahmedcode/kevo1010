import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TextBodySmall from '../shared/TextBodySmall';
import TextBodySecondary from '../shared/TextBodySecondary';
import { BriefcaseIcon, VerifiedIcon } from '@/components/icons';

type Props = {
  price?: number;
  provider: string;
  rating: number;
  counterOffer?: number;
  status?: string;
  applied?: boolean;
  profileImage?: string;
  verified?: boolean;
  address?: string;
  distance?: string;
  jobsCompleted?: number;

  // ✅ new prop
  onProfilePress?: () => void;
};

const JobApplicationItem = ({
  price,
  provider,
  rating,
  counterOffer,
  status,
  applied,
  profileImage,
  verified,
  address,
  distance,
  jobsCompleted,
  onProfilePress,
}: Props) => {
  return (
    <View className="mt-1 rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
      {/* Top Row: Avatar + Info */}
      <View className="flex-row items-start  ">
        {/* Avatar */}
        {profileImage && (
          <TouchableOpacity onPress={onProfilePress}>
            <Image
              source={{ uri: profileImage }}
              className="mr-3 h-14 w-14 rounded-[8] "
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}

        {/* User Info Section */}
        <View className="flex-1">
          {/* First line: Name + Verified + Distance */}
          <View className="flex-row flex-wrap items-center justify-between ">
            <TouchableOpacity
              onPress={onProfilePress} // <-- call parent when tapped
              className="flex-row items-center ">
              <TextBodySecondary
                className="font-nunitoSemi text-lg font-bold text-gray-900"
                text={provider}
              />
              {verified && (
                <View className="ml-1" style={{ marginBottom: -14 }}>
                  <VerifiedIcon size={28} color="#00AFF5" />
                </View>
              )}
            </TouchableOpacity>

            {distance && (
              <TextBodySmall
                className="ml-2 text-sm font-medium text-blue-600"
                text={`${distance} away`}
              />
            )}
          </View>

          {/* Second line: Address */}
          {address && (
            <View className="mt-1">
              <TextBodySmall
                className="text-left text-gray-600"
                style={{ textAlign: 'left' }}
                text={address}
                numberOfLines={1}
                ellipsizeMode="tail"
              />
            </View>
          )}

          {/* Third line: Rating + Jobs Completed */}
          <View className="mt-2 flex-row items-center">
            {/* Rating */}
            <View className="mr-4 flex-row items-center">
              <TextBodySmall
                className="text-sm font-medium text-gray-700"
                text={`${rating.toFixed(1)} ⭐`}
              />
            </View>

            {/* Jobs Completed */}
            {jobsCompleted && (
              <View className="flex-row items-center gap-1">
                <BriefcaseIcon size={12} color="#4e4e53" />
                <TextBodySmall className="text-sm text-gray-500" text={`${jobsCompleted} jobs `} />
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Divider */}
      <View className="my-3 h-px bg-gray-200" />

      {/* Bottom Section: Price & Status */}
      <View className="flex-row items-end justify-between  ">
        {/* Price Section */}
        <View className="flex">
          {typeof price === 'number' && (
            <View className="mb-1">
              <TextBodySecondary
                className="text-base font-semibold text-gray-900"
                text={`$${price}`}
              />
              <TextBodySmall
                className="text-xs text-gray-500"
                text={counterOffer ? 'Proposed Price' : 'Accepted Price'}
              />
            </View>
          )}

          {counterOffer && (
            <View>
              <TextBodySmall
                className="text-sm font-medium text-orange-600"
                text={`Counter: $${counterOffer}`}
              />
            </View>
          )}
        </View>

        {/* Status Section */}
        <View className="items-end">
          <View
            className={`rounded-full px-3 py-1.5 ${
              status === 'accepted'
                ? 'bg-green-100'
                : status === 'rejected'
                  ? 'bg-red-100'
                  : 'bg-yellow-100'
            }`}>
            <TextBodySmall
              className={`text-xs font-semibold ${
                status === 'accepted'
                  ? 'text-green-800'
                  : status === 'rejected'
                    ? 'text-red-800'
                    : 'text-yellow-800'
              }`}
              text={status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Pending'}
            />
          </View>

          {/* {applied && <TextBodySmall className="mt-1 text-xs text-blue-600" text="Applied" />} */}
        </View>
      </View>
    </View>
  );
};

// Optional: Add styles for consistent spacing
const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
});

export default JobApplicationItem;
