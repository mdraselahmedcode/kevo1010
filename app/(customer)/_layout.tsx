// app/(customer)/_layout.tsx
import { Tabs } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { BriefcaseIcon, ChatIcon, GearRotationIcon, OneManIcon } from '@/components/icons';
import { Text, Animated, Image, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { HeaderContent } from '@/components/ui/HeaderContent';
import CustomHeader from '@/components/ui/CustomHeader';

export default function CustomerTabs() {
  const { user, role } = useSelector((state: RootState) => state.auth);

  // Redirect if not authenticated or wrong role
  // if (!user || role !== 'customer') {
  //   return <Redirect href="/(auth)/login" />;
  // }

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          height: 120,
          paddingTop: 8,
          paddingBottom: 12,
        },
      }}>
      {/* SERVICES */}
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#0073FF', height: 100 },
          headerShadowVisible: false,
          headerTitle: () => <HeaderContent />,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: focused ? '800' : '400',
                color: focused ? '#2C80EC' : color,
                marginTop: 6,
              }}>
              Services
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabIconWrapper focused={focused} size={size}>
              <GearRotationIcon size={size} color={focused ? '#fff' : color} />
            </TabIconWrapper>
          ),
        }}
      />

      {/* Jobs */}
      <Tabs.Screen
        name="jobs"
        options={{
          // Use your custom header here
          header: () => (
            <CustomHeader
              title="Jobs"
              subtitle="Track your ongoing & past jobs"
              backButton={true}
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: focused ? '600' : '400',
                color: focused ? '#2C80EC' : color,
                marginTop: 6,
              }}>
              Jobs
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabIconWrapper focused={focused} size={size}>
              <BriefcaseIcon size={size} color={focused ? '#fff' : color} />
            </TabIconWrapper>
          ),
        }}
      />

      {/* Chat */}
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: focused ? '600' : '400',
                color: focused ? '#2C80EC' : color,
                marginTop: focused ? 6 : 6,
              }}>
              Chat
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabIconWrapper focused={focused} size={size}>
              <ChatIcon size={size} color={focused ? '#fff' : color} />
            </TabIconWrapper>
          ),
        }}
      />
      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: focused ? '600' : '400',
                color: focused ? '#2C80EC' : color,
                marginTop: focused ? 6 : 6,
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabIconWrapper focused={focused} size={size}>
              <OneManIcon size={size} color={focused ? '#fff' : color} />
            </TabIconWrapper>
          ),
        }}
      />
    </Tabs>
  );
}

const TabIconWrapper = ({
  focused,
  size,
  children,
}: {
  focused: boolean;
  size: number;
  children: React.ReactNode;
}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: focused ? -13 : 0,
        useNativeDriver: true,
        damping: 12, // smooth, not bouncy
        stiffness: 120,
      }),
      Animated.spring(scale, {
        toValue: focused ? 1.1 : 1,
        useNativeDriver: true,
        damping: 12,
        stiffness: 120,
      }),
    ]).start();
  }, [focused]);

  return (
    <Animated.View
      style={{
        width: size + 24,
        height: size + 24,
        borderRadius: (size + 24) / 2,
        backgroundColor: focused ? '#2C80EC' : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateY }, { scale }],

        // shadow
        shadowColor: '#0C8A8A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: focused ? 1 : 0,
        shadowRadius: 8,
        elevation: focused ? 10 : 0,
      }}>
      {children}
    </Animated.View>
  );
};
