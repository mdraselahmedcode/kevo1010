import React from 'react';
import { View } from 'react-native';
import ShadowCard from './ShadowCard';
import TextBodySecondary from './shared/TextBodySecondary';
import { LocationIcon, OneManIcon } from '@/components/icons';
import { ClockIcon } from '../icons/ClockIcon';

type Props = {
  customerAddress?: string;
  service: string;
  type: 'instant' | 'scheduled';
};

export default function JobDetailsCard({ customerAddress, service, type }: Props) {
  return (
    <ShadowCard className="mb-6">
      <View className="flex justify-start gap-[10]">
        <TextBodySecondary
          text="Job Details"
          style={{ textAlign: 'left', fontFamily: 'Nunito-Bold' }}
        />

        {/* Service Address */}
        <View className="flex flex-row justify-start gap-2">
          <LocationIcon size={24} color="#6B7280" />
          <View>
            <TextBodySecondary
              text="Service Address"
              style={{ textAlign: 'left', lineHeight: 16, fontFamily: 'Nunito-SemiBold' }}
            />
            <TextBodySecondary
              text={customerAddress || 'N/A'}
              style={{ fontSize: 12, textAlign: 'left', color: '#6B7280' }}
            />
          </View>
        </View>

        {/* Service Type */}
        <View className="flex flex-row justify-start gap-2">
          <OneManIcon size={24} color="#6B7280" />
          <View>
            <TextBodySecondary
              text="Service Type"
              style={{ textAlign: 'left', lineHeight: 16, fontFamily: 'Nunito-SemiBold' }}
            />
            <TextBodySecondary
              text={service}
              style={{ fontSize: 12, textAlign: 'left', color: '#71717A' }}
            />
          </View>
        </View>

        {/* Request Type */}
        <View className="flex flex-row justify-start gap-2">
          <ClockIcon size={24} color="#6B7280" />
          <View>
            <TextBodySecondary
              text="Request Type"
              style={{ textAlign: 'left', lineHeight: 16, fontFamily: 'Nunito-SemiBold' }}
            />
            <TextBodySecondary
              text={type === 'instant' ? 'Instant' : 'Scheduled'}
              style={{ fontSize: 12, textAlign: 'left', color: '#71717A' }}
            />
          </View>
        </View>
      </View>
    </ShadowCard>
  );
}
