import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 标题 */}
      <Text style={styles.header}>Журнал Bright</Text>
      <Text style={styles.subHeader}>Новости</Text>

      {/* 文章标题 */}
      <Text style={styles.title}>Превращаем стресс в своего помощника</Text>

      {/* 图片 */}
      <Image
        source={{ uri: 'http://brightmagazine.ru/wp-content/uploads/2020/11/pexels-andrea-piacquadio-3839098.jpg' }} // 替换为实际图片URL
        style={styles.image}
      />

      {/* 正文 */}
      <Text style={styles.content}>
        Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
      </Text>

      {/* 阅读更多按钮 */}
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Читать далее</Text>
      </View>
    </ScrollView>
  );
}

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
    color: 'blue',
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