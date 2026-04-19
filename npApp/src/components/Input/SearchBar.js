import React from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../components/Input';
import { theme, spacing } from '../../theme';

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search',
  onClear,
}) {
  return (
    <View>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ marginBottom: 0 }}

        renderLeft={() => (
          <Ionicons
            name="search-outline"
            size={18}
            color={theme.text.muted}
            style={{ marginRight: spacing.sm }}
          />
        )}

        renderRight={() =>
          value ? (
            <Pressable
              onPress={onClear}
              hitSlop={10}
              style={({ pressed }) => ({
                paddingLeft: spacing.sm,
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="close-circle"
                size={18}
                color={theme.text.muted}
              />
            </Pressable>
          ) : null
        }
      />
    </View>
  );
}