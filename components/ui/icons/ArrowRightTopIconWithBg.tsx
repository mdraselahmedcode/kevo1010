// import React from 'react';
// import { View } from 'react-native';
// import { ArrowRightTopIcon } from '@/components/icons';
// type ArrowRightTopIconWithBgProps = {
//   size?: number; // outer container size
//   iconSize?: number; // inner bell icon size
//   color?: string;
// };

// const ArrowRightTopIconWithBg: React.FC<ArrowRightTopIconWithBgProps> = ({
//   size = 80,
//   iconSize = 26,
//   color = '#000000',
// }) => {
//   return (
//     <View
//       style={{
//         height: size,
//         width: size,
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative',
//         overflow: 'visible',
//       }}>
//       {/* Outer light circle */}

//       <View
//         style={{
//           position: 'absolute',
//           top: size * 0.06,
//           left: size * 0.06,
//           right: size * 0.06,
//           bottom: size * 0.06,
//           borderRadius: (size * 0.88) / 2,
//           backgroundColor: '#2C80EC', // bg-sky-50
//         }}
//       />

//       {/* Inner primary circle */}
//       <View
//         style={{
//           position: 'absolute',
//           top: size * 0.12,
//           left: size * 0.12,
//           right: size * 0.12,
//           bottom: size * 0.12,
//           borderRadius: (size * 0.76) / 2,
//           backgroundColor: 'transparent', // bg-primary
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <ArrowRightTopIcon size={iconSize} color={color} />
//       </View>
//     </View>
//   );
// };

// export default ArrowRightTopIconWithBg;

import React from 'react';
import { View } from 'react-native';
import { ArrowRightTopIcon } from '@/components/icons';
import { CircleParticlesOverlay } from '@/components/CircleParticlesOverlay';

type ArrowRightTopIconWithBgProps = {
  size?: number;
  iconSize?: number;
  color?: string;
};

const ArrowRightTopIconWithBg: React.FC<ArrowRightTopIconWithBgProps> = ({
  size = 80,
  iconSize = 26,
  color = '#000000',
}) => {
  const outerSize = size * 0.88;
  const innerSize = size * 0.76;

  return (
    <View
      style={{
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      {/* 🔵 Outer circle */}
      <View
        style={{
          position: 'absolute',
          width: outerSize,
          height: outerSize,
          borderRadius: outerSize / 2,
          backgroundColor: '#2C80EC',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden', // 🔥 CLIPS PARTICLES
        }}>
        {/* ✨ Particle overlay */}
        <CircleParticlesOverlay size={outerSize} count={50} />
      </View>

      {/* 🔹 Inner circle */}
      <View
        style={{
          width: innerSize,
          height: innerSize,
          borderRadius: innerSize / 2,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowRightTopIcon size={iconSize} color={color} />
      </View>
    </View>
  );
};

export default ArrowRightTopIconWithBg;
