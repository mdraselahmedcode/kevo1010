import React, { FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextBodySecondary from './shared/TextBodySecondary';
import TextBodySmall from './shared/TextBodySmall';
import ShadowCard from './ShadowCard';

type Props = {
  title: string;
  subtitle: string;
  Icon: FC<{ size?: number; color?: string }>;
  selected: boolean;
  onPress: () => void;
  width?: number;
  style?: StyleProp<ViewStyle>;
};

const ServiceTypeTab: FC<Props> = ({ title, subtitle, Icon, selected, onPress, width, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        width ? { width } : { flex: 1 },
        selected
          ? { borderColor: '#2C80EC', borderWidth: 1.5 }
          : { borderColor: 'transparent', borderWidth: 1 },
        style,
      ]}>
      <LinearGradient
        colors={['#EFF6FF', '#EFF6FF']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <LinearGradient
          className=" border border-primary/70 "
          colors={selected ? ['#D0E0FF', '#ffffff'] : ['#F5F5F5', '#FFFFFF']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.iconContainer}>
          <Icon size={32} color="#52525B" />
        </LinearGradient>
        <TextBodySecondary style={{ fontFamily: 'Nunito-SemiBold' }} text={title} />
        <TextBodySmall text={subtitle} style={{ fontFamily: 'Nunito' }} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  gradient: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    padding: 6,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ServiceTypeTab;
