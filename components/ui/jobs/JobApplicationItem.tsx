import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TextBodySmall from '../shared/TextBodySmall';
import TextBodySecondary from '../shared/TextBodySecondary';
import { BriefcaseIcon, VerifiedIcon } from '@/components/icons';
import { InvoicePill } from '../shared/InvoicePill';
import { useRouter } from 'expo-router';

type Props = {
  jobId?: string;
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

  // ✅ new props for meaningful status
  providerDone?: boolean;
  customerCompletionStatus?: 'pending' | 'confirmed' | 'reported';

  onProfilePress?: () => void;
};

const JobApplicationItem = ({
  jobId,
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
  providerDone,
  customerCompletionStatus,
  onProfilePress,
}: Props) => {
  const router = useRouter();

  const isJobFullyCompleted =
    providerDone === true && customerCompletionStatus === 'confirmed' && status == 'completed';

  // Determine meaningful status text
  const renderStatusMessage = () => {
    if (status === 'in-progress') {
      if (providerDone && customerCompletionStatus !== 'confirmed') {
        return (
          <TextBodySmall
            text="Waiting for customer confirmation"
            style={{ color: '#F59E0B', marginTop: 4, maxWidth: 140, textAlign: 'right' }}
          />
        );
      } else if (!providerDone) {
        return (
          <TextBodySmall
            text="Provider is working"
            style={{ color: '#2C80EC', marginTop: 4, maxWidth: 140, textAlign: 'right' }}
          />
        );
      }
    }

    if (status === 'completed' && providerDone && customerCompletionStatus === 'confirmed') {
      return (
        <TextBodySmall
          text="Job completed"
          style={{ color: '#16A34A', marginTop: 4, maxWidth: 140, textAlign: 'right' }}
        />
      );
    }

    return null;
  };

  return (
    <View className="mt-1 rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
      {/* Top Row: Avatar + Info */}
      <View className="flex-row items-start">
        {profileImage && (
          <TouchableOpacity onPress={onProfilePress}>
            <Image
              source={{ uri: profileImage }}
              className="mr-3 h-14 w-14 rounded-[8]"
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}

        <View className="flex-1">
          <View className="flex-row flex-wrap items-center justify-between">
            <TouchableOpacity onPress={onProfilePress} className="flex-row items-center">
              <TextBodySecondary
                className="font-nunitoSemi text-lg font-bold text-gray-900"
                text={provider}
              />
              {verified && (
                <View className="ml-1" style={{ marginBottom: -5 }}>
                  <VerifiedIcon size={18} color="#00AFF5" checkColor="white" />
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

          <View className="mt-2 flex-row items-center">
            <View className="mr-4 flex-row items-center">
              <TextBodySmall
                className="text-sm font-medium text-gray-700"
                text={`${rating.toFixed(1)} ⭐`}
              />
            </View>

            {jobsCompleted && (
              <View className="flex-row items-center gap-1">
                <BriefcaseIcon size={12} color="#4e4e53" />
                <TextBodySmall className="text-sm text-gray-500" text={`${jobsCompleted} jobs`} />
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Divider */}
      <View className="my-3 h-px bg-gray-200" />

      {/* Bottom Section: Price & Status */}
      <View className="flex-row items-end justify-between">
        {/* Left: Price + Counter */}
        <View className="flex pr-2">
          {typeof price === 'number' && (
            <View className="">
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

        {/* Right: Status Pill + Meaningful Message */}
        <View className="flex-1 items-end">
          {/* Invoice Pill */}
          {isJobFullyCompleted && jobId && (
            <InvoicePill
              onPress={() => {
                router.push({
                  pathname: '/(customer-flow)/invoice/[jobId]',
                  params: { jobId },
                });
              }}
            />
          )}

          {/* Meaningful Status Message */}
          {renderStatusMessage() && (
            <TextBodySmall
              text={renderStatusMessage()?.props.text}
              style={{
                color: renderStatusMessage()?.props.style.color,
                textAlign: 'right',
                maxWidth: 140,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default JobApplicationItem;
