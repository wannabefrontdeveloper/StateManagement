import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import {UseSelector, useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';

function AuthStatus() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  return (
    <View>
      <Button title="로그인" onPress={() => {}} />
      <Button title="로그아웃" onPress={() => {}} />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  status: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
});

export default AuthApp;
