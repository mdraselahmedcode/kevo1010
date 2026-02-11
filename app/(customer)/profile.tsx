// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StatusBar,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Stack } from 'expo-router';

// import { HeaderWithParticles } from '@/components/ui/HeaderWithParticles';
// import InputLabel from '@/components/ui/shared/InputLabel';
// import ProfileTopSection from '@/components/ui/shared/ProfileTopSection';
// import ProfileItem from '@/components/ui/shared/ProfileItem';
// import PrimaryButton from '@/components/ui/PrimaryButton';

// import { customerProfileSampleData } from './data/customerProfileSampleData';
// import { customerProfileMenu } from './data/profileMenu';

// const ProfileScreen = () => {
//   const user = customerProfileSampleData;
//   const profileItems = customerProfileMenu;

//   return (
//     <>
//       {/* Status bar */}
//       <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

//       {/* Header */}
//       <Stack.Screen
//         options={{
//           headerShown: true,
//           headerShadowVisible: false,
//           header: () => (
//             <HeaderWithParticles
//               title="Profile"
//               subtitle=""
//               showBackButton
//               backgroundColors={['#0073FF', '#0073FF']}
//             />
//           ),
//         }}
//       />

//       {/* Page background */}
//       <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 0 }}>
//           {/* Reusable top gradient section */}
//           <ProfileTopSection
//             userType={user.userType}
//             imageUri={user.avatar}
//             name={user.name}
//             email={user.email}
//             showCamera={true}
//           />

//           <View className=" gap-9 px-5">
//             {/* Profile Items */}
//             <View className="mt-7 flex gap-4">
//               <InputLabel
//                 text="Account Settings"
//                 style={{ textTransform: 'uppercase', marginBottom: 0 }}
//               />

//               {profileItems.map((item, idx) => (
//                 <ProfileItem
//                   key={idx}
//                   title={item.title}
//                   onPress={() => {
//                     console.log('Navigate to', item.route);
//                     // router.push(item.route)
//                   }}
//                 />
//               ))}
//             </View>

//             <PrimaryButton title="Log out" />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default ProfileScreen;

import ProfileScreen from '@/app/(profile-common)';

export default function CustomerProfileTab() {
  return <ProfileScreen />;
}
