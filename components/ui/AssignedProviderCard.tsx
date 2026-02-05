import React from 'react';
import { View } from 'react-native';
import JobApplicationItem from './jobs/JobApplicationItem';
import { AssignedProvider, JobStatus } from '@/app/(customer)/data/sampleJobs';
import { useRouter } from 'expo-router';

type Props = {
  provider: AssignedProvider;
  jobPrice: number;
  jobStatus: JobStatus; // ✅ use JobStatus from your data
};

export default function AssignedProviderCard({ provider, jobPrice, jobStatus }: Props) {
  const router = useRouter();

  return (
    <View className="mb-6">
      <JobApplicationItem
        price={jobPrice}
        provider={provider.provider}
        rating={provider.rating}
        counterOffer={provider.agreedPrice}
        status={jobStatus} // now accepts 'created' too
        profileImage={provider.profileImage}
        verified={provider.verified}
        address={provider.address}
        distance={provider.distance}
        jobsCompleted={provider.jobsCompleted}
        applied
        onProfilePress={() => router.push(`../../providers/${provider.id}`)}
      />
    </View>
  );
}
