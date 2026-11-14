/**
 * modern-ui-design tokens for React Native / Expo.
 * Override only `brand` per project. Default = "Trust Blue".
 * See references/design-language.md for other palette archetypes.
 */
import { Platform, ViewStyle } from 'react-native';

export const brand = {
  primary: '#1A6BFF',
  primaryDark: '#0B4FD1',
  primaryTint: '#EAF1FF',
  accent: '#FFC91F',
  pageBg: '#F7F9FF',
};

export const colors = {
  ...brand,
  ink: '#101828',
  body: '#344054',
  muted: '#667085',
  subtle: '#98A2B3',
  line: '#E4E7EC',
  lineSoft: '#EEF2F7',
  surface: '#FFFFFF',
  surfaceAlt: '#F8FAFC',
  success: '#12B76A', successTint: '#E8F7EE', successText: '#12803D',
  warning: '#F79009', warningTint: '#FFF4E0', warningText: '#B45309',
  danger: '#F04438', dangerTint: '#FDECEC', dangerText: '#C0362C',
  info: '#2E90FA', infoTint: '#EAF1FF', infoText: '#1D4ED8',
  star: '#FFB020',
};

export const radius = { xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 28, xxxl: 32, full: 999 };

export const space = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64 };

export const font = {
  // Load with expo-font / @expo-google-fonts/plus-jakarta-sans
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semibold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extrabold: 'PlusJakartaSans_800ExtraBold',
};

export const text = {
  display: { fontFamily: font.bold, fontSize: 30, lineHeight: 36, color: colors.ink },
  title: { fontFamily: font.bold, fontSize: 22, lineHeight: 28, color: colors.ink },
  header: { fontFamily: font.semibold, fontSize: 17, color: colors.ink },
  section: { fontFamily: font.bold, fontSize: 17, color: colors.ink },
  body: { fontFamily: font.regular, fontSize: 15, lineHeight: 22, color: colors.body },
  meta: { fontFamily: font.regular, fontSize: 13, lineHeight: 18, color: colors.muted },
  label: { fontFamily: font.medium, fontSize: 13, color: colors.body },
  price: { fontFamily: font.bold, fontSize: 18, color: colors.ink },
} as const;

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

export const shadow = {
  card: Platform.select<ViewStyle>({
    ios: { shadowColor: '#101828', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.06, shadowRadius: 24 },
    android: { elevation: 3 },
    default: {},
  }) as ViewStyle,
  float: Platform.select<ViewStyle>({
    ios: { shadowColor: '#101828', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 32 },
    android: { elevation: 8 },
    default: {},
  }) as ViewStyle,
  cta: Platform.select<ViewStyle>({
    ios: { shadowColor: brand.primary, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.28, shadowRadius: 20 },
    android: { elevation: 6 },
    default: {},
  }) as ViewStyle,
};

export const card: ViewStyle = {
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.lineSoft,
  padding: space[4],
  ...shadow.card,
};

export const button = {
  primary: {
    height: 54, borderRadius: radius.full, backgroundColor: colors.primary,
    alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8, ...shadow.cta,
  } as ViewStyle,
  secondary: {
    height: 54, borderRadius: radius.full, backgroundColor: colors.surface,
    borderWidth: 1, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center',
  } as ViewStyle,
};

export const chip = {
  base: { height: 34, paddingHorizontal: 14, borderRadius: radius.full, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.surface, justifyContent: 'center' } as ViewStyle,
  selected: { backgroundColor: colors.primary, borderColor: colors.primary } as ViewStyle,
};

/** Status pill colours: { bg, fg } */
export const status = {
  upcoming: { bg: colors.successTint, fg: colors.successText },
  confirmed: { bg: colors.successTint, fg: colors.successText },
  completed: { bg: colors.infoTint, fg: colors.infoText },
  pending: { bg: colors.warningTint, fg: colors.warningText },
  cancelled: { bg: colors.dangerTint, fg: colors.dangerText },
};

/** Tinted icon well: pass any hex to get a 10% tint background */
export const tint = (hex: string) => rgba(hex, 0.1);
