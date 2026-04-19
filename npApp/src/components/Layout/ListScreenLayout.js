import React from 'react';
import { FlatList } from 'react-native';

import DefaultScreenLayout from './DefaultScreenLayout';

export default function ListScreenLayout({
  title,
  subtitle,
  stats,

  data,
  renderItem,
  keyExtractor,

  ListHeaderComponent,
  ListEmptyComponent,

  refreshing,
  onRefresh,

  contentContainerStyle, // ✅ important: passed from screen
}) {
  return (
    <DefaultScreenLayout
      title={title}
      subtitle={subtitle}
      stats={stats}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}

        showsVerticalScrollIndicator={false}

        refreshing={refreshing}
        onRefresh={onRefresh}

        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}

        contentContainerStyle={contentContainerStyle}
      />
    </DefaultScreenLayout>
  );
}