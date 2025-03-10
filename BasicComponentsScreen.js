import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';

const HealthArticleScreen = () => {
  const handleReadMore = () => {
    Alert.alert('Info', 'You clicked the "Read More" button!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 标题 */}
      <Text style={styles.title}>Turning Stress into Your Ally</Text>

      {/* 图片 */}
      <Image
        source={{ uri: 'https://res.cloudinary.com/ekincare/image/upload/t_blog-large-img/v1654776811/rhulgws8mslk6nqidsvi.png' }}
        style={styles.image}
      />

      {/* 正文 */}
      <Text style={styles.content}>
        Researchers from Yale University suggest that people who view stress as an opportunity for personal growth report an improvement in their quality of life. Today, we explore how this works and how to see the positive sides of stress.
      </Text>

      {/* 按钮 */}
      <View style={styles.buttonContainer}>
        <Button
          title="Read More"
          onPress={handleReadMore}
          color="#007BFF"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HealthArticleScreen;