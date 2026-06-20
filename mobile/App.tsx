import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.container} testID="app-root">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text style={styles.title}>ProductAuthentication</Text>
      <Text style={styles.message}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  title: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  message: {
    color: '#374151',
    fontSize: 18,
  },
});

export default App;
