import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import InputLabel from '../shared/InputLabel';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

type Props = {
  value: string[];
  name: string;
  handler: (name: string, value: string[]) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  showLabel?: boolean;
  max?: number;
};

const ImageUploadInputField: React.FC<Props> = ({
  value,
  handler,
  name,
  label = 'Upload Photos',
  placeholder,
  required = false,
  showLabel = true,
  max = 3,
}) => {
  const [images, setImages] = useState<string[]>(value || []);

  const pickImage = async () => {
    if (images.length >= max) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.7,
      selectionLimit: max - images.length, // max remaining
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => asset.uri);
      const newImages = [...images, ...selectedImages].slice(0, max);
      setImages(newImages);
      handler(name, newImages);
    }
  };

  const removeImage = (uri: string) => {
    const filtered = images.filter((i) => i !== uri);
    setImages(filtered);
    handler(name, filtered);
  };

  return (
    <View style={{ width: '100%', marginBottom: 12 }}>
      {showLabel && (
        <InputLabel
          text={label + (required ? ' *' : '')}
          style={{ marginBottom: 6, color: '#323135' }}
        />
      )}

      <TouchableOpacity onPress={pickImage} activeOpacity={0.7} style={styles.uploadContainer}>
        <Text style={styles.uploadText}>
          {placeholder ?? 'Drag & Drop Your File Or '}
          <Text style={{ color: '#FF6B00', textDecorationLine: 'underline' }}>Browse</Text>
        </Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {images.map((uri) => (
          <View key={uri} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity style={styles.removeButton} onPress={() => removeImage(uri)}>
              <Feather name="x" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  uploadText: {
    color: '#6B7280',
    textAlign: 'center',
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    width: 80,
    height: 80,
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageUploadInputField;
