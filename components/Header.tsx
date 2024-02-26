import { View, Text } from 'react-native'
import React from 'react'

export default function Header({title}:any) {
  return (
    <View className=' w-full h-24 justify-center items-center  bg-green-500 '>
      <Text className='text-white  text-xl font-semibold justify-center items-center mt-2'>{title}</Text>
    </View>
  )
}