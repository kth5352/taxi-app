/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useNavigation, ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

function Intro(): JSX.Element {
  console.log('--Intro()');

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        let isAutoLogin = false;
        if (isAutoLogin) {
          navigation.push('Main');
        } else {
          navigation.push('Login');
        }
      }, 2000);
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="taxi" size={100} color={'#3498db'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;
