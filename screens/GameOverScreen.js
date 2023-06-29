import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let content = (
    <>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={style.summaryText}>
          Your phone needed <Text style={style.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={style.highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>NEW GAME</PrimaryButton>
    </>
  );

  if (width > 500) {
    content = (
      <><View style={style.landscape}>
        <PrimaryButton onPress={onStartNewGame}>NEW GAME</PrimaryButton>
        <View style={style.imageContainerWide}>
          <Image
            style={style.image}
            source={require("../assets/images/success.png")}
          />
        </View><Text style={style.summaryTextWide}>
          Your phone needed <Text style={style.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={style.highlight}>{userNumber}</Text>.
        </Text></View>
      </>
    );
  }

  return (
    <View style={style.rootContainer}>
      <Title>Game Over!</Title>
      {content}
    </View>
  );
}

export default GameOverScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent1,
    overflow: "hidden",
    margin: 36,
  },
  imageContainerWide: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent1,
    overflow: "hidden",
    margin: 6,
  },
  landscape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",},
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
  },
  summaryTextWide: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
    width: "20%",
  },
  highlight: {
    color: Colors.accent1,
    fontFamily: "open-sans-bold",
  },
});
