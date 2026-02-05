// import React from 'react';
// import { View } from 'react-native';
// import PrimaryButton from './PrimaryButton';
// import { JobStatus } from '@/app/(customer)/data/sampleJobs';

// type Props = {
//   status: JobStatus; // use JobStatus from data
//   onMarkComplete?: () => void;
//   onLeaveReview?: () => void;
// };

// export default function JobActions({ status, onMarkComplete, onLeaveReview }: Props) {
//   return (
//     <View className="gap-3">
//       {status === 'in-progress' && (
//         <PrimaryButton title="Mark as Completed" onPress={onMarkComplete} />
//       )}

//       {status === 'completed' && <PrimaryButton title="Leave a Review" onPress={onLeaveReview} />}
//     </View>
//   );
// }
