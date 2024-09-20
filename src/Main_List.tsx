import { SafeAreaView, StyleSheet, Text } from "react-native";

function Main_List(): JSX.Element {
  console.log("--Main_List()");

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Main_List</Text>
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

export default Main_List;
