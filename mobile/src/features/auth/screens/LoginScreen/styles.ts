import {StyleSheet} from 'react-native';

import {colors} from '../../../../shared/constants/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
    paddingHorizontal: 28,
    paddingTop: 34,
    paddingBottom: 42,
  },
  header: {
    alignItems: 'center',
    marginBottom: 46,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: 'center',
  },
  formSection: {
    gap: 0,
  },
  bottomGlow: {
    position: 'absolute',
    left: 42,
    right: 42,
    bottom: -38,
    height: 86,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    backgroundColor: colors.primarySoft,
  },
});
