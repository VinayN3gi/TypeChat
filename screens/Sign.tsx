import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Entrypo from '@expo/vector-icons/Entypo';
import { User, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function Sign({navigation}:any) {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const user:any|null=auth.currentUser
    const signIn=function():void{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
            console.log("Success")
        })
        navigation.navigate("Message")
        .catch((error:any) => {
            alert(error)
        });
    }

  return (
    <View className=' justify-center items-center'>
      <Header title="Sign In"/>
      <View className=' justify-center items-center  mt-12'>
      <Entrypo name="chat" size={90} color="green"/>
      </View>
      <View className=' w-80 h-52 items-center  mt-12 justify-center'>
        <Text className=' justify-center items-center mt-6 text-2xl text-green-500 font-semibold text-center'>Username</Text>
        <TextInput value={name} onChangeText={(text)=>setName(text)} className=' text-2xl mt-1' placeholder='Name'/>
        <Text className=' justify-center items-center mt-6 text-2xl text-green-500 font-semibold text-center'>Email</Text>
        <TextInput value={email} onChangeText={(text)=>setEmail(text)} className=' text-2xl mt-1' placeholder='Email'/>
        <Text className=' justify-center items-center mt-6 text-2xl text-green-500 font-semibold text-center'>Password</Text>
        <TextInput value={password} onChangeText={(text)=>setPassword(text)} className=' text-2xl mt-1' placeholder='Password'/>
       </View>  
       <View className='mt-10 justify-center items-center '>
       <TouchableOpacity onPress={signIn} className='mt-10 w-40 h-12 justify-center items-center bg-green-600 rounded-xl'>
        <Text className='text-white text-lg text-center '>Sign up</Text>
        </TouchableOpacity>
       </View>
    </View>

  )
}