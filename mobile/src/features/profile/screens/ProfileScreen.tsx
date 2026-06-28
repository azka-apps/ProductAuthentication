import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuthSession} from '../../../app/providers/AuthSessionProvider';
import type {AppStackParamList} from '../../../app/navigation/navigation.types';
import {AppTabBar} from '../../../shared/components/AppTabBar';
import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';

type ProfileScreenProps = NativeStackScreenProps<AppStackParamList, 'Profile'>;

export function ProfileScreen({navigation}: ProfileScreenProps) {
  const {signOut, user} = useAuthSession();
  const roleLabel = user?.role === 'admin' ? 'Admin' : 'User';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.headerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user?.initials}</Text>
          </View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          <View style={styles.roleBadge}>
            <Icon
              name={icons.app.shield}
              color={colors.primary}
              size={14}
              iconStyle="solid"
            />
            <Text style={styles.roleText}>{roleLabel} Protected Route</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Icon
                name={icons.app.profile}
                color={colors.primary}
                size={19}
                iconStyle="solid"
              />
            </View>
            <View style={styles.rowCopy}>
              <Text style={styles.rowTitle}>Account Type</Text>
              <Text style={styles.rowSubtitle}>{roleLabel}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Icon
                name={icons.app.shield}
                color={colors.primary}
                size={19}
                iconStyle="solid"
              />
            </View>
            <View style={styles.rowCopy}>
              <Text style={styles.rowTitle}>Access Status</Text>
              <Text style={styles.rowSubtitle}>Authenticated locally</Text>
            </View>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={signOut}
          style={styles.signOutButton}>
          <Icon
            name={icons.app.signOut}
            color={colors.error}
            size={18}
            iconStyle="solid"
          />
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </ScrollView>

      <View style={styles.tabBarWrap}>
        <AppTabBar
          activeRoute="Profile"
          onNavigate={route => navigation.navigate(route)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 138,
  },
  headerCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderSoft,
    borderRadius: 22,
    backgroundColor: colors.surface,
    paddingHorizontal: 24,
    paddingVertical: 34,
    shadowColor: colors.shadowNeutral,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 7,
  },
  avatar: {
    width: 92,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 46,
    backgroundColor: colors.primaryGlow,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: '900',
  },
  name: {
    color: colors.textStrong,
    fontSize: 28,
    fontWeight: '900',
    marginTop: 20,
  },
  email: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
  },
  roleBadge: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 999,
    backgroundColor: colors.primarySoft,
    marginTop: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  roleText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '800',
  },
  section: {
    gap: 14,
    marginTop: 24,
  },
  row: {
    minHeight: 86,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderSoft,
    borderRadius: 18,
    backgroundColor: colors.surface,
    gap: 16,
    paddingHorizontal: 18,
  },
  rowIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: colors.primaryGlow,
  },
  rowCopy: {
    flex: 1,
  },
  rowTitle: {
    color: colors.textStrong,
    fontSize: 16,
    fontWeight: '900',
  },
  rowSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  signOutButton: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.2)',
    borderRadius: 16,
    backgroundColor: colors.surface,
    gap: 10,
    marginTop: 24,
  },
  signOutText: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '900',
  },
  tabBarWrap: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 22,
  },
});
