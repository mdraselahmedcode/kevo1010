// components/jobs/JobList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import JobCard from './JobCard';
import { Job } from '@/app/(customer)/data/sampleJobs';

type Props = {
  jobs: Job[];
  onViewPress?: (job: Job) => void;
};

const JobList = ({ jobs, onViewPress }: Props) => {
  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 20, paddingVertical: 20, gap: 30 }}
      renderItem={({ item }) => <JobCard job={item} onViewPress={() => onViewPress?.(item)} />}
    />
  );
};

export default JobList;
