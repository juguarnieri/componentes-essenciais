import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A natureza é o único livro que oferece um conteúdo valioso em todas as suas folhas.</Text>
      <Text style={styles.author}>Johann Goethe</Text>
      <Text style={styles.ask}>Reflita sobre a natureza!</Text>
      <Image source={require('./public/nature.png')} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00796b',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: 'red',
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  ask: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
});

