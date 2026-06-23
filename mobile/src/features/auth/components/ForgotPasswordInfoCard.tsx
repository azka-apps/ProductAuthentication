import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';

export function ForgotPasswordInfoCard() {
  return (
    <View style={styles.container}>
      <Icon
        name={icons.auth.info}
        color={colors.primary}
        size={24}
        iconStyle="solid"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{authText.forgotPassword.infoTitle}</Text>
        <Text style={styles.description}>
          {authText.forgotPassword.infoDescription}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 18,
    borderRadius: 18,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
  content: {
    flex: 1,
    gap: 10,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  description: {
    color: colors.textStrong,
    fontSize: 15,
    lineHeight: 22,
  },
});
