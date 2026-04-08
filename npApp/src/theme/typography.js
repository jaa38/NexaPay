import { theme } from './theme';

/**
 * 🔤 NexaPay Typography System (React Native)
 *
 * Uses Inter via Expo Fonts
 * ⚠️ fontWeight is NOT used — React Native ignores it for custom fonts
 */

// ✅ Central font mapping
const fontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
};

export const typography = {
  /**
   * 🟦 HEADINGS
   */
  h1: {
    fontSize: 32,
    fontFamily: fontFamily.bold,
    lineHeight: 40,
    letterSpacing: -0.5,
    color: theme.text.heading,
  },

  h2: {
    fontSize: 24,
    fontFamily: fontFamily.semibold,
    lineHeight: 32,
    letterSpacing: -0.3,
    color: theme.text.heading,
  },

  h3: {
    fontSize: 20,
    fontFamily: fontFamily.semibold,
    lineHeight: 28,
    letterSpacing: -0.2,
    color: theme.text.heading,
  },

  h4: {
    fontSize: 18,
    fontFamily: fontFamily.semibold,
    lineHeight: 26,
    letterSpacing: -0.1,
    color: theme.text.heading,
  },

  /**
   * 🧾 BODY TEXT
   */
  bodyLarge: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    lineHeight: 24,
    letterSpacing: 0,
    color: theme.text.secondary,
  },

  bodyLargeSemiBold: {
    fontSize: 16,
    fontFamily: fontFamily.semibold,
    lineHeight: 24,
    letterSpacing: 0,
    color: theme.text.secondary,
  },

  bodyMedium: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: theme.text.secondary,
  },

  bodyMediumSemiBold: {
    fontSize: 14,
    fontFamily: fontFamily.semibold,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: theme.text.secondary,
  },

  bodySmall: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: theme.text.muted,
  },

  bodySmallSemiBold: {
    fontSize: 12,
    fontFamily: fontFamily.semibold,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: theme.text.muted,
  },

  /**
   * 🧩 UI TEXT
   */
  button: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: theme.text.inverse,
  },

  label: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    lineHeight: 16,
    letterSpacing: 0.3,
    color: theme.text.secondary,
  },

  inputLabel: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    lineHeight: 16,
    letterSpacing: 0.3,
    color: theme.text.muted,
  },

  caption: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    lineHeight: 16,
    letterSpacing: 0.3,
    color: theme.text.muted,
  },

  card: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    lineHeight: 20,
    letterSpacing: -0.1,
    color: theme.text.primary,
  },

  link: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: theme.action.link.text,
  },
};
