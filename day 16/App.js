import React from "react";
import { StyleSheet, Image, View, Text, TextInput } from "react-native";
import { blue } from "ansi-colors";

export default class App extends React.Component {
  state = {
    value: ""
  };
  _onChange = text => this.setState({ value: text });

  render() {
    let { value } = this.state;
    let pic = {
      url:
        "https://lh3.googleusercontent.com/rlU_KV1eeCs_bOPdWZ7JnJXB64TpS-gw7OOsYpd2KSvnMWBT7AIy4XHFvryYotQnEWpbTq_h5OArQPSTQOFzpXYrOT_fgxN9_9LmEzSDWTsDruUW9DojBw9qN46WXVZ1tBC0aDrNXoTDWPym2i8T5KPUTRUXNxApDofEY5dxMFHXjrvPzZIsMOL03rMZ0tRRNbPmczW01yJx_sMOuoJkuknLajgm1ntOzBp3T1rRhOdsOd3oEWYZrRrsFJr0vsF3AFLwguWKqzJcV2ALRxS-EYJH4i608-7pEgX-MFmmnnxFb7ViJAYiWwOLeHjl_-ZB0JdnGgB0Sv-abzrFxkJszKqVod0J3QUjrDIZxrUuA2543jdU3CLbS86KMpxB0BMdLKMgRNhVTCB4gaoshli0PhX0KU4wR86X4IZoBZ65PDn1cSPfgjF54CM2nzSZtNUDZKTaQJmthkHgid0yyXiwROUO-FDcAM_XDdwhwQmMh1hE5Gy7ekmpoJOWKh7mE3kgrTDy4FNDaeVzIlMZEtMdfompNO6dNJrWaMsPmvuSeYSHUwRXvCl86DB4US5IP3iCSB4jKse30ErIZy6hwI1MyGLgGkJYd0RYv_FH85V5-YpwST_w8r0FCidQ85zlny7YHxikTV45iRvowWubhg7WYmZG=w1450-h1076-no"
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={[styles.image, styles.borderRadius]} />
        <TextInput
          style={[styles.input, styles.borderRadius]}
          value={value}
          onChangeText={this._onChange}
          placeholder="i see dead people"
        />
        <Text style={styles.text}>{value}</Text>
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
    width: 200,
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 30,
    fontSize: 20,
    paddingHorizontal: 15
  },
  text: {
    color: "black",
    fontSize: 20
  }
});
// AppRegistry.registerComponent("reactProject", () => App);
