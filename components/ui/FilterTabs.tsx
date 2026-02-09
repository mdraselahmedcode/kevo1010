// // components/jobs/FilterTabs.tsx
// import React from 'react';
// import { View, TouchableOpacity, TextStyle } from 'react-native';
// import TextBodySmall from './shared/TextBodySmall';

// type Props = {
//   tabs: string[];
//   activeTab: string;
//   onTabPress: (tab: string) => void;
//   paddingHorizontal?: number; // optional
//   paddingVertical?: number; // optional
//   fontSize?: number; // optional
// };

// const FilterTabs = ({
//   tabs,
//   activeTab,
//   onTabPress,
//   paddingHorizontal = 6.5,
//   paddingVertical = 8.5,
//   fontSize = 12, // default font size
// }: Props) => {
//   return (
//     <View className="mx-5 my-3 flex-row">
//       {tabs.map((tab) => {
//         const isActive = activeTab === tab;

//         const textStyle: TextStyle = {
//           paddingVertical,
//           paddingHorizontal,
//           borderRadius: 4,
//           backgroundColor: isActive ? '#2C80EC' : '#F2F2F2',
//           color: isActive ? '#FFFFFF' : '#323135',
//           borderWidth: 1,
//           borderColor: isActive ? 'transparent' : '#E0E0E0',
//           fontWeight: isActive ? '700' : '500',
//           fontFamily: 'Syne-Medium',
//           fontSize,
//           textAlign: 'center',
//         };

//         return (
//           <TouchableOpacity
//             key={tab}
//             onPress={() => onTabPress(tab)}
//             style={{ flex: 1, marginHorizontal: 4 }}>
//             <TextBodySmall text={tab.charAt(0).toUpperCase() + tab.slice(1)} style={textStyle} />
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// export default FilterTabs;

import React from 'react';
import { View, TouchableOpacity, TextStyle } from 'react-native';
import TextBodySmall from './shared/TextBodySmall';

type Props = {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
  paddingHorizontal?: number;
  paddingVertical?: number;
  fontSize?: number;
};

const FilterTabs = ({
  tabs,
  activeTab,
  onTabPress,
  paddingHorizontal = 6.5,
  paddingVertical = 8.5,
  fontSize = 12,
}: Props) => {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 12 }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        const textStyle: TextStyle = {
          paddingVertical,
          paddingHorizontal,
          borderRadius: 4,
          backgroundColor: isActive ? '#2C80EC' : '#F2F2F2',
          color: isActive ? '#FFFFFF' : '#323135',
          borderWidth: 1,
          borderColor: isActive ? 'transparent' : '#E0E0E0',
          fontWeight: isActive ? '700' : '500',
          fontFamily: 'Syne-Medium',
          fontSize,
          textAlign: 'center',
        };

        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabPress(tab)}
            style={{ flex: 1, marginHorizontal: 4 }}>
            <TextBodySmall text={tab} style={textStyle} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterTabs;
