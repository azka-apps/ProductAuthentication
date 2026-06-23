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
    paddingHorizontal: 28,
    paddingTop: 12,
    paddingBottom: 42,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -10,
    marginBottom: 22,
  },
  header: {
    alignItems: 'center',
    marginBottom: 42,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 18,
    marginBottom: 14,
    textAlign: 'center',
  },
  subtitle: {
    maxWidth: 330,
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  formSection: {
    gap: 0,
  },
});
