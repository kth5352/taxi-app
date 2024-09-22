/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Main_Map(): JSX.Element {
  console.log('--Main_Map()');

  const [showBtn, setShowBtn] = useState(false);

  const handleLongPress = async () => {
    setShowBtn(true);
  };

  const hanleAddMarker = async (event: any) => {
    setShowBtn(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 지도 */}
      <View style={[styles.container, {transform: [{scaleX: 1}, {scaleY: 2}]}]}>
        <Icon
          name="building"
          size={300}
          color={'#34db98'}
          onPress={() => {
            setShowBtn(false);
          }}
          onLongPress={handleLongPress}
        />
      </View>

      {/* 지도 위에 얹을 컴포넌트들 */}
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          padding: 10,
        }}>
        {/* 출발지 / 도착지 입력 박스, 호출버튼 */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TextInput style={styles.input} placeholder={'출발지'} />
            <TextInput style={styles.input} placeholder={'도착지'} />
          </View>
          <TouchableOpacity
            style={[styles.button, {marginLeft: 10, justifyContent: 'center'}]}>
            <Text style={styles.buttonText}>호출</Text>
          </TouchableOpacity>
        </View>

        {/* 내위치로 버튼 */}
        <TouchableOpacity
          style={[{position: 'absolute', bottom: 20, right: 20}]}>
          <Icon name="crosshairs" size={40} color={'#3498db'} />
        </TouchableOpacity>

        {/* 출발지 / 도착지 등록 버튼 팝업 */}
        {showBtn && (
          <View
            style={{
              position: 'absolute',
              top: hp(50) - 45,
              left: wp(50) - 75,
              height: 90,
              width: 150,
            }}>
            <TouchableOpacity
              style={[styles.button, {flex: 1, marginVertical: 1}]}
              onPress={() => hanleAddMarker('출발지')}>
              <Text style={styles.buttonText}>출발지로 등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {flex: 1}]}
              onPress={() => hanleAddMarker('출발지')}>
              <Text style={styles.buttonText}>도착지로 등록</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 1,
    padding: 10,
  },
  buttonDisable: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Main_Map;
