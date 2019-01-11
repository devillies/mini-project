import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

import Mata from "../assets/images/tool-wallpapers-30589-6887446.jpg";
export default class App extends React.Component {
  state = {
    value: "",
    images: []
  };
  async _fetching() {
    let url = `https://api.imgur.com/3/gallery/search/?q=${this.state.value}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
        Authorization: "Client-ID 58c3cf18cbe8561"
      }
    });
    let data = await res.json();
    let linkList = [];
    for (let image of data.data) {
      linkList.push(image.link);
    }
    console.log(linkList);
    this.setState({ images: linkList });
  }
  componentDidMount() {
    this._fetching();
  }

  _onChange = text => this.setState({ value: text });
  _onPress = () => this._fetching();

  render() {
    let { value, images } = this.state;
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
        <Text style={styles.name}>Search For Memes</Text>
        <TextInput
          style={[styles.input, styles.borderRadius]}
          value={value}
          onChangeText={this._onChange}
          placeholder="choose a project"
        />
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View style={[styles.press, styles.borderRadius]}>
            <Text style={styles.pressText}>Tap This</Text>
          </View>
        </TouchableWithoutFeedback>
        <ScrollView style={styles.textbox}>
          {images.map((url, index) => {
            return (
              <Image
                key={index}
                style={styles.searchedImage}
                source={{ uri: url }}
              />
            );
          })}
        </ScrollView>
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
    height: 200
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
    flex: 1,
    alignSelf: "stretch",
    height: 100,
    margin: 15,
    borderWidth: 1
  },
  press: {
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "blue"
  },
  pressText: {
    fontSize: 40,
    color: "white"
  },
  searchedImage: {
    height: 50,
    width: 50
  }
});
// AppRegistry.registerComponent("reactProject", () => App);
