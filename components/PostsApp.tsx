import React from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, View, } from 'react-native';

function PostsApp() {
  const data = [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'World'},
  ];

  return (
    <SafeAreaView style = {styles.block}>
      {data ? (
        <FlatList 
        style={styles.list}
        data={data}
        renderItem = {({item}) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        />
      ): (
        <ActivityIndicator size="large" color="block" style={styles.loading} />
      )}
      <Button title="새로고침" onPress={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  list: {flex: 1},
  item: {padding: 8},
  separator: {height: 1, backgroundColor: 'black'},
});

export default PostsApp;
