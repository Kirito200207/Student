import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BrightMagazine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Журнал Bright</Text>
      <Text style={styles.subHeader}>Новости</Text>

      <Text style={styles.title}>Превращаем стресс в своего помощника</Text>

      <Image
        source={{ uri: 'https://via.placeholder.com/300' }} // 你可以替换为实际图片URL
        style={styles.image}
      />

      <Text style={styles.content}>
        Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
      </Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Читать далее</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BrightMagazine;