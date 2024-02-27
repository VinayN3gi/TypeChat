import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig'
import Header from '../components/Header'
import Ionicons from '@expo/vector-icons/Ionicons';
import { collection, addDoc, Timestamp, serverTimestamp, getDoc, getDocs, orderBy, query } from "firebase/firestore"; 
export default function Message() {
    type Data={
        id:number,
        message:string
    }

    type retriveData={
      id:string,
      message:string,
      key:number
    }

    const dummyData:Data[]=[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"Okay"},{id:4,message:"How are you"}]
    const [message,setMessage]=useState<string>("")
    const [retrive,setRetrive]=useState<retriveData[]>([]);
    const ref=collection(db,"messages");
    const q=query(ref,orderBy("time"))

    useEffect(()=>{
      const retrive=async function():Promise<void>
      {
        const value:retriveData[]=[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const id=doc.data().id
          const message=doc.data().message
          const key=doc.data().key
          value.push({id:id,message:message,key:key})
        });
        console.log(value)
        setRetrive(value)
      }
      retrive();
    },[message])


    const render=function(item:retriveData):any
    {
        
        if(item.id!==auth.currentUser?.uid)
        {
            return(
                <View key={item.key} className=' bg-green-300  w-40  h-16 rounded-full items-center justify-center mt-2' style={{position:'relative', alignSelf:"flex-start"}}>
                    <Text className='text-center text-white text-lg '>{item.message}</Text>
                </View>
            )
        }
        else{
            return(
                <View key={item.key} className=' bg-green-500 w-40 h-16 rounded-full items-center justify-center mt-2' style={{position:"relative",alignSelf:"flex-end"}}>
                    <Text className='text-white text-lg'>{item.message}</Text>
                </View>
            )
        }
    }

    const send=async function():Promise<void>
    {    
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          message:message,
          time:serverTimestamp(),
          id:auth.currentUser?.uid,
          key:Math.random()*10000000,
        });

        setMessage("")
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  return (
    <View className='flex-1'>
      <Header title="Messages"/>
      <View className='flex-1'>
        <FlatList data={retrive} renderItem={({item})=>render(item)}/>
      </View>
      <View className=' h-12 flex-row mb-1'>
        <View className='flex-1 mt-4 w-full pb-1'>
            <TextInput onChangeText={(text)=>setMessage(text)} value={message} placeholder='Enter message' className='text-xl'/>    
        </View>
        <TouchableOpacity className='mt-4' onPress={send}>
        <Ionicons name="send" size={28} color="green"/>    
        </TouchableOpacity>
      </View>
    </View>
  )
}