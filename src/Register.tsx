import { SafeAreaView, StyleSheet, Text } from "react-native";

function Register(): JSX.Element {
  console.log("--Register()");

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Register</Text>
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

export default Register;
