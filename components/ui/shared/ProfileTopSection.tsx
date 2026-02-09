import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import * as ImagePicker from 'expo-image-picker';
import { TopGradientSection } from '@/components/ui/shared/TopGradientSection';
import ProfileAvatar from '@/components/ui/shared/ProfileAvatar';
import CameraIconWithBg from '@/components/ui/icons/CameraIconWithBg';
import InputLabel from '@/components/ui/shared/InputLabel';

type ProfileTopSectionProps = {
  userType?: 'customer' | 'provider';
  imageUri: string;
  name: string;
  email?: string;
  showCamera?: boolean;
  gradientColors?: readonly string[];
  overlayComponent?: React.ReactNode;
  overlaySize?: number;
  overlayPosition?: { bottom?: number; right?: number; top?: number; left?: number };
  height?: number;
  borderRadius?: number;
};

const { width, height: screenHeight } = Dimensions.get('window');

const ProfileTopSection: React.FC<ProfileTopSectionProps> = ({
  userType = 'customer',
  imageUri,
  name,
  email,
  showCamera = true,
  gradientColors = ['#0073FF', '#0073FF', '#58a2fc'],
  overlayComponent,
  overlaySize = 33,
  overlayPosition = { bottom: 5, right: 0 },
  height = 200,
  borderRadius = 18,
}) => {
  const [avatarUri, setAvatarUri] = useState(imageUri);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  return (
    <>
      <TopGradientSection
        height={height}
        borderRadius={borderRadius}
        backgroundColors={
          gradientColors.length >= 2
            ? (gradientColors as [string, string, ...string[]])
            : ['#0073FF', '#58a2fc']
        }
        colorLocations={[0, 0.5, 1]}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ProfileAvatar
            imageUri={avatarUri}
            size={119}
            padding={4}
            gradientColors={['#D8D9DB', '#D8D9DB', '#D8D9DB'] as const}
            overlayComponent={
              showCamera
                ? (overlayComponent ?? (
                    <CameraIconWithBg size={overlaySize} iconSize={20} color="#4A4F61" />
                  ))
                : undefined
            }
            overlaySize={overlaySize}
            overlayPosition={overlayPosition}
            onPressAvatar={() => setModalVisible(true)}
            onPressOverlay={pickImage}
          />

          <View style={{ marginTop: 16, alignItems: 'center' }}>
            <InputLabel text={name} className="text-center text-white" />
            {email && <InputLabel text={email} className="text-center text-white" />}
          </View>
        </View>
      </TopGradientSection>

      {/* Fullscreen avatar modal with smooth transition */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        useNativeDriver
        hideModalContentWhileAnimating
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropOpacity={0.9}
        style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <Image
            source={{ uri: avatarUri }}
            style={{
              width: screenHeight * 0.7,
              height: screenHeight * 0.7,
              borderRadius: 16,
              resizeMode: 'contain',
            }}
          />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default ProfileTopSection;
