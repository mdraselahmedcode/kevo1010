import React from 'react';
import { View, ScrollView, Image, StatusBar, Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {
  sampleJobs,
  ProviderApplication,
  AssignedProvider,
} from '@/app/(customer)/data/sampleJobs';
import CustomHeader from '@/components/ui/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StarIcon, VerifiedIcon } from '@/components/icons';
import ShadowCard from '@/components/ui/ShadowCard';
import AvatarWithBadge from '@/components/ui/shared/AvatarWithBadge';
import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import InputLabel from '@/components/ui/shared/InputLabel';
import BulletListSection from '@/components/ui/shared/BulletListSection';
import ReviewSection from '@/components/ui/review/ReviewSection';
import { mockReviews } from '@/app/(customer)/data/reviewSample';
import { useRouter } from 'expo-router';

export default function ProviderProfilePage() {
  const router = useRouter();
  const { providerId } = useLocalSearchParams<{ providerId: string }>();

  // Search for provider in both applications and assignedProvider
  const provider: (ProviderApplication | AssignedProvider) | undefined = sampleJobs
    .flatMap((job) => {
      const assigned = job.assignedProvider ? [job.assignedProvider] : [];
      const applicants = job.applications || [];
      return [...assigned, ...applicants];
    })
    .find((p) => p.id === providerId);

  if (!provider) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Provider not found" />
      </View>
    );
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="Provider Profile"
              subtitle={provider.provider}
              backButton={true}
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
        }}
      />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView
          className="mt-1 flex-1 px-5 pb-10"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // 🔑 extra space at bottom
        >
          <View className="flex gap-8">
            {/* Avatar */}
            {provider.profileImage && (
              <ShadowCard className="bg-white">
                <View style={{ flex: 1 }}>
                  {/* Avatar + Total Jobs */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 12,
                    }}>
                    {/* Avatar */}
                    <AvatarWithBadge
                      imageUri={provider.profileImage}
                      showVerified={provider.verified}
                      size={80}
                      badgeSize={20}
                      gradientColors={
                        ['#FAFF0A', '#FEAD4E', '#ED1B1BF7', '#FB1274', '#F109DA'] as const
                      }
                      gradientLocations={[0, 0.5, 0.7, 0.8, 1] as const}
                      badgeTranslateX={2.7}
                      badgeTranslateY={2.7}
                    />

                    {/* Spacer */}
                    <View style={{ width: 38 }} />

                    {/* Text content */}
                    <View style={{ flex: 1 }}>
                      <HeaderPrimary
                        text={`${provider.jobsCompleted ?? 0}`}
                        style={{ marginBottom: 4, textAlign: 'center' }}
                      />
                      <InputLabel
                        text="Total Job Completed"
                        style={{
                          textAlign: 'center',
                          paddingBottom: 4,
                          borderBottomWidth: 1,
                          borderBottomColor: '#94A3B8',
                          color: '#323135',
                        }}
                      />
                    </View>
                  </View>

                  {/* Provider Info + Rating */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end', // align left and right blocks to top
                      paddingVertical: 12,
                    }}>
                    {/* Provider Info (Left) */}
                    <View>
                      <InputLabel
                        text={provider.provider}
                        style={{ fontFamily: 'Nunito-SemiBold', color: '#323135', fontSize: 16 }}
                      />
                      <TextBodySecondary
                        text="USA"
                        style={{ fontFamily: 'Nunito-SemiBold', fontSize: 14, color: '#6B7280' }}
                      />
                    </View>

                    {/* Rating (Right) */}
                    <View style={{ alignItems: 'flex-end' }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <StarIcon color="#FFB703" size={24} style={{ marginBottom: -5 }} />
                        <HeaderPrimary
                          text={`${provider.rating ?? 0}`}
                          style={{ marginBottom: 0 }}
                        />
                      </View>
                      <InputLabel
                        text="Average Rating"
                        style={{ color: '#323135', textAlign: 'right' }}
                      />
                    </View>
                  </View>
                </View>
              </ShadowCard>
            )}

            <BulletListSection
              label="Description"
              items={[
                'This service is provided by a licensed and insured professional specializing in snow removal and landscaping for residential and commercial properties.',
                'Snow plowing, shoveling, and de-icing for driveways, sidewalks, and parking areas.',
                'Timely job completion with before-and-after photos for full transparency and customer confidence.',
              ]}
            />

            <BulletListSection
              label="Service Information"
              items={[
                'Snow Plowing',
                'Snow Shoveling',
                'Salting / De-icing',
                'Lawn Mowing',
                'Landscaping',
                'Seasonal Contracts',
              ]}
            />

            {/* Review */}
            <ReviewSection
              reviews={mockReviews.slice(0, 2)}
              onSeeAll={() => {
                router.push(`./${providerId}/reviews`);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
