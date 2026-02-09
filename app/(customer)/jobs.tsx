// import React, { useState, useEffect } from 'react';
// import { View, SafeAreaView, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';
// import { sampleJobs, Job } from './data/sampleJobs';
// import FilterTabs from '@/components/ui/FilterTabs';
// import JobList from '@/components/ui/jobs/JobList';

// const Jobs = () => {
//   const router = useRouter();
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState<'created' | 'in-progress' | 'completed'>('created');

//   useEffect(() => {
//     setTimeout(() => {
//       setJobs(sampleJobs);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const filteredJobs = jobs.filter((job) => {
//     switch (filter) {
//       case 'created':
//         return job.status === 'created';
//       case 'in-progress':
//         return job.status === 'in-progress';
//       case 'completed':
//         return job.status === 'completed';
//       default:
//         return true;
//     }
//   });

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#2C80EC" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1 bg-background">
//       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

//       <FilterTabs
//         tabs={['created', 'in-progress', 'completed']}
//         activeTab={filter}
//         onTabPress={(tab) => setFilter(tab as any)}
//         paddingHorizontal={6.5}
//         paddingVertical={8.5}
//       />

//       <JobList jobs={filteredJobs} onViewPress={(job) => console.log('View', job.id)} />
//     </SafeAreaView>
//   );
// };

// export default Jobs;

// const styles = StyleSheet.create({
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });

import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { sampleJobs, Job } from './data/sampleJobs';
import FilterTabs from '@/components/ui/FilterTabs';
import JobList from '@/components/ui/jobs/JobList';

const Jobs = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'created' | 'in-progress' | 'submitted' | 'completed'>(
    'created'
  );

  useEffect(() => {
    setTimeout(() => {
      setJobs(sampleJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    switch (filter) {
      case 'created':
        return job.status === 'created';

      case 'in-progress':
        // In-progress includes:
        // - provider working (status === 'in-progress' && !providerDone)
        // - provider finished but customer not confirmed
        return (
          job.status === 'in-progress' &&
          !job.providerDone &&
          job.customerCompletionStatus !== 'confirmed'
        );

      case 'submitted':
        return job.providerDone && job.customerCompletionStatus !== 'confirmed';

      case 'completed':
        // Only fully completed jobs
        return job.providerDone && job.customerCompletionStatus === 'confirmed';

      default:
        return true;
    }
  });

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2C80EC" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <FilterTabs
        tabs={['created', 'in-progress', 'submitted', 'completed']}
        activeTab={filter}
        onTabPress={(tab) => setFilter(tab as any)}
        paddingHorizontal={3.5}
        paddingVertical={8.5}
      />

      <JobList jobs={filteredJobs} onViewPress={(job) => console.log('View', job.id)} />
    </SafeAreaView>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
