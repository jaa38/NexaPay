// colors.js

/**
 * 🎨 NexaPay Color Tokens
 *
 * This file contains ONLY raw color values (no UI meaning).
 * These are the source-of-truth design tokens used across:
 * - React (Web)
 * - React Native (Mobile)
 *
 * ⚠️ Do NOT use these directly in components.
 * Always use semantic tokens from theme.js
 */

export const colors = {
  /**
   * 🟦 PRIMARY (Indigo)
   * Brand identity — buttons, headers, key actions
   */
  primary: {
    700: "#141F5C", // Hover / pressed
    600: "#1E2A78", // Main brand (CTA buttons)
    500: "#2F3F9E", // Secondary usage
    400: "#4A5AC4", // Subtle accents
    100: "#E8ECFF", // Background highlight
  },

  /**
   * 🟣 SECONDARY (Purple)
   * Highlights, active states, alternative CTAs
   */
  secondary: {
    600: "#5A4EDC", // Hover
    500: "#6C5CE7", // Active / highlight
    400: "#8A7FF0", // Light accents
    100: "#EFEFFD", // Background tint
  },

  /**
   * 🌊 ACCENT (Cyan)
   * Links, focus states, interactive highlights
   */
  accent: {
    600: "#00A8E0", // Hover
    500: "#00C2FF", // Links / focus
    400: "#4DD8FF", // Highlights
    100: "#E6F9FF", // Background tint
  },

  /**
   * ⚫ GRAYSCALE (Neutral UI Foundation)
   * Used for text, borders, backgrounds
   */
  gray: {
    900: "#0F172A", // Primary text
    800: "#1E293B", // Headings
    700: "#334155", // Strong text
    600: "#475569", // Secondary text
    500: "#64748B", // Labels
    400: "#94A3B8", // Placeholder
    300: "#CBD5F5", // Light borders
    200: "#E2E8F0", // Borders / dividers
    100: "#F1F5F9", // Surfaces
    50: "#F8FAFC",  // App background
  },

  /**
   * 🟢 SUCCESS (Green)
   * Positive feedback (payments, confirmations)
   */
  success: {
    600: "#16A34A", // Strong state
    500: "#22C55E", // Main success
    100: "#DCFCE7", // Background
  },

  /**
   * 🔴 ERROR (Red)
   * Errors, failed transactions
   */
  error: {
    600: "#DC2626", // Strong state
    500: "#EF4444", // Main error
    100: "#FEE2E2", // Background
  },

  /**
   * 🟡 WARNING (Amber)
   * Alerts, caution states
   */
  warning: {
    500: "#F59E0B", // Main warning
    100: "#FEF3C7", // Background
  },
};