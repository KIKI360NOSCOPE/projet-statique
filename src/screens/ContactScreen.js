import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ContactComponent from '../components/ContactComponent'

export default class ContactScreen extends Component {
  render() {
    return (
      <View>
        <ContactComponent />
      </View>
    )
  }
}