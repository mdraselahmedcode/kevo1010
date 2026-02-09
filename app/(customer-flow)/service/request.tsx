import { View, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import CustomHeader from '@/components/ui/CustomHeader';
import ShadowBorderInputField from '@/components/ui/inputs/ShadowBorderInputField';
import CustomerRequireServiceFields from '@/components/formFields/customer/CustomerRequireServiceFields';
import ShadowCard from '@/components/ui/ShadowCard';
import ServiceTypeSelection from '@/components/ui/ServiceTypeSelection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import ImageUploadInputField from '@/components/ui/inputs/ImageUploadInputField';
import { validateFields } from '@/utils/formValidate';
import { ClockIcon } from '@/components/icons/ClockIcon';
import { CalendarIcon } from '@/components/icons/CalendarIcon';

export default function ServiceRequest() {
  const { title } = useLocalSearchParams<{ title: string }>();
  const { fields, setFields } = CustomerRequireServiceFields();

  const [serviceType, setServiceType] = useState<'instant' | 'scheduled'>('instant');

  const getField = (name: string) => fields.find((field) => field.name === name);

  const updateField = (name: string, value: string | boolean | string[]) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );
  };

  const handleCreateService = () => {
    const isValid = validateFields(fields, setFields);
    if (!isValid) {
      return isValid;
    }

    const formData: Record<string, string | boolean | string[]> = {};

    fields.forEach((field) => {
      const val = field.value;
      if (typeof val === 'string' || typeof val === 'boolean' || Array.isArray(val)) {
        formData[field.name] = val;
      } else {
        // convert numbers to string, ignore nulls, or handle objects
        if (typeof val === 'number') formData[field.name] = val.toString();
        // skip null or unsupported objects
      }
    });

    console.log('Service Type from params:', title); // <-- log service type
    console.log('Form Data:', formData);
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Stack.Screen
        options={{
          header: () => (
            <CustomHeader
              title="Request Service"
              subtitle={title}
              backButton={true}
              height={100}
              paddingTop={20}
              paddingBottom={0}
              backgroundColor="#FFFFFF"
            />
          ),
        }}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView className="flex-1 bg-background" edges={['bottom', 'top']}>
          <ScrollView
            contentContainerStyle={{ padding: 20, gap: 25, paddingBottom: 40 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {/* Service Address */}
            <ShadowCard>
              <ShadowBorderInputField
                value={(getField('serviceAddress')?.value as string) || ''}
                name="serviceAddress"
                label="Service Address"
                placeholder="123 Main St, Ann Arbor"
                handler={(_, value) => updateField('serviceAddress', value)}
                error={!!getField('serviceAddress')?.error}
                leftIcon="map-pin"
                keyboard="default"
                showLeftIcon
                showLabel
                required
                rightIcon="crosshair"
                showRightIcon
                onRightIconPress={() => console.log('Detect current location')}
                style={{ backgroundColor: 'transparent' }}
              />
            </ShadowCard>

            {/* Price */}
            <ShadowBorderInputField
              value={(getField('price')?.value as string) || ''}
              handler={(_, value) => updateField('price', value)}
              name="price"
              label="Price"
              placeholder="$170"
              error={!!getField('price')?.error}
              keyboard="number-pad"
              showLabel
              required
              style={{ backgroundColor: 'transparent' }}
            />

            {/* Service Type Tabs */}
            <ShadowCard>
              <ServiceTypeSelection
                selected={serviceType}
                onChange={(value) => setServiceType(value)}
              />
            </ShadowCard>

            {serviceType === 'scheduled' && (
              <>
                <ShadowBorderInputField
                  value={(getField('date')?.value as string) || ''}
                  handler={(_, value) => updateField('date', value)}
                  name="date"
                  label="Date"
                  placeholder="mm/dd/yyyy"
                  error={!!getField('date')?.error}
                  keyboard="default"
                  leftIconComponent={<CalendarIcon size={24} color="#4B5563" />}
                  showLeftIcon
                  showLabel
                  required
                  style={{ backgroundColor: 'transparent' }}
                />
                <ShadowBorderInputField
                  value={(getField('time')?.value as string) || ''}
                  handler={(_, value) => updateField('time', value)}
                  name="time"
                  label="Time"
                  placeholder="hh:mm am/pm"
                  keyboard="default"
                  leftIconComponent={<ClockIcon size={24} color="#4B5563" />}
                  showLeftIcon
                  showLabel
                  style={{ backgroundColor: 'transparent' }}
                />
              </>
            )}

            {/* Additional Notes */}
            <ShadowBorderInputField
              value={(getField('additionalNote')?.value as string) || ''}
              handler={(_, value) => updateField('additionalNote', value)}
              name="additionalNote"
              label="Additional Notes (Optional)"
              placeholder="Any specific instruction or details..."
              keyboard="default"
              multiline
              numberOfLines={4}
              showLabel
              style={{ backgroundColor: 'transparent' }}
            />

            {/* Additional Notes */}
            <ShadowBorderInputField
              value={(getField('additionalNote')?.value as string) || ''}
              handler={(_, value) => updateField('additionalNote', value)}
              name="additionalNote"
              label="Additional Notes (Optional)"
              placeholder="Any specific instruction or details..."
              keyboard="default"
              multiline
              numberOfLines={4}
              showLabel
              style={{ backgroundColor: 'transparent' }}
            />

            {/* Upload Images */}
            <ImageUploadInputField
              value={(getField('images')?.value as string[]) || []}
              handler={(name, value) => updateField('images', value)}
              name="images"
              label={getField('images')?.label}
              placeholder={getField('images')?.placeHolder}
              required={getField('images')?.required}
              showLabel
              max={getField('images')?.max}
            />

            {/* Create Service Button */}
            <PrimaryButton title="Create service" onPress={handleCreateService} />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}
