// theme.js

import { colors } from './colors';

/**
 * Semantic Theme for React Native
 */
export const theme = {
  text: {
    primary: colors.gray[900],
    heading: colors.gray[800],
    strongText: colors.gray[700],
    secondary: colors.gray[600],
    muted: colors.gray[500],
    placeholder: colors.gray[400],
    inverse: '#FFFFFF',
    link: colors.accent[500],
  },

  background: {
    primary: colors.gray[50],
    surface: '#FFFFFF',
    subtle: colors.gray[100],
    brand: colors.primary[100],
    accent: colors.accent[100],
    statusbar: colors.primary[500],
    // accent: colors.accent[400],
  },

  border: {
    default: colors.gray[200],
    light: colors.gray[100],
    strong: colors.gray[300],
    focus: colors.accent[500],
    accent: colors.accent[400],
  },

  sectionui: {
    surface: '#FFFFFF',
    border: colors.gray[200],
  },

  icon: {
    personsalInfo: {
      background: colors.gray[100],
      icon: colors.gray[600],
    },
    businessInfo: {
      background: colors.secondary[100],
      icon: colors.secondary[600],
    },
    bankDetails: {
      background: colors.accent[100],
      icon: colors.accent[600],
    },
    notifications: {
      background: colors.success[100],
      icon: colors.success[600],
    },
    security: {
      background: colors.error[100],
      icon: colors.error[600],
    },
    helpSupport: {
      background: colors.gray[100],
      icon: colors.gray[600],
    },
    settings: {
      background: colors.gray[100],
      icon: colors.gray[600],
    },
    logout: {
      background: colors.error[100],
      icon: colors.error[600],
    },
  },

  action: {
    primary: {
      background: colors.primary[600],
      text: '#FFFFFF',
    },

    secondary: {
      background: colors.secondary[100],
      text: '#FFFFFF',
      link: colors.secondary[500],
      icon: colors.secondary[600],
    },

    tertiary: {
      background: colors.neutral.white,
      text: colors.primary[600],
      border: colors.primary[600],
    },

    ghost: {
      background: 'transparent',
      text: colors.primary[600],
    },

    link: {
      text: colors.secondary[400],
    },
  },

  state: {
    success: {
      text: colors.success[600],
      background: colors.success[100],
      border: colors.success[500],
    },

    error: {
      text: colors.error[600],
      background: colors.error[100],
      border: colors.error[500],
    },

    warning: {
      text: colors.warning[500],
      background: colors.warning[100],
      border: colors.warning[500],
    },
  },
};
