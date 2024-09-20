import { SafeAreaView, StyleSheet, Text } from "react-native";

function Main_Map(): JSX.Element {
  console.log("--Main_Map()");

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Main_Map</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 18,
    color: "black",
  },
  textBlue: {
    fontSize: 18,
    color: "blue",
  },
});

export default Main_Map;
