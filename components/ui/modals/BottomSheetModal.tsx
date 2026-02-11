import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

type BottomSheetModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container} className="border border-[#cccccc77] ">
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fbfbfc',
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
