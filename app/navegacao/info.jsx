import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>👨‍💻</Text> {/* Emoji inserido aqui */}
      </View>
      
      <Text style={styles.title}>Lucas Borges</Text>
      <Text style={styles.subtitle}>Desenvolvedor Mobile</Text>
      
      <View style={styles.textBox}>
        <Text style={styles.description}>
          Olá! Sonho em trabalhar com desenvolvimento mobile e estou aprendendo e aprimorando o que sei sobre React Native. Busco sempre criar aplicativos com designs modernos, funcionais e intuitivos.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  emojiContainer: {
    marginBottom: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  emoji: {
    fontSize: 100, // Tamanho do emoji
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  textBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    maxWidth: '90%',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Sobre;
