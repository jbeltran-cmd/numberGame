import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;


const styles = StyleSheet.create({

  instructionText: {
    fontSize: 16,
    color: "white",
    fontFamily: "open-sans",

    },
});