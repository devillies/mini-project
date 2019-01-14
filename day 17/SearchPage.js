import React from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native'

export default class SearchPage extends React.Component {
  state = {
    value: '',
    images: []
  }
  async _fetching() {
    let url = `https://api.imgur.com/3/gallery/search/?q=${this.state.value}`
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'Application/json',
        Authorization: 'Client-ID 58c3cf18cbe8561'
      }
    })
    let data = await res.json()
    let linkList = []
    for (let image of data.data) {
      linkList.push(image.link)
    }
    console.log(linkList)
    this.setState({ images: linkList })
  }
  _onPress = () => {
    console.log('kepencet')
    this._fetching()
  }
  _onChange = text => this.setState({ value: text })

  render() {
    let { value, images } = this.state
    let { navigateTo } = this.props
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigateTo('Home')}>
          <View style={[styles.navigation, styles.borderRadius]}>
            <Text style={styles.navigationText}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
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
            )
          })}
        </ScrollView>
      </View>
    )
  }
}
let styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 200
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  press: {
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  pressText: {
    fontSize: 40,
    color: 'white'
  },
  textbox: {
    flex: 1,
    alignSelf: 'stretch',
    height: 100,
    margin: 15,
    borderWidth: 1
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 30,
    fontSize: 20,
    paddingHorizontal: 15
  },
  navigation: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'rgb(46,98,212)'
  },

  navigationText: {
    fontSize: 20,
    color: 'white'
  }
})
