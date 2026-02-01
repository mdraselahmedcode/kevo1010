import React from 'react';
import { Image, TouchableOpacity, View, Dimensions } from 'react-native';
import NotificationBellIconWithBg from './icons/NotificationBellIcon';
import HeaderPrimary from './shared/HeaderPrimary';
import { ParticlesOverlay } from '@/components/ParticlesOverlay';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 80;

export const HeaderContent = () => {
  return (
    <View
      style={{
        width: '100%',
        height: HEADER_HEIGHT,
        position: 'relative',
        justifyContent: 'center',
      }}>
      {/* Particles overlay */}
      <ParticlesOverlay height={HEADER_HEIGHT} />

      {/* Header row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center', // 🔑 main vertical alignment
          justifyContent: 'space-between',
          width: '100%',
          zIndex: 10,
        }}>
        {/* Left: avatar + text */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center', // 🔑 centers avatar vs text block
            gap: 8,
          }}>
          <Image
            source={require('@/assets/profile_image_male.jpg')}
            className="h-[42px] w-[42px] rounded-full"
          />

          {/* Text block */}
          <View
            style={{
              justifyContent: 'center', // 🔑 centers the two lines as a group
            }}>
            <HeaderPrimary
              text="Hello Hridoy!"
              color="#fff"
              style={{
                fontSize: 16,
                lineHeight: 18,
                marginBottom: 2, // reduced for balance
                letterSpacing: -0.17,
              }}
            />
            <HeaderPrimary
              text="What service do you need today?"
              color="#fff"
              style={{
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: -0.17,
                marginBottom: 0,
              }}
            />
          </View>
        </View>

        {/* Right: notification */}
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            // 🔹 Outer stacked shadow (depth)
            shadowColor: '#000',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.7,
            shadowRadius: 10,
            elevation: 6, // Android
          }}>
          <NotificationBellIconWithBg size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
