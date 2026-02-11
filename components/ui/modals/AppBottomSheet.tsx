import React, { useMemo, useRef } from 'react';
import { View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  snapPoints?: string[];
};

const AppBottomSheet = ({ visible, onClose, children, snapPoints = ['40%'] }: Props) => {
  const sheetRef = useRef<BottomSheet>(null);

  const points = useMemo(() => snapPoints, [snapPoints]);

  return (
    <BottomSheet
      ref={sheetRef}
      index={visible ? 0 : -1} // <--- controlled
      snapPoints={points}
      enablePanDownToClose
      animateOnMount
      onClose={onClose}
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
      )}>
      <View className="px-5 pb-6">{children}</View>
    </BottomSheet>
  );
};

export default AppBottomSheet;
