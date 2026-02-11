import React, { useState } from 'react';
import { StatusBar, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '@/components/ui/CustomHeader';
import { availableServices } from './data/availableServices';
import PrimaryButton from '@/components/ui/PrimaryButton';
import InputLabel from '@/components/ui/shared/InputLabel';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import BottomSheetModal from '@/components/ui/modals/BottomSheetModal';
import ServiceSaveConfirmationContent from '@/components/ui/modals/ServiceSaveConfirmationContent';

export default function MyServicesScreen() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSave = () => {
    setIsModalVisible(true);
  };

  const handleConfirmSave = () => {
    setIsModalVisible(false);
    alert(`Services updated: ${selectedServices.join(', ')}`);
    console.log('Selected services saved:', selectedServices);
    // 🔥 Later: Call backend API to save selected services
  };

  const handleCancelSave = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }} />

      <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-background">
        <CustomHeader
          title="My Services"
          backButton
          height={60}
          paddingTop={20}
          paddingBottom={20}
          backgroundColor="#FFFFFF"
        />

        <View style={{ flex: 1 }}>
          <ScrollView
            style={{ paddingHorizontal: 20, paddingTop: 25 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}>
            <InputLabel text="What services do you offer?" />
            <TextBodySmall
              text="Select all that apply"
              style={{ textAlign: 'left', marginBottom: 15 }}
            />

            {/* Services Grid */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {availableServices.map((service) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <TouchableOpacity
                    key={service}
                    onPress={() => toggleService(service)}
                    style={{
                      marginRight: 15,
                      marginBottom: 15,
                      paddingHorizontal: 16,
                      paddingVertical: 10,
                      borderRadius: 8,
                      backgroundColor: isSelected ? '#2C80EC' : '#E0E0E0',
                      borderWidth: 1,
                      borderColor: isSelected ? '#6366F1' : '#E5E7EB',
                    }}>
                    <TextBodySecondary
                      text={service}
                      style={{ color: isSelected ? '#FFFFFF' : '#000000' }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Fixed Bottom Button */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: '#F3F4F6',
              paddingHorizontal: 20,
              paddingTop: 16,
              paddingBottom: 20,
            }}>
            <View style={{ opacity: selectedServices.length === 0 ? 0.6 : 1 }}>
              <PrimaryButton
                title={`Save ${selectedServices.length > 0 ? `(${selectedServices.length})` : ''}`}
                onPress={handleSave}
                disabled={selectedServices.length === 0}
              />
            </View>

            {selectedServices.length === 0 && (
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#6B7280',
                  marginTop: 8,
                }}>
                Select at least one service
              </Text>
            )}
          </View>
        </View>

        {/* Save Confirmation Modal */}
        <BottomSheetModal visible={isModalVisible} onClose={handleCancelSave}>
          <ServiceSaveConfirmationContent
            onCancel={handleCancelSave}
            onConfirm={handleConfirmSave}
          />
        </BottomSheetModal>
      </SafeAreaView>
    </>
  );
}
