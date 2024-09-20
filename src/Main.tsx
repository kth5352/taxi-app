import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main_Map from './Main_Map';
import Main_List from './Main_List';
import Main_Setting from './Main_Setting';

function Main(): JSX.Element {
  console.log('--Main()');

  const BottomTab = createBottomTabNavigator();

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Main</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 18,
    color: 'black',
  },
  textBlue: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Main;
