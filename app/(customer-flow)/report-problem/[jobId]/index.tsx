import React, { useState } from 'react';
import { View, ScrollView, StatusBar, TextInput, TouchableOpacity, Text } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from '@/components/ui/CustomHeader';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import PrimaryButton from '@/components/ui/PrimaryButton';
import OutlineButton from '@/components/ui/OutlineButton';
import PrimaryCard from '@/components/ui/PrimaryCard';
import InputLabel from '@/components/ui/shared/InputLabel';
import QuestionIconWithBg from '@/components/ui/icons/QuestionIconWithBg';
import JobDetailsCard from '@/components/ui/JobDetailsCard';
import { sampleJobs } from '@/app/(customer)/data/sampleJobs';
import ImageUploadInputField from '@/components/ui/inputs/ImageUploadInputField';
import Toast from 'react-native-toast-message';
import MultilineInputField from '@/components/ui/inputs/MultilineInputField';

export default function ReportProblemPage() {
  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const router = useRouter();
  const job = sampleJobs.find((j) => j.id === jobId);

  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]); // ✅ store uploaded images

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <TextBodySecondary text="Job not found" />
      </View>
    );
  }

  const issues = ['Work not complete', 'Poor quality work', 'Wrong service location'];

  const handleSubmit = () => {
    if (!selectedIssue) {
      Toast.show({
        type: 'error',
        text1: 'Please select an issue',
      });
      return;
    }

    console.log('Job ID:', job.id);
    console.log('Job Service:', job.service);
    console.log('Selected Issue:', selectedIssue);
    console.log('Description:', description);
    console.log('Images:', images);

    Toast.show({
      type: 'success',
      text1: 'Report submitted successfully!',
      text2: `Issue: ${selectedIssue}`,
    });

    // Optionally, reset the form
    setSelectedIssue(null);
    setDescription('');
    setImages([]);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <CustomHeader
        title="Report a Problem"
        subtitle={job.service}
        backButton
        height={100}
        paddingTop={20}
        paddingBottom={0}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 0 }}>
          <View className="mb-6 flex gap-8 ">
            {/* Warning / Info */}
            <PrimaryCard
              style={{ backgroundColor: '#FFB70311', borderWidth: 1, borderColor: '#FFB703' }}>
              <View className="flex items-center">
                <QuestionIconWithBg />
                <TextBodySecondary text="Before you proceed" className="mt-3 font-nunitoSemi" />
                <TextBodySmall text="Please ensure you have attempted to resolve this issue directly with the provider. False disputes may affect your account standing." />
              </View>
            </PrimaryCard>

            {/* Job Details */}
            <JobDetailsCard
              customerAddress={job.customerAddress}
              service={job.service}
              type={job.type}
            />

            {/* What's the issue? */}
            <View className="flex gap-3">
              <InputLabel text="What's the issue?" className="mb-1" />
              {issues.map((issue) => {
                const isSelected = selectedIssue === issue;
                return (
                  <TouchableOpacity
                    key={issue}
                    onPress={() => setSelectedIssue(issue)}
                    className={`rounded-[8px] border p-3 ${
                      isSelected ? 'border-primary bg-primary/20' : 'border-gray-300 bg-white'
                    }`}>
                    <Text className={`${isSelected ? ' text-primary' : ' text-gray-700'}`}>
                      {issue}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Describe the problem */}
            <View>
              <InputLabel text="Describe the problem" className="mb-2" />
              <MultilineInputField
                value={description}
                onChangeText={setDescription}
                placeholder="Type..."
              />
            </View>

            {/* Upload Images */}
            <ImageUploadInputField
              value={images}
              handler={(name, value) => setImages(value)}
              name="images"
              label="Upload Images (optional)"
              placeholder="Upload up to 3 images"
              max={3}
              showLabel
            />

            <View className="gap-4">
              {/* Submit Button */}
              <PrimaryButton title="Submit Dispute" className=" w-full" onPress={handleSubmit} />
              <OutlineButton title="Cancel" className="mb-6 w-full" onPress={() => router.back()} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
