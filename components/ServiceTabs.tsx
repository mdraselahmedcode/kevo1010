import React, { useState, FC } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ServiceButton } from './ServiceButton';

const { width: screenWidth } = Dimensions.get('window');

// The icon type must match what ServiceButton expects
export type Service = {
  title: string;
  Icon: FC<{ size?: number; color?: string }>; // ✅ Fix here
};

type Props = {
  services: Service[];
  onSelect: (service: Service) => void;
};

export const ServiceTabs: React.FC<Props> = ({ services, onSelect }) => {
  const [selected, setSelected] = useState<string>(services[0].title);

  const handlePress = (service: Service) => {
    setSelected(service.title);
    onSelect(service);
  };

  const buttonsPerRow = 2;
  const margin = 8;
  const buttonWidth = (screenWidth - 20 * 2 - margin * 2 * buttonsPerRow) / buttonsPerRow;
  // 20*2 = horizontal padding in parent, margin*2*buttonsPerRow = total horizontal margin

  return (
    <View style={styles.container}>
      {services.map((service) => (
        <ServiceButton
          key={service.title}
          title={service.title}
          Icon={service.Icon} // now typed as FC<{size?, color?}>
          selected={selected === service.title}
          onPress={() => handlePress(service)}
          width={buttonWidth}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 0,
  },
});
