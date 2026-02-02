import { View } from 'react-native';
import ServiceTypeTab from '@/components/ui/ServiceTypeTab';
import { IceIcon } from '@/components/icons';
import { ClockIcon } from '../icons/ClockIcon';
import { FC } from 'react';

type Props = {
  selected: 'instant' | 'scheduled';
  onChange: (value: 'instant' | 'scheduled') => void;
};

const ServiceTypeSelection: FC<Props> = ({ selected, onChange }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <ServiceTypeTab
        title="Instant Service"
        subtitle="ASAP"
        Icon={IceIcon}
        selected={selected === 'instant'}
        onPress={() => onChange('instant')}
        style={{ marginRight: 11 }}
      />
      <ServiceTypeTab
        title="Scheduled"
        subtitle="Pick date & time"
        Icon={ClockIcon}
        selected={selected === 'scheduled'}
        onPress={() => onChange('scheduled')}
      />
    </View>
  );
};

export default ServiceTypeSelection;
