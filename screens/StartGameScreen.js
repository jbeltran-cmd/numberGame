import {  useState } from "react";
import { StyleSheet, TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const {width, height } = useWindowDimensions();  

  function NumberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 90", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 400 ? 40 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
      <Title>Guess My Number!</Title>
      <Card>
        <InstructionText >Enter a Number</InstructionText>
      <TextInput
        maxLength={2}
        style={styles.inputBox}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={NumberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
  );
}

export default StartGameScreen;

//const deviceWidth = Dimensions.get("window").width;
//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  inputBox: {
    height: 60,
    width: 70,
    fontSize: 32,
    textAlign: "center",
    borderBottomColor: Colors.accent1,
    borderBottomWidth: 4,
    backgroundColor: "white",
    borderRadius: 4,
    marginVertical: 8,
    fontWeight: "bold",
  },
});
