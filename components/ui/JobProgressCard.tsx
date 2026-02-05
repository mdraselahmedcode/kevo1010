import React from 'react';
import { View } from 'react-native';
import TextBodySecondary from './shared/TextBodySecondary';
import { Job } from '@/app/(customer)/data/sampleJobs';
import { CheckIcon } from '../icons/CheckIcon';
import ShadowCard from './ShadowCard';

type Props = {
  job: Job;
};

const STATUS_STEPS = [
  { key: 'created', label: 'Request Sent' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
] as const;

const ACTIVE_COLOR = '#2C80EC';
const INACTIVE_COLOR = '#9CA3AF';

export default function JobProgressCard({ job }: Props) {
  const currentStepIndex = STATUS_STEPS.findIndex((step) => step.key === job.status);

  return (
    <ShadowCard className="mb-6 mt-1 ">
      <View>
        {STATUS_STEPS.map((step, index) => {
          const isActive = index <= currentStepIndex;
          const isLineActive = index < currentStepIndex;

          return (
            <View key={step.key} className="flex-row">
              {/* LEFT: Circle + Line */}
              <View className="items-center">
                {/* Circle */}
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: isActive ? ACTIVE_COLOR : INACTIVE_COLOR,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {isActive && <CheckIcon size={20} color="#FFFFFF" />}
                </View>

                {/* Line */}
                {index !== STATUS_STEPS.length - 1 && (
                  <View
                    style={{
                      width: 2,
                      height: 40,
                      backgroundColor: isLineActive ? ACTIVE_COLOR : INACTIVE_COLOR,
                    }}
                  />
                )}
              </View>

              {/* RIGHT: Label */}
              <View
                style={{
                  marginLeft: 10,
                  height: 40,
                  justifyContent: 'center',
                }}>
                <TextBodySecondary text={step.label} style={{ fontFamily: 'Nunito-SemiBold' }} />
              </View>
            </View>
          );
        })}
      </View>
    </ShadowCard>
  );
}
