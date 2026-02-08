import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ParticlesOverlay } from '@/components/ParticlesOverlay';
import { SearchBar } from '@/components/SearchBar';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import {
  BushIcon,
  ShovelSnowIcon,
  GrassCuttingIcon,
  IceIcon,
  SeasonalSubBushIcon,
} from '@/components/icons';
import { LandscapIcon } from '@/components/icons/LandscapeIcon';
import { ServiceTabs, Service } from '@/components/ServiceTabs';
import BushWithBgIcon from '@/components/ui/icons/BushWithBgIcon';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import ArrowRightTopIconWithBg from '@/components/ui/icons/ArrowRightTopIconWithBg';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const TOP_SECTION_HEIGHT = 120;

const Home = () => {
  const router = useRouter();

  const [location, setLocation] = useState('');

  const services: Service[] = [
    { title: 'Snow Plowing', Icon: BushIcon },
    { title: 'Snow Shoveling', Icon: ShovelSnowIcon },
    { title: 'Salting / de-icing', Icon: IceIcon },
    { title: 'Lawn mowing', Icon: GrassCuttingIcon },
    { title: 'Landscaping', Icon: LandscapIcon },
    { title: 'Seasonal contracts', Icon: SeasonalSubBushIcon },
  ];

  const handleSearchPress = () => {
    console.log('Search value:', location);
    console.log('Search button pressed!');

    if (location.trim() === '') {
      console.log('Search field is empty');
    } else {
      console.log(`Searching for: "${location}"`);
    }
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          className="bg-background"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 25 }}>
          {/* Top Section */}
          <View
            style={{
              width,
              height: TOP_SECTION_HEIGHT,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              overflow: 'hidden',
            }}
            pointerEvents="box-none">
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              {/* Background gradient */}
              <LinearGradient
                colors={['#0073FF', '#58a2fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ ...StyleSheet.absoluteFillObject }}
              />

              {/* Particle overlay */}
              <ParticlesOverlay height={TOP_SECTION_HEIGHT} />

              {/* Header Content */}
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                  pointerEvents: 'box-none',
                }}>
                <SearchBar
                  placeholder="Current Location"
                  value={location}
                  onChangeText={setLocation}
                  showLeftIcon={true}
                  showRightIcon={true}
                  style={{ width: '100%', maxWidth: width - 40 }}
                  onPress={handleSearchPress}
                />
              </View>
            </View>
          </View>

          {/* Page Content */}
          <View className="flex-1 px-5 pt-5 ">
            <TextBodySecondary
              text="Select a Service"
              style={{
                textAlign: 'left',
                fontFamily: 'Nunito-SemiBold',
              }}
            />

            {/* ✅ Type-safe onSelect */}
            <ServiceTabs
              services={services}
              onSelect={(service: Service) => console.log('Selected:', service.title)}
            />
          </View>

          <View
            style={{
              marginTop: 30,
              backgroundColor: 'transparent',
              paddingHorizontal: 20,
            }}>
            {/* Wrapper to ensure shadow is visible */}
            <View
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 2,
                elevation: 2,
                borderRadius: 12,
              }}>
              <Pressable
                android_ripple={{ color: '#E6F0FF' }}
                onPress={() => router.push('../(customer-flow)/service-history')}
                style={{ borderRadius: 12, overflow: 'hidden' }}>
                {({ pressed }) => (
                  <View
                    className="flex flex-row items-center gap-3 bg-background"
                    style={{
                      paddingVertical: 14,
                      paddingHorizontal: 11,
                      backgroundColor: pressed ? '#F5F9FF' : '#FFFFFF',
                    }}>
                    <BushWithBgIcon size={36} iconSize={24} color="#2C80EC" />

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <TextBodySecondary
                        style={{ textAlign: 'left', fontFamily: 'Nunito-SemiBold' }}
                        text="Service History"
                      />
                      <TextBodySmall
                        style={{ textAlign: 'left' }}
                        text="View past jobs and invoice"
                      />
                    </View>

                    <ArrowRightTopIconWithBg iconSize={24} size={42} color="#fff" />
                  </View>
                )}
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
