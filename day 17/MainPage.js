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
import Mata from '../assets/images/tool-wallpapers-30589-6887446.jpg'
class MainPage extends React.Component {
  render() {
    let { navigateTo } = this.props
    let pictProps = {
      source: {
        uri:
          'https://media.tenor.com/images/a3cb77cffb334fedcf342d54716a2b56/tenor.gif'
      },
      defaultSource: { Mata }
    }
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image {...pictProps} style={[styles.image, styles.borderRadius]} />
          <Text style={styles.name}>Search For Memes</Text>
          <TouchableWithoutFeedback onPress={() => navigateTo('Search')}>
            <View style={[styles.navigation, styles.borderRadius]}>
              <Text style={styles.navigationText}>SearchPage</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    )
  }
}

let styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  borderRadius: {
    borderRadius: 200
  },
  image: {
    width: 400,
    height: 200
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    paddingHorizontal: 10,
    marginTop: 15,
    color: 'black',
    fontSize: 20
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    color: 'black'
  },

  navigation: {
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'rgb(46,98,212)'
  },
  navigationText: {
    fontSize: 30,
    color: 'white'
  }
})

export default MainPage
