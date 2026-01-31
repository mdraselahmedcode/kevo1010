import React from 'react';
import { View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type ParticlesOverlayProps = {
  height: number;
  count?: number;
};

export const ParticlesOverlay: React.FC<ParticlesOverlayProps> = ({ height, count = 150 }) => {
  return (
    <View pointerEvents="none" className="absolute left-0 top-0" style={{ width, height }}>
      {Array.from({ length: count }).map((_, i) => {
        const size = 0.04 + Math.random() * 1.5;

        return (
          <View
            key={i}
            style={{
              position: 'absolute',
              left: Math.random() * width,
              top: Math.random() * height,
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: 'rgb(103, 206, 253)',
              opacity: 0.9,
            }}
          />
        );
      })}
    </View>
  );
};
