import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../firebaseConfig'
import Header from '../components/Header'

export default function Message() {
    console.log(auth.currentUser?.displayName)
  return (
    <View className='flex-1 bg-gray-300'>
      <Header title="Messages"/>
      <View className='flex-1 bg-red-400'>
        <Text>Hello</Text>
      </View>
      <View className=' h-16 flex-row'>
        <Text>Hi</Text>
      </View>
    </View>
  )
}