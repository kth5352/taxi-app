import { SafeAreaView, StyleSheet, Text } from "react-native";

function Main_Setting(): JSX.Element {
  console.log("--Main_Setting()");

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Main_Setting</Text>
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

export default Main_Setting;
