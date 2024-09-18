import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à minha página!</Text>
      
      <TouchableOpacity style={styles.button}>
        <Link href="/navegacao/info" style={styles.linkText}>Sobre mim</Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href="/navegacao/contact" style={styles.linkText}>Contato</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  title: {
    fontSize: 32,  
    fontWeight: 'bold',
    color: '#6200ea',  
    marginBottom: 20,
    textAlign: 'center',  
    textShadowColor: '#aaa',  
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  button: {
    backgroundColor: '#6200ea', 
    width: 200,                 
    paddingVertical: 12,        
    paddingHorizontal: 20,      
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', 
  },
});

export default Index;
