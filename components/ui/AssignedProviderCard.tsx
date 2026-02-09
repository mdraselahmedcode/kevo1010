import React from 'react';
import { View } from 'react-native';
import JobApplicationItem from './jobs/JobApplicationItem';
import { AssignedProvider, JobStatus } from '@/app/(customer)/data/sampleJobs';
import { useRouter } from 'expo-router';
import { CustomerCompletionStatus } from '@/app/(customer)/data/sampleJobs';

type Props = {
  provider: AssignedProvider;
  jobPrice: number;
  jobStatus: JobStatus; // ✅ use JobStatus from your data
  providerDone?: Boolean;
  customerCompletionStatus?: CustomerCompletionStatus;
  jobId: string;
};

export default function AssignedProviderCard({
  provider,
  jobPrice,
  jobStatus,
  providerDone,
  jobId,
  customerCompletionStatus,
}: Props) {
  const router = useRouter();

  return (
    <View className="mb-6">
      <JobApplicationItem
        jobId={jobId}
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
        providerDone
        customerCompletionStatus={customerCompletionStatus}
        applied
        onProfilePress={() => router.push(`../../providers/${provider.id}`)}
      />
    </View>
  );
}
