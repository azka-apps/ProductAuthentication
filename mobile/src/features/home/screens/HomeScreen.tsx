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

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

export function HomeScreen({navigation}: HomeScreenProps) {
  const {user} = useAuthSession();
  const isAdmin = user?.role === 'admin';
  const roleLabel = isAdmin ? 'Admin' : 'User';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.greeting}>
            <Text style={styles.welcome}>Welcome back,</Text>
            <Text style={styles.name}>{user?.name}</Text>
            <View style={styles.roleBadge}>
              <Text style={styles.roleBadgeText}>{roleLabel}</Text>
            </View>
            <Text style={styles.subtitle}>Glad to see you again!</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user?.initials}</Text>
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroIconCircle}>
            <Icon
              name={isAdmin ? icons.app.shield : icons.app.home}
              color={colors.primary}
              size={45}
              iconStyle="solid"
            />
          </View>

          <Text style={styles.heroTitle}>{roleLabel} Home</Text>
          <Text style={styles.heroSubtitle}>
            {isAdmin
              ? 'You are signed in as an admin. Manage protected app controls from here.'
              : 'You are signed in as a user. Browse your personalized app experience.'}
          </Text>

          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Profile')}
            style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              {isAdmin ? 'View Admin Profile' : 'View Profile'}
            </Text>
          </Pressable>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Profile')}
          style={styles.infoRow}>
          <View style={styles.infoIconBox}>
            <Icon
              name={icons.app.shield}
              color={colors.primary}
              size={25}
              iconStyle="solid"
            />
          </View>
          <View style={styles.infoCopy}>
            <Text style={styles.infoTitle}>
              {isAdmin ? 'Admin Protected' : 'Secure & Protected'}
            </Text>
            <Text style={styles.infoSubtitle}>
              {isAdmin ? 'Role-based access is active.' : 'Your data is safe with us.'}
            </Text>
          </View>
          <Icon
            name={icons.app.chevronRight}
            color={colors.textMuted}
            size={21}
            iconStyle="solid"
          />
        </Pressable>
      </ScrollView>

      <View style={styles.tabBarWrap}>
        <AppTabBar
          activeRoute="Home"
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
    paddingTop: 34,
    paddingBottom: 138,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 44,
  },
  greeting: {
    flex: 1,
    paddingRight: 18,
  },
  welcome: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  name: {
    color: colors.text,
    fontSize: 39,
    fontWeight: '900',
    marginTop: 4,
  },
  roleBadge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: colors.primarySoft,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  roleBadgeText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  avatar: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: colors.primaryGlow,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '900',
  },
  heroCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderSoft,
    borderRadius: 20,
    backgroundColor: colors.surface,
    paddingHorizontal: 24,
    paddingTop: 52,
    paddingBottom: 48,
    shadowColor: colors.shadowNeutral,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  },
  heroIconCircle: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: colors.primaryGlow,
    marginBottom: 34,
  },
  heroTitle: {
    color: colors.textStrong,
    fontSize: 29,
    fontWeight: '900',
    textAlign: 'center',
  },
  heroSubtitle: {
    maxWidth: 300,
    color: colors.textMuted,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    marginTop: 22,
    textAlign: 'center',
  },
  primaryButton: {
    width: '78%',
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: colors.primary,
    marginTop: 42,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 7,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 21,
    fontWeight: '800',
  },
  infoRow: {
    minHeight: 100,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderSoft,
    borderRadius: 18,
    backgroundColor: colors.surface,
    gap: 18,
    marginTop: 28,
    paddingHorizontal: 18,
    shadowColor: colors.shadowNeutral,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 4,
  },
  infoIconBox: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: colors.primaryGlow,
  },
  infoCopy: {
    flex: 1,
  },
  infoTitle: {
    color: colors.textStrong,
    fontSize: 18,
    fontWeight: '900',
  },
  infoSubtitle: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
  },
  tabBarWrap: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 22,
  },
});
