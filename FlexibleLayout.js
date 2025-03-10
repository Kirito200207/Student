import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const FlexibleLayout = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 标题 */}
      <View style={styles.header}>
        <Text style={styles.title}>5 книжных новинок октября</Text>
      </View>

      {/* 内容 */}
      <View style={styles.content}>
        <Text style={styles.text}>
          «Кадиш.com» Натан Ингландер. Издательство «Книжники»
        </Text>
        <Text style={styles.text}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о 40 пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>
      </View>

      {/* 阅读更多按钮 */}
      <View style={styles.buttonContainer}>
        <Button
          title="Читать далее"
          onPress={() => alert('Читать далее')}
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default FlexibleLayout;