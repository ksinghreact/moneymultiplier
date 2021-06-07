import { View,StyleSheet,Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import * as React from 'react';


export default function Signin({navigation}){
return(
    
        <View >
        <ImageBackground
         source={require('../images/ns2.jpg')} 
         style={{height:"100%",width:"100%",}} />

        <View 
        style={{height:250,width:257,backgroundColor:"white",position:"absolute",marginLeft:52,marginTop:200}}>

            <Image 
            source={require('../images/ll.jpeg')} 
            style={{height:"15%",width:"50%",marginLeft:"25%"}}/>


            <TextInput
             placeholder="Phone Number"
              style={Style.textstyle}/>


        <TextInput 
          placeholder="Email id" 
          style={Style.textstyle}/>


        <TextInput
          placeholder="Password"
           style={Style.textstyle}/>


        <TextInput
         placeholder="Conform Password" 
         style={Style.textstyle}/>


        <TextInput
         placeholder="Reedem Code"
          style={Style.textstyle}/>

       
        <TouchableOpacity style={Style.button} >
        <Text style={{color:'white', fontSize:15,}}>Sign Up</Text>
      </TouchableOpacity>


        <Text style={{marginTop:60,fontSize:13,marginLeft:50, flexDirection:'row'}} 
        >Already have account? 
        <TouchableOpacity  
        onPress={() => navigation.navigate('Login')}>
        <Text style={{fontWeight:'bold',}}>Login</Text></TouchableOpacity>
        </Text>
       
        </View>
        </View>
       
      
)
}

var Style=StyleSheet.create({
    container:{
        display:"flex",
        backgroundColor:"#4E59E1",
        alignItems:"center",
        justifyContent:"center",

    },
    sform:{
        height:40,
        width:80,
        position:"relative",
       display:"flex",
        marginTop:200,
        borderRadius:10,
        backgroundColor:"#F8F9FB"

    },
    button: {
        alignItems: "center",
        backgroundColor:"#F8994F",
        position:"absolute",
        borderRadius:5,
        marginTop:270,
        marginLeft:95,
        padding: 10
      },
      countContainer: {
        alignItems: "center",
        padding: 10
      },

      textstyle:{

        borderBottomWidth:0.5,
        color:"grey",
        borderBottomColor:"#787674",
        marginTop:13,
      },
})