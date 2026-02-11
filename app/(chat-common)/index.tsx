import React, { useEffect, useMemo, useState } from 'react';
import { View, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputLabel from '@/components/ui/shared/InputLabel';

import { Conversation } from './data/types';
import { mockConversations } from './data/conversations';
import ConversationItem from './components/ConversationItem';
import ChatSearchBar from './components/ChatSearchBar';
import CustomHeader from '@/components/ui/CustomHeader';
import { useCallback } from 'react';

export default function ChatListScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setConversations(mockConversations);
      setLoading(false);
    }, 600);
  }, []);

  const handlePressConversation = (conversation: Conversation) => {
    router.push(`/(chat-common)/${conversation.jobId}` as any);
  };

  // 🔹 Filter conversations based on search
  const filteredConversations = useMemo(() => {
    const lowerSearch = searchText.toLowerCase();
    return conversations.filter(
      (conv) =>
        conv.participantName.toLowerCase().includes(lowerSearch) ||
        conv.lastMessage.toLowerCase().includes(lowerSearch)
    );
  }, [searchText, conversations]);

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Top safe area */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }} />

      <SafeAreaView edges={['left', 'right']} className="flex-1 bg-background">
        <CustomHeader
          title="Chat List"
          backButton
          height={60}
          paddingTop={20}
          paddingBottom={20}
          backgroundColor="#FFFFFF"
        />
        {loading ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View className="mx-5 mt-6 flex-1">
            {/* Search bar */}
            <ChatSearchBar value={searchText} onChangeText={setSearchText} />

            {/* Label */}
            <InputLabel
              text="All Messages"
              style={{ fontFamily: 'Nunito-SemiBold', paddingBottom: 10, marginBottom: 0 }}
            />

            {/* Conversation list */}
            <FlatList
              data={filteredConversations}
              keyExtractor={(item) => item.jobId}
              renderItem={({ item }) => (
                <ConversationItem
                  conversation={item}
                  onPress={() => handlePressConversation(item)}
                />
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
              initialNumToRender={10} // render only first 10 items initially
              maxToRenderPerBatch={10} // batch render 10 at a time
              windowSize={10} // number of screens worth of content to render
              removeClippedSubviews={true} // removes offscreen items
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
