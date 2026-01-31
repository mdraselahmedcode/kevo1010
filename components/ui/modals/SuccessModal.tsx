// components/ui/modals/SuccessModal.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import PrimaryButton from '../PrimaryButton';
import SuccessCheckIcon from '../icons/SuccessCheckIcon';

type SuccessModalProps = {
  visible: boolean;
  onClose: () => void;
  message?: string;
  buttonText?: string;
  onButtonPress?: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  message = 'Action completed successfully!',
  buttonText = 'Go to Login',
  onButtonPress,
}) => {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <SuccessCheckIcon />

          <Text style={styles.message}>{message}</Text>

          <View style={{ width: '100%', marginTop: 48 }}>
            <PrimaryButton
              title={buttonText || 'Confirm'}
              onPress={() => {
                onButtonPress?.();
                onClose();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fbfbfc',
    padding: 19,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
  },
  message: {
    color: '#323135',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B82F6', // primary color
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
