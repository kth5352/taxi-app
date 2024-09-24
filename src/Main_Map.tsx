/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function Main_Map(): JSX.Element {
  console.log('--Main_Map()');

  const [showBtn, setShowBtn] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.5666612,
    longitude: 126.9783785,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleLongPress = (event: any) => {
    setShowBtn(true);
    // 선택한 위치의 좌표를 저장하거나 처리할 수 있습니다.
  };

  const handleAddMarker = (type: string) => {
    // 현재 선택한 위치의 좌표를 가져와서 마커 추가
    // 예시로 임의의 좌표를 사용합니다.
    const coordinate = {
      latitude: 37.5665,
      longitude: 126.978,
    };
    setMarkers([...markers, {type, coordinate}]);
    setShowBtn(false);
  };

  const handleMyLocationPress = () => {
    // 위치 권한 요청 및 현재 위치 가져오기 로직 구현
  };

  const [marker1, setMarker1] = useState({latitude: 0, longitude: 0});
  const [marker2, setMarker2] = useState({latitude: 0, longitude: 0});

  const onSeleCtAddr = (data: any, details: any, type: string) => {
    if (details) {
      let lat = details.geometry.location.lat;
      let lng = details.geometry.location.lng;

      if (type === 'start') {
        setMarker1({latitude: lat, longitude: lng});
        if (marker2.longitude === 0) {
          setInitialRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0073,
            longitudeDelta: 0.0064,
          });
        }
      } else {
        setMarker2({latitude: lat, longitude: lng});
        if (marker1.longitude === 0) {
          setInitialRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0073,
            longitudeDelta: 0.0064,
          });
        }
      }
    }
  };

  const query = {
    key: 'APIKEY',
    language: 'ko',
    components: 'country:kr',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 지도 */}
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        region={initialRegion}
        onLongPress={handleLongPress}>
        {/* 마커 렌더링 */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.type}
          />
        ))}
      </MapView>

      {/* 지도 위에 얹을 컴포넌트들 */}
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        {/* 출발지 / 도착지 입력 박스, 호출버튼 */}
        <View
          style={{
            position: 'absolute',
            top: 10,
            width: '100%',
            paddingHorizontal: wp(2),
          }}>
          <GooglePlacesAutocomplete
            minLength={2}
            placeholder="출발지 검색"
            query={query}
            keyboardShouldPersistTaps={'handled'}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onFail={error => console.log(error)}
            onNotFound={() => console.log('no results')}
            styles={autocompleteStyles}
          />
          <GooglePlacesAutocomplete
            minLength={2}
            placeholder="도착지 검색"
            query={query}
            keyboardShouldPersistTaps={'handled'}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onFail={error => console.log(error)}
            onNotFound={() => console.log('no results')}
            styles={autocompleteStyles}
          />
        </View>

        {/* 내 위치로 버튼 */}
        <TouchableOpacity
          style={{position: 'absolute', bottom: 20, right: 20}}
          onPress={handleMyLocationPress}>
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
              onPress={() => handleAddMarker('출발지')}>
              <Text style={styles.buttonText}>출발지로 등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {flex: 1}]}
              onPress={() => handleAddMarker('도착지')}>
              <Text style={styles.buttonText}>도착지로 등록</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const autocompleteStyles = {
  textInputContainer: {
    width: '100%',
    backgroundColor: '#e9e9e9',
    borderRadius: 8,
    height: 40,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    color: '#5d5d5d',
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
    zIndex: 1,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Main_Map;
