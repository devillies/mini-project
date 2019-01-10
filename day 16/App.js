import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { blue } from "ansi-colors";

import Mata from "../assets/images/tool-wallpapers-30589-6887446.jpg";

export default class App extends React.Component {
  state = {
    value: ""
  };
  _onChange = text => this.setState({ value: text });

  render() {
    let { value } = this.state;
    let pictProps = {
      source: {
        uri:
          "https://media.tenor.com/images/a3cb77cffb334fedcf342d54716a2b56/tenor.gif"
      },
      defaultSource: { Mata }
    };
    return (
      <View style={styles.container}>
        <Image {...pictProps} style={[styles.image, styles.borderRadius]} />
        <Text style={styles.name}>It's A Trap</Text>
        <TextInput
          style={[styles.input, styles.borderRadius]}
          value={value}
          onChangeText={this._onChange}
          placeholder="update your status"
        />
        <View style={styles.textbox}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 200
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 3
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 30,
    fontSize: 20,
    paddingHorizontal: 15
  },
  text: {
    paddingHorizontal: 10,
    marginTop: 15,
    color: "black",
    fontSize: 20
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    color: "black"
  },
  textbox: {
    alignSelf: "stretch",
    height: 100,
    margin: 15,
    borderWidth: 1
  }
});
// AppRegistry.registerComponent("reactProject", () => App);
