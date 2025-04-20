import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My App</Text>
        <Text style={styles.subtitle}>Your productivity starts here</Text>
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>Sign in to access your notes</Text>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Google Sign-In Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Continue with Google"
          onPress={() => console.log('Google Sign-In functionality')}
          color="#4285F4" // Google Blue
        />
      </View>

      {/* Facebook Sign-In Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Continue with Facebook"
          onPress={() => console.log('Facebook Sign-In functionality')}
          color="#1877F2" // Facebook Blue
        />
      </View>

      {/* Spacer to push buttons to the bottom */}
      <View style={styles.spacerBottom} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Push buttons to the bottom
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 5,
  },
  tagline: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: '#333',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  spacer: {
    flex: 1, // Push the buttons to the bottom
  },
  spacerBottom: {
    height: 20, // Just add some extra space at the bottom
  },
});
