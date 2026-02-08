import React, { useState } from 'react';
import { View, ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Feather } from '@expo/vector-icons';

import CustomHeader from '@/components/ui/CustomHeader';
import PrimaryButton from '@/components/ui/PrimaryButton';
import OutlineButton from '@/components/ui/OutlineButton';
import InputLabel from '@/components/ui/shared/InputLabel';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import ShadowCard from '@/components/ui/ShadowCard';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import { JobImage } from '@/components/ui/JobImage';
import MultilineInputField from '@/components/ui/inputs/MultilineInputField';
import { sampleJobs } from '@/app/(customer)/data/sampleJobs';

// Define the available tags
const QUICK_TAGS = [
  'Professional',
  'On Time',
  'Quality Work',
  'Friendly',
  'Great Value',
  'Thorough',
];

export default function RateProviderPage() {
  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const job = sampleJobs.find((j) => j.id === jobId);
  const router = useRouter();

  // State Management
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Job not found" />
      </View>
    );
  }

  // Toggle tag selection
  const handleTagPress = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (!rating) {
      Toast.show({
        type: 'error',
        text1: 'Please select a rating',
      });
      return;
    }

    // Prepare data for API
    const feedbackData = {
      jobId,
      rating,
      review,
      tags: selectedTags,
    };

    console.log('Feedback Submitted:', feedbackData);

    Toast.show({
      type: 'success',
      text1: 'Thanks for your feedback ⭐',
    });

    router.replace('/(customer)/jobs');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <CustomHeader
        title="Rate Your Experience"
        subtitle="Help others find great providers"
        backButton
        height={100}
        paddingTop={20}
        paddingBottom={0}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView className="flex-1 bg-background" edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View className="flex gap-8">
            {/* Provider Info Card */}

            <ShadowCard className="items-center p-4">
              <View className="w-full items-center gap-4">
                <JobImage
                  uri={job.assignedProvider?.profileImage}
                  className="h-[54px] w-[64px] rounded-lg"
                />
                <View className="">
                  <TextBodySecondary
                    text={`${job.assignedProvider?.provider ?? 'Service Provider'}'s ${job.service}`}
                    className="font-nunitoMedium"
                  />
                  <TextBodySmall text={job.service} className="font-nunitoMedium text-primary" />
                </View>
              </View>
            </ShadowCard>

            {/* Star Rating Section */}
            <View className="items-center gap-3">
              <InputLabel text="Tap to Rate" />
              <View className="flex-row gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => setRating(star)}>
                    <Feather
                      name="star"
                      size={36}
                      color={star <= rating ? '#FBBF24' : '#D1D5DB'}
                      fill={star <= rating ? '#FBBF24' : 'transparent'}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Review Input */}
            <View>
              <InputLabel text="How was your experience?" className="mb-2" />
              <MultilineInputField
                value={review}
                onChangeText={setReview}
                placeholder="Share more details about the service..."
              />
            </View>

            {/* Quick Tags Section */}
            <View>
              <InputLabel text="Quick Tags" className="mb-2" />
              <ShadowCard className="p-4">
                <View className="flex-row flex-wrap gap-2">
                  {QUICK_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <TouchableOpacity
                        key={tag}
                        onPress={() => handleTagPress(tag)}
                        style={{ backgroundColor: isSelected ? '#2C80EC' : '#E0E0E0' }}
                        className="rounded-[8px] px-4 py-2">
                        <Text
                          className={`font-nunitoMedium text-xs ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                          {tag}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ShadowCard>
            </View>

            {/* Action Buttons */}
            <View className="mt-4 gap-4">
              <PrimaryButton title="Submit Review" onPress={handleSubmit} />
              <OutlineButton
                title="Skip for now"
                className="mb-6  "
                onPress={() => router.replace('/(customer)/jobs')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
