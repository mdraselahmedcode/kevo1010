// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// type Props = {
//   images?: string[];
//   maxImages?: number; // default 3
// };

// const JobImagesRow = ({ images = [], maxImages = 3 }: Props) => {
//   // Limit to maxImages
//   const imagesToShow = images.slice(0, maxImages);

//   // Fill placeholders if fewer than maxImages
//   while (imagesToShow.length < maxImages) {
//     imagesToShow.push('');
//   }

//   return (
//     <View style={styles.imageRow}>
//       {imagesToShow.map((img, idx) =>
//         img ? (
//           <Image key={idx} source={{ uri: img }} style={styles.jobImage} />
//         ) : (
//           <View key={idx} style={[styles.jobImage, styles.placeholder]} />
//         )
//       )}
//     </View>
//   );
// };

// export default JobImagesRow;

// const styles = StyleSheet.create({
//   imageRow: { flexDirection: 'row', justifyContent: 'flex-start', gap: 8, marginTop: 8 },
//   jobImage: {
//     flex: 1,
//     aspectRatio: 1,
//     borderRadius: 8,
//     resizeMode: 'cover',
//   },
//   placeholder: { backgroundColor: '#E0E0E0' },
// });

import React from 'react';
import { View, Image, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  images?: string[];
  maxImages?: number; // default 3
  style?: ViewStyle; // optional style for container
};

const JobImagesRow = ({ images = [], maxImages = 3, style }: Props) => {
  // Limit to maxImages
  const imagesToShow = images.slice(0, maxImages);

  // Fill placeholders if fewer than maxImages
  while (imagesToShow.length < maxImages) {
    imagesToShow.push(''); // placeholder
  }

  return (
    <View style={[styles.imageRow, style]}>
      {imagesToShow.map((img, idx) =>
        img ? (
          <Image key={idx} source={{ uri: img }} style={styles.jobImage} />
        ) : (
          <View key={idx} style={[styles.jobImage, styles.placeholder]} />
        )
      )}
    </View>
  );
};

export default JobImagesRow;

const styles = StyleSheet.create({
  imageRow: { flexDirection: 'row', justifyContent: 'flex-start', gap: 8 },
  jobImage: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  placeholder: { backgroundColor: '#E0E0E0' },
});
