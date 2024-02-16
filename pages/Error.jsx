import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function ErrorPage() {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an error (replace with your actual error handling logic)
    const simulateError = () => {
      const random = Math.random();
      if (random < 0.5) {
        setError(new Error('An unexpected error occurred.'));
      }
    };

    simulateError();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Oops!</Text>
      <Text style={{ textAlign: 'center' }}>
        Sorry, an unexpected error has occurred.
      </Text>
      {error && (
        <Text style={{ marginTop: 10 }}>
          <i>{error.message}</i>
        </Text>
      )}
    </View>
  );
}