// import React, { useMemo } from 'react';
// import { View } from 'react-native';

// type Props = {
//   size: number;
//   count?: number;
// };

// export const CircleParticlesOverlay: React.FC<Props> = ({ size, count = 35 }) => {
//   // Generate particles once (not every render)
//   const particles = useMemo(
//     () =>
//       Array.from({ length: count }).map(() => {
//         const pSize = 1 + Math.random() * 0.2;
//         return {
//           size: pSize,
//           left: Math.random() * size,
//           top: Math.random() * size,
//           opacity: 0.4 + Math.random() * 0.6,
//         };
//       }),
//     [count, size]
//   );

//   return (
//     <View
//       pointerEvents="none"
//       style={{
//         position: 'absolute',
//         width: size,
//         height: size,
//         borderRadius: size / 2,
//         overflow: 'hidden',
//       }}>
//       {particles.map((p, i) => (
//         <View
//           key={i}
//           style={{
//             position: 'absolute',
//             width: p.size,
//             height: p.size,
//             borderRadius: p.size / 2,
//             backgroundColor: 'rgb(103, 206, 253)',
//             opacity: p.opacity,
//             left: p.left,
//             top: p.top,
//           }}
//         />
//       ))}
//     </View>
//   );
// };

import React, { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

type Props = {
  size: number;
  count?: number;
};

export const CircleParticlesOverlay: React.FC<Props> = ({ size, count = 35 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => {
        const pSize = 0.5 + Math.random() * 0.2;
        return {
          size: pSize,
          left: Math.random() * size,
          top: Math.random() * size,
          opacity: 0.4 + Math.random() * 0.6,
        };
      }),
    [count, size]
  );

  return (
    <View
      pointerEvents="none"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
      }}>
      {/* 🔵 Radial Gradient Background */}
      <Svg width={size} height={size}>
        <Defs>
          <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#0DA2FF" stopOpacity="1" />
            <Stop offset="100%" stopColor="#0073FF" stopOpacity="1" />
          </RadialGradient>
        </Defs>

        <Rect width={size} height={size} fill="url(#grad)" />
      </Svg>

      {/* ✨ Particle Layer */}
      {particles.map((p, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: p.size / 2,
            backgroundColor: 'rgba(255,255,255,0.9)',
            opacity: p.opacity,
            left: p.left,
            top: p.top,
          }}
        />
      ))}
    </View>
  );
};
