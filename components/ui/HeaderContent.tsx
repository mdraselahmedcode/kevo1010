import { Image, Text, TouchableOpacity, View } from 'react-native';
import NotificationBellIconWithBg from './icons/NotificationBellIcon';
import HeaderPrimary from './shared/HeaderPrimary';

// Custom header component
export const HeaderContent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        flex: 1,
        // backgroundColor: 'red',
        width: '100%',
      }}>
      {/* Left: Profile Image + Text */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Image
          source={require('@/assets/profile_image_male.jpg')} // replace with your profile image
          className="h-[42px] w-[42px] rounded-full"
        />
        <View>
          {/* <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}></Text> */}
          <HeaderPrimary
            text="Hello Hridoy!"
            color="#fff"
            style={{
              fontSize: 16,
              lineHeight: 18,
              marginBottom: 4,
              letterSpacing: -0.17,
              alignItems: 'center',
            }}
          />
          <HeaderPrimary
            text="What service do you need today?"
            color="#fff"
            style={{
              fontSize: 12,
              lineHeight: 18,
              marginBottom: 0,
              letterSpacing: -0.17,
              alignItems: 'center',
            }}
          />
        </View>
      </View>

      {/* Right: Notification Bell */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NotificationBellIconWithBg size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};
