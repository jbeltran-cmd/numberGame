import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    color: "white",
    textAlign: "center",
    borderColor: Colors.accent1,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 4 }),
    borderRadius: 4,
    padding: 10,
    maxWidth: "80%",
    width: 300,
  },
});
