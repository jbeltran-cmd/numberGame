import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent1,
    borderRadius: 8,
    padding: deviceWidth  < 350 ? 12 : 24,
    margin: deviceWidth  < 350 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  numberText: {
    color: Colors.text1,
    fontSize: deviceWidth  < 350 ? 24 : 36,
    fontFamily: "open-sans-bold",
  },
});
