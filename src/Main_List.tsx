/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

function Main_List(): JSX.Element {
  console.log('--Main_List()');

  const [callList, setCallList] = useState([]);

  const requestCallList = () => {
    let tmp: any = [];
    for (var i = 0; i < 10; i++) {
      let row = {
        id: i,
        start_addr: '출발주소',
        end_addr: '도착주소',
        call_state: 'REQ',
      };
      tmp.push(row);
    }
  };

  const Header = () => (
    <View style={styles.header}>
      <Text style={[styles.headerText, {width: wp(80)}]}>출발지 / 도착지</Text>
      <Text style={[styles.headerText, {width: wp(20)}]}>상태</Text>
    </View>
  );

  const ListItem = (row: {
    item: {start_addr: string; end_addr: string; call_state: string};
  }) => {
    console.log('row = ' + JSON.stringify(row));

    useFocusEffect(
      React.useCallback(() => {
        requestCallList();
      }, []),
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={callList}
          ListHeaderComponent={Header}
          renderItem={ListItem}
          keyExtractor={(item: any) => item.id}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    button: {
      width: '70%',
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    header: {
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      backgroundColor: '#3498db',
      color: 'white',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },
    textForm: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#3498db',
      height: hp(5),
      paddingLeft: 10,
      paddingRight: 10,
    },
  });
}

export default Main_List;
