import { TouchableOpacity } from 'react-native';
import TextBodySmall from './TextBodySmall';

export const InvoicePill = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    className="mb-3 rounded-full px-3 py-1"
    style={{ backgroundColor: '#DBEAFE' }}>
    <TextBodySmall
      className="text-xs font-semibold"
      style={{ color: '#1D4ED8' }}
      text="See Invoice"
    />
  </TouchableOpacity>
);
