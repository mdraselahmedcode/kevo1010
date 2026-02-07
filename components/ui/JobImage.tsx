// import { Image, Text, View } from 'react-native';

// type JobImageProps = {
//     uri?: string;
//     ImageStyle?: string;
// };

// export function JobImage({ uri, ImageStyle }: JobImageProps) {
//     if (!uri) {
//         return (
//             <View className="h-40 rounded-[8] bg-gray-100 items-center justify-center">
//                 <Text className="text-gray-400">No image available</Text>
//             </View>
//         );
//     }

//     return (
//         <Image
//             source={{ uri }}
//             className="w-full h-40 rounded-xl"
//             resizeMode="cover"
//         />
//     );
// }

import { Image, Text, View, ImageStyle, StyleProp } from 'react-native';

type JobImageProps = {
  uri?: string;
  className?: string; // ✅ NativeWind styles
  style?: StyleProp<ImageStyle>; // ✅ inline RN styles (optional)
};

export function JobImage({ uri, className, style }: JobImageProps) {
  if (!uri) {
    return (
      <View className="h-40 items-center justify-center rounded-[8px] bg-gray-100">
        <Text className="text-gray-400">No image available</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri }}
      resizeMode="cover"
      className={`h-40 w-auto rounded-xl ${className ?? ''}`}
      style={style}
    />
  );
}
