// import React from 'react';
// import { View, ScrollView, StatusBar, Pressable } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import CustomHeader from '@/components/ui/CustomHeader';
// import ShadowCard from '@/components/ui/ShadowCard';
// import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
// import TextBodySmall from '@/components/ui/shared/TextBodySmall';
// import { JobImage } from '@/components/ui/JobImage';
// import { sampleJobs } from '@/app/(customer)/data/sampleJobs';

// export default function ServiceHistoryPage() {
//   const router = useRouter();

//   // Filter only confirmed jobs
//   const completedJobs = sampleJobs.filter((job) => job.customerCompletionStatus === 'confirmed');

//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

//       <CustomHeader
//         title="Service History"
//         subtitle="Your past jobs"
//         backButton
//         height={100}
//         paddingTop={20}
//         paddingBottom={0}
//         backgroundColor="#FFFFFF"
//       />

//       <SafeAreaView className="flex-1 bg-background" edges={['bottom']}>
//         <ScrollView contentContainerStyle={{ padding: 20 }}>
//           <View className="gap-4">
//             {completedJobs.length === 0 ? (
//               <View className="items-center justify-center py-20">
//                 <TextBodySecondary text="No completed jobs yet." />
//               </View>
//             ) : (
//               completedJobs.map((job) => (
//                 <ShadowCard key={job.id} className="overflow-hidden">
//                   <Pressable
//                     android_ripple={{ color: '#E6F0FF' }}
//                     onPress={() =>
//                       router.push({
//                         pathname: '/(customer)/checkout/[jobId]',
//                         params: { jobId: job.id },
//                       })
//                     }
//                     style={({ pressed }) => ({ opacity: pressed ? 0.95 : 1 })}>
//                     {({ pressed }) => (
//                       <View
//                         className="flex-row items-center gap-4 p-4"
//                         style={{ backgroundColor: pressed ? '#F5F9FF' : '#FFFFFF' }}>
//                         <JobImage
//                           uri={job.assignedProvider?.profileImage}
//                           className="h-[48px] w-[48px] rounded-lg"
//                         />

//                         <View className="flex-1">
//                           <TextBodySecondary text={job.service} className="font-nunitoMedium" />
//                           <TextBodySmall
//                             text={`Completed on: ${job.date} ${job.time}`}
//                             className="text-gray-500"
//                           />
//                         </View>

//                         {/* Optional: Arrow icon */}
//                         <TextBodySmall text="View" className="text-primary" />
//                       </View>
//                     )}
//                   </Pressable>
//                 </ShadowCard>
//               ))
//             )}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// }
