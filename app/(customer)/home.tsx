// import React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');
// const TOP_SECTION_HEIGHT = 209;

// const Home = () => {
//   return (
//     <>
//       <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
//       <View style={styles.container}>
//         {/* Scrollable content */}
//         <ScrollView
//           contentContainerStyle={{ paddingBottom: 25 }}
//           showsVerticalScrollIndicator={false}>
//           {/* Top section with image + gradient + rounded bottom */}
//           <View style={{ width: width, height: TOP_SECTION_HEIGHT }}>
//             <Svg
//               width={width}
//               height={TOP_SECTION_HEIGHT}
//               viewBox={`0 0 ${width} ${TOP_SECTION_HEIGHT}`}>
//               <Path
//                 d={`
//         M0,0
//         L0,${TOP_SECTION_HEIGHT - 25}
//         Q${width / 2},${TOP_SECTION_HEIGHT + 25} ${width},${TOP_SECTION_HEIGHT - 25}
//         L${width},0
//         Z
//       `}
//                 fill="#0073FF"
//               />
//             </Svg>
//             <ImageBackground
//               source={require('@/assets/customer/services/top_bg.png')}
//               style={styles.imageBackground}
//               resizeMode="cover">
//               <LinearGradient
//                 colors={['#0073FF', '#0DA2FF']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0, y: 1 }}
//                 style={StyleSheet.absoluteFill}
//               />

//               <View style={styles.headerContent}>
//                 <Text style={styles.headerText}>Home Screen</Text>
//               </View>
//             </ImageBackground>
//           </View>

//           {/* Page content */}
//           <View style={styles.pageContent}>
//             <Text style={{ marginBottom: 16 }}>
//               This is your page content below the rounded top section.
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   imageBackground: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   headerContent: {
//     paddingBottom: 20,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   pageContent: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
// });

// import React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');
// const TOP_SECTION_HEIGHT = 209;

// const Home = () => {
//   return (
//     <>
//       <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
//       <View style={styles.container}>
//         <ScrollView
//           contentContainerStyle={{ paddingBottom: 25 }}
//           showsVerticalScrollIndicator={false}>
//           {/* Top section with image + gradient + rounded bottom */}
//           <View style={{ width: width, height: TOP_SECTION_HEIGHT }}>
//             {/* Curved background */}
//             <Svg
//               width={width}
//               height={TOP_SECTION_HEIGHT}
//               viewBox={`0 0 ${width} ${TOP_SECTION_HEIGHT}`}>
//               <Path
//                 d={`
//                   M0,0
//                   L0,${TOP_SECTION_HEIGHT - 25}
//                   Q${width / 2},${TOP_SECTION_HEIGHT + 25} ${width},${TOP_SECTION_HEIGHT - 25}
//                   L${width},0
//                   Z
//                 `}
//                 fill="#0073FF"
//               />
//             </Svg>

//             {/* Image + gradient + inner shadow */}
//             <ImageBackground
//               source={require('@/assets/customer/services/top_bg.png')}
//               style={styles.imageBackground}
//               resizeMode="cover">
//               {/* Vertical gradient */}
//               <LinearGradient
//                 colors={['#0073FF', '#0DA2FF']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0, y: 1 }}
//                 style={StyleSheet.absoluteFill}
//               />

//               {/* Inner soft white highlight */}
//               <View
//                 style={{
//                   ...StyleSheet.absoluteFillObject,
//                   borderRadius: 20,
//                   backgroundColor: 'rgba(255,255,255,0.05)',
//                   shadowColor: '#fff',
//                   shadowOffset: { width: 0, height: 0 },
//                   shadowOpacity: 0.4,
//                   shadowRadius: 15,
//                 }}
//               />

//               {/* Header content */}
//               <View style={styles.headerContent}>
//                 <Text style={styles.headerText}>Home Screen</Text>
//               </View>
//             </ImageBackground>
//           </View>

//           {/* Page content */}
//           <View style={styles.pageContent}>
//             <Text style={{ marginBottom: 16 }}>
//               This is your page content below the rounded top section.
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   imageBackground: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   headerContent: {
//     paddingBottom: 20,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   pageContent: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
// });

// import React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   Dimensions,
//   ImageBackground,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Svg, { Path } from 'react-native-svg';
// import { Ionicons } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');
// const TOP_SECTION_HEIGHT = 100;
// const NUM_PARTICLES = 265;

// /* -----------------------------------
//    Static Particles Overlay
// ----------------------------------- */
// const ParticlesOverlay = () => {
//   return (
//     <View
//       pointerEvents="none"
//       className="absolute left-0 top-0"
//       style={{ width, height: TOP_SECTION_HEIGHT }}>
//       {Array.from({ length: NUM_PARTICLES }).map((_, i) => {
//         const size = 0.04 + Math.random() * 1.5;
//         return (
//           <View
//             key={i}
//             style={{
//               position: 'absolute',
//               left: Math.random() * width,
//               top: Math.random() * TOP_SECTION_HEIGHT,
//               width: size,
//               height: size,
//               borderRadius: size / 2,
//               backgroundColor: 'rgb(103, 206, 253)',
//             }}
//           />
//         );
//       })}
//     </View>
//   );
// };

// /* -----------------------------------
//    Home Screen
// ----------------------------------- */
// const Home = () => {
//   return (
//     <>
//       <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

//       <View className="flex-1 bg-[#F9FAFB]">
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 25 }}>
//           {/* Top Section */}
//           <View
//             className="overflow-hidden "
//             style={{
//               width,
//               height: TOP_SECTION_HEIGHT,
//               borderBottomLeftRadius: 40,
//               borderBottomRightRadius: 40,
//             }}>
//             <View className="flex-1 items-center justify-end">
//               {/* Gradient */}
//               <LinearGradient
//                 colors={['#0073FF', '#0DA2FF']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0, y: 1 }}
//                 className="absolute inset-0"
//               />

//               {/* Static Particles */}
//               <ParticlesOverlay />

//               {/* Header Content */}
//               <View className=" w-full px-5 pb-5">
//                 {/* Search Bar */}
//                 <LinearGradient
//                   colors={['#005AC9', '#289EE8']}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 0, y: 1 }}
//                   className="mt-3 h-[50px] w-[327px] justify-center overflow-hidden rounded-[20px] px-4">
//                   {/* Inset glow simulation */}
//                   <View className="absolute inset-0 rounded-[20px] bg-[#D2EAFF]/30" />

//                   <View className="flex-row items-center">
//                     {/* Location icon (left) */}
//                     <Ionicons name="location-outline" size={24} color="#FFFFFF" />

//                     {/* Input */}
//                     <TextInput
//                       placeholder="Current Location"
//                       placeholderTextColor="#FFFFFF"
//                       className="ml-3 flex-1 font-nunito text-[14px] leading-[18px] text-white"
//                     />

//                     {/* Search icon (right) */}
//                     <Ionicons name="search-outline" size={24} color="#FFFFFF" />
//                   </View>
//                 </LinearGradient>
//               </View>
//             </View>

//             {/* Curved Wave */}
//             <Svg
//               width={width}
//               height={TOP_SECTION_HEIGHT}
//               viewBox={`0 0 ${width} ${TOP_SECTION_HEIGHT}`}
//               style={{ position: 'absolute', bottom: 0 }}>
//               <Path
//                 d={`
//                   M0,0
//                   L0,${TOP_SECTION_HEIGHT - 25}
//                   Q${width / 2},${TOP_SECTION_HEIGHT + 25} ${width},${TOP_SECTION_HEIGHT - 25}
//                   L${width},0
//                   Z
//                 `}
//                 fill="transparent"
//               />
//             </Svg>
//           </View>

//           {/* Page Content */}
//           <View className="flex-1 px-5 pt-5">
//             <Text className="mb-4 text-gray-700">
//               This is your page content below the rounded top section.
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// export default Home;

import React from 'react';
import { View, Text, StatusBar, Dimensions, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { ParticlesOverlay } from '@/components/ParticlesOverlay';
const { width } = Dimensions.get('window');
const TOP_SECTION_HEIGHT = 120;

const Home = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <View className="flex-1 bg-[#F9FAFB]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 25 }}>
          {/* Top Section */}
          <View
            className="overflow-hidden"
            style={{
              width,
              height: TOP_SECTION_HEIGHT,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <View className="flex-1 justify-end">
              {/* Background gradient */}
              <LinearGradient
                colors={['#0073FF', '#0DA2FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="absolute inset-0"
              />

              {/* Static particles overlay */}
              <ParticlesOverlay height={TOP_SECTION_HEIGHT} />

              {/* Header Content */}
              <View className="w-full px-5 pb-5">
                <LinearGradient
                  colors={['#005AC9', '#289EE8']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  className="mt-3 h-[50px] w-[327px] justify-center overflow-hidden rounded-[20px] px-4">
                  {/* Inner glow */}
                  <View className="absolute inset-0 rounded-[20px] bg-[#D2EAFF]/30" />

                  <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={24} color="#FFFFFF" />

                    <TextInput
                      placeholder="Current Location"
                      placeholderTextColor="#FFFFFF"
                      className="ml-3 flex-1 font-nunito text-[14px] text-white"
                    />

                    <Ionicons name="search-outline" size={24} color="#FFFFFF" />
                  </View>
                </LinearGradient>
              </View>
            </View>

            {/* Curved Wave */}
            <Svg
              width={width}
              height={TOP_SECTION_HEIGHT}
              viewBox={`0 0 ${width} ${TOP_SECTION_HEIGHT}`}
              style={{ position: 'absolute', bottom: 0 }}>
              <Path
                d={`
                  M0,0
                  L0,${TOP_SECTION_HEIGHT - 25}
                  Q${width / 2},${TOP_SECTION_HEIGHT + 25} ${width},${TOP_SECTION_HEIGHT - 25}
                  L${width},0
                  Z
                `}
                fill="transparent"
              />
            </Svg>
          </View>

          {/* Page Content */}
          <View className="flex-1 px-5 pt-5">
            <Text className="mb-4 text-gray-700">
              This is your page content below the rounded top section.
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
