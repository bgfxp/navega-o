import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.email}>lucas_bc_silva@estudante.sesisenai.org.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#555',
  },
});

export default Contato;
