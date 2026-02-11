import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchIcon } from '@/components/icons';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const ChatSearchBar: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder = 'Search by user name...',
}) => {
  return (
    <View style={styles.container}>
      <SearchIcon size={24} color="#7E8792" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // flex-row
    alignItems: 'center', // items-center
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#CACACB99',
    gap: 8, // gap-2 equivalent
  },
  input: {
    fontSize: 16,
    color: '#333333',
    flex: 1, // expand input
  },
});

export default React.memo(ChatSearchBar);
