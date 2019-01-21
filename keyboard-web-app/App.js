// @flow
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native-web";
type Props = {};
type State = {
  text: string,
  keyvalue: ?string
};
class App extends React.Component<Props, State> {
  state = {
    text: "",
    keyvalue: null
  };
  componentDidMount() {
    //component mount
    document.addEventListener("keydown", this._onKeyDown);
    document.addEventListener("keyup", this._onKeyUp);
  }
  componentWillUnmount() {
    //component unmount
    document.removeEventListener("keydown", this._onKeyDown);
    document.removeEventListener("keyup", this._onKeyUp);
  }

  _setValue = (text: string, keyvalue: string) => {
    //shortcut to set state
    this.setState({
      text,
      keyvalue
    });
  };

  _onKeyDown = (event: { key: string }) => {
    // console.log(event.key);
    let { text } = this.state;
    let { key } = event;

    switch (key) {
      case "Backspace": {
        this._setValue(text.slice(0, -1), key);
        return;
      }
      default: {
        this._setValue(text + key, key);
        return;
      }
    }
    // if (event.key && event.key !== "Backspace") {
    //   let { key } = event;
    //   this.setState({
    //     text: text + key,
    //     keyvalue: key
    //   });
    // } else {
    //   let { key } = event;
    //   this.setState({
    //     text: text.slice(0, -1),
    //     keyvalue: key
    //   });
    // }
  };

  _onKeyUp = () => {
    // null the value on keyup
    this.setState({ keyvalue: null });
  };

  render() {
    let { keyvalue, text } = this.state;
    let row = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m"
    ];

    return (
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 1,
            alignSelf: "stretch"
          }}
        >
          <Text style={{ alignSelf: "center" }}> {text}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            maxWidth: 558,
            flexWrap: "wrap"
          }}
        >
          {row.map(key =>
            keyvalue === key ? (
              <TouchableOpacity key={key}>
                <View
                  style={{
                    borderWidth: 1,
                    height: 35,
                    width: 60,
                    margin: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "red",
                    borderRadius: 5
                  }}
                >
                  <Text style={{ color: "white" }}>{key}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={key}>
                <View
                  style={{
                    borderWidth: 1,
                    height: 35,
                    width: 60,
                    margin: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                    borderRadius: 5
                  }}
                >
                  <Text style={{ color: "white" }}>{key}</Text>
                </View>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 20
  }
});

export default App;
