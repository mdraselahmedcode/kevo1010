import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShadowCard from '../ShadowCard';
import TextBodySecondary from '../shared/TextBodySecondary';
import TextBodySmall from '../shared/TextBodySmall';
import PrimaryButton from '../PrimaryButton';
import JobApplicationItem from './JobApplicationItem';
import JobImagesRow from '../JobImagesRow';
import { Job } from '@/app/(customer)/data/sampleJobs';
import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { ClockIcon } from '@/components/icons/ClockIcon';
import { useRouter } from 'expo-router';

type Props = {
  job: Job;
  onViewPress?: () => void;
  onProfilePress?: () => void;
};

const JobCard = ({ job, onViewPress, onProfilePress }: Props) => {
  const router = useRouter();

  const renderProviderInfo = () => {
    if (job.status === 'created') {
      const numApplicants = job.applications?.length || 0;
      return <TextBodySmall text={`${numApplicants} provider(s) applied`} />;
    }

    if ((job.status === 'in-progress' || job.status === 'completed') && job.assignedProvider) {
      const ap = job.assignedProvider;
      return (
        <JobApplicationItem
          price={job.price}
          provider={ap.provider}
          rating={ap.rating}
          counterOffer={ap.agreedPrice}
          status={job.status}
          profileImage={ap.profileImage}
          verified={ap.verified}
          address={ap.address}
          distance={ap.distance}
          jobsCompleted={ap.jobsCompleted}
          applied
          onProfilePress={() => router.push(`../(customer-flow)/providers/${ap.id}`)}
        />
      );
    }
  };

  return (
    <View style={styles.jobRow}>
      <ShadowCard
        style={{
          flex: 1,
          backgroundColor: '#EFF6FF',
          gap: 16,
          borderWidth: 1,
          borderColor: '#2C80EC',
          padding: 12,
        }}>
        <View style={{ marginBottom: 8 }}>
          {/* Job Type Badge */}
          <View
            style={[
              styles.badge,
              job.type === 'instant' ? styles.instantBadge : styles.scheduledBadge,
            ]}>
            <TextBodySmall text={job.type === 'instant' ? 'Instant' : 'Scheduled'} />
          </View>

          {/* Job Service */}
          <TextBodySecondary style={{ fontFamily: 'Nunito-SemiBold' }} text={job.service} />

          {/* Price */}
          {job.status === 'created' && <TextBodySmall text={`Price: $${job.price}`} />}

          {/* Provider Info */}
          {renderProviderInfo()}

          {/* Job Images */}
          <JobImagesRow style={{ marginTop: 12 }} images={job.images} maxImages={3} />

          {job.type === 'scheduled' && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                marginTop: 10,
              }}>
              {/* Date */}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <CalendarIcon color="#545b52" width={16} height={16} />
                <TextBodySmall text={job.date} />
              </View>

              {/* Time */}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <ClockIcon color="#52525B" width={16} height={16} />
                <TextBodySmall text={job.time} />
              </View>
            </View>
          )}
        </View>

        {/* <PrimaryButton title="View" onPress={onViewPress} /> */}
        <PrimaryButton
          title="View"
          onPress={() => {
            if (job.status === 'created') {
              // Navigate to the applied providers page
              router.push({
                pathname: '/(customer-flow)/jobs/[jobId]/providers',
                params: { jobId: job.id },
              });
            } else if (job.status === 'in-progress' || job.status === 'completed') {
              // Navigate to the assigned job details page
              router.push({
                pathname: '/(customer-flow)/jobs/[jobId]',
                params: { jobId: job.id },
              });
            }
          }}
        />
      </ShadowCard>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  jobRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 0,
    marginBottom: 4,
  },
  instantBadge: { backgroundColor: '#FFEDD5' }, // light orange
  scheduledBadge: { backgroundColor: '#D1FAE5' }, // light green
});
