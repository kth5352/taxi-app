import { SafeAreaView, StyleSheet, Text } from "react-native";

function Login(): JSX.Element {
  console.log("--Login()");

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Login</Text>
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

export default Login;
