// components/ConversationItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';
import { Conversation } from '../data/types';

type Props = {
  conversation: Conversation;
  onPress: () => void;
};

const ConversationItem: React.FC<Props> = ({ conversation, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 18,
        paddingHorizontal: 12,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eeeeee66',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={{ uri: conversation.participantAvatar || 'https://i.pravatar.cc/150' }}
        style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextBodySecondary
            text={conversation.participantName}
            style={{ fontFamily: 'Syne-SemiBold', color: '#313131' }}
          />
          <TextBodySmall
            text={conversation.updatedAt}
            style={{ fontFamily: 'Syne-Medium', color: '#737476' }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
          <TextBodySmall
            text={conversation.lastMessage}
            numberOfLines={1}
            style={{
              flex: 1,
              fontFamily: 'Syne-Medium',
              color: '#737476',
              textAlign: 'left',
              marginRight: 50,
            }}
          />
          {conversation.unreadCount ? (
            <View
              style={{
                backgroundColor: '#00AFF5',
                minWidth: 20,
                height: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 6,
                marginLeft: 8,
              }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>
                {conversation.unreadCount}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ConversationItem);
