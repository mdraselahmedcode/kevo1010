import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeftChevIcon } from '@/components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import TextBodySecondary from './shared/TextBodySecondary';
import TextBodySmall from './shared/TextBodySmall';

type CustomHeaderProps = {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  backButton?: boolean;
  height?: number;
  paddingTop?: number;
  paddingBottom?: number;
  backIconSize?: number;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  subtitle,
  backgroundColor = '#2C80EC',
  backButton = true,
  height = 100,
  paddingTop = 20,
  paddingBottom = 0,
  backIconSize = 24,
}) => {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop,
        paddingBottom,
        backgroundColor,
        height,
      }}>
      {backButton && (
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginRight: 17 }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          {/* Gradient background */}
          <LinearGradient
            colors={['#659df8', '#1e69cc', '#1a66b3', '#121d9b']}
            locations={[0.03, 0.7, 1, 1]} // approximate percentages (2.98% -> 0.03, 49.96% -> 0.5, etc.)
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ArrowLeftChevIcon size={backIconSize} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      )}

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextBodySecondary
          text={title}
          style={{ textAlign: 'left', fontFamily: 'Nunito-Medium', fontSize: 16 }}
        />
        {subtitle && <TextBodySmall text={subtitle} style={{ textAlign: 'left' }} />}
      </View>
    </View>
  );
};

export default CustomHeader;
