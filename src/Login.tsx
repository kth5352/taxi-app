/* eslint-disable react/react-in-jsx-scope */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login(): JSX.Element {
  console.log('--Login()');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [disable, setDisable] = useState(true);

  const onIdChange = (newId: string) => {
    newId && userPw ? setDisable(false) : setDisable(true);
    setUserId(newId);
  };

  const onPwChange = (newPw: string) => {
    newPw && userId ? setDisable(false) : setDisable(true);
    setUserPw(newPw);
  };

  const gotoRegister = () => {
    navigation.push('Register');
  };

  const gotoMain = () => {
    AsyncStorage.setItem('userId', userId).then(() => {
      navigation.push('Main');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Icon name="taxi" size={80} color={'#3498db'} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'아이디'}
          onChangeText={onIdChange}
        />
        <TextInput
          style={styles.input}
          placeholder={'비밀번호'}
          secureTextEntry={true}
          onChangeText={onPwChange}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={disable ? styles.buttonDisable : styles.button}
          disabled={disable}
          onPress={gotoMain}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginTop: 5}]}
          onPress={gotoRegister}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  buttonDisable: {
    width: '70%',
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Login;
