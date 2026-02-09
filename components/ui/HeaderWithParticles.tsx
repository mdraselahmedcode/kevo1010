import React from 'react';
import { View, TouchableOpacity, StyleSheet, ColorValue } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ParticlesOverlay } from '@/components/ParticlesOverlay';
import { ArrowLeftChevIcon } from '@/components/icons';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';

/**
 * Expo LinearGradient requires at least 2 colors
 */
type GradientColors = readonly [ColorValue, ColorValue, ...ColorValue[]];

type HeaderWithParticlesProps = {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  height?: number;
  paddingTop?: number;
  paddingBottom?: number;
  backIconSize?: number;
  backgroundColors?: GradientColors;
  rightContent?: React.ReactNode;
};

const DEFAULT_HEIGHT = 100;

const DEFAULT_BG_COLORS: GradientColors = ['#0073FF', '#58a2fc'];

export const HeaderWithParticles: React.FC<HeaderWithParticlesProps> = ({
  title,
  subtitle,
  showBackButton = true,
  height = DEFAULT_HEIGHT,
  paddingTop = 20,
  paddingBottom = 0,
  backIconSize = 24,
  backgroundColors = DEFAULT_BG_COLORS,
  rightContent,
}) => {
  const router = useRouter();

  return (
    <View style={{ height, position: 'relative', overflow: 'hidden' }}>
      {/* Gradient background */}
      <LinearGradient
        colors={backgroundColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Particle layer */}
      <ParticlesOverlay height={height} />

      {/* Header content */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start', // ✅ IMPORTANT
          paddingHorizontal: 20,
          paddingTop,
          paddingBottom,
          height,
          zIndex: 10,
        }}>
        {/* Back Button */}
        {showBackButton && (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ marginRight: 16 }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <LinearGradient
              colors={['#659df8', '#1e69cc', '#1a66b3', '#121d9b']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.backBtn}>
              <ArrowLeftChevIcon size={backIconSize} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        )}

        {/* Title */}
        <View style={{ flex: 1 }}>
          {title && (
            <TextBodySecondary
              text={title}
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 16,
                fontFamily: 'Nunito-Medium',
              }}
            />
          )}
          {subtitle && (
            <TextBodySmall text={subtitle} style={{ color: '#E5EDFF', textAlign: 'left' }} />
          )}
        </View>

        {/* Right slot */}
        {rightContent && <View>{rightContent}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
