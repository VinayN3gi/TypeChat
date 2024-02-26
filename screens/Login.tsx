import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Entrypo from '@expo/vector-icons/Entypo';
import { app, auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const signIn=function():void
  {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    setEmail("");
    setPassword("");
    // ...
  })
  .catch((error:any) => {
    
    alert(error)
    // ..
  });
  }

  return (
    <View className="justify-center items-center ">
      <Header title="Log In"/>
      <View className=' mt-32 justify-center items-center mb-18 '>
      <Entrypo name="chat" size={100} color="green"/>
    </View>
    <View className=' w-80 h-52 items-center'>
    <Text className=' justify-center items-center mt-6 text-2xl text-green-500 font-semibold text-center'>Enter email</Text>
    <TextInput value={email} onChangeText={(text)=>setEmail(text)} className=' text-2xl mt-1' placeholder='Email'/>
    <Text className=' justify-center items-center mt-6 text-center text-2xl text-green-500 font-semibold'>Enter password</Text>
    <TextInput value={password} onChangeText={(text)=>setPassword(text)} className=' text-2xl mt-1' placeholder='Password'/>
    </View>
    <TouchableOpacity onPress={signIn} className='mt-10 w-40 h-12 justify-center items-center bg-green-600 rounded-xl'>
      <Text className='text-white text-lg text-center '>Log In</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Login