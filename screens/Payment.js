import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput, ImageBackground} from "react-native";
import * as React from 'react';


function PaymentOptions({ navigation }) {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
            <ImageBackground
              source={require('../images/payment/1.jpeg')} 
              style={styles.image}>
             <Image  source={require('../images/payment/less.png')}
                   style={{height:20,width:20,left:"8%",marginTop: 10,}}/>
             <Text style={styles.text}>Payment </Text>
             <Text style={styles.text1}>Method</Text>
             </ImageBackground>
             </View>  

             <Text style={{left:"6%",fontSize:20,top:10,
             }}>Cards</Text>  


             <View style={styles.balance}>
            <Image  source={require('../images/payment/6.png')} 
            style={{height:32,width:32,left:"10%",backgroundColor:'white',}}/>
            <Text style={{fontSize:15,left:22,top:0}}>{'Credit, Debit & ATM Cards '}</Text>
             </View>   

              <Text style={{left:"6%",fontSize:20,top:10,
             }}>UPI</Text> 

             <View style={styles.balance2}>
                 <View style={styles.inner}>
                 <Image  source={require('../images/payment/4.png')}
                  style={{height:20,width:20,left:"10%",backgroundColor:'white',}}/>
                 <Text style={{fontSize:15,left:22,top:1}}>{'Paytm UPI '}</Text>
                 </View>

                 <View style={styles.inner}>
                 <Image  source={require('../images/payment/3.png')}
                   style={{height:20,width:20,left:"10%"}}/>
                 <Text style={{fontSize:15,left:22,top:1}}>{'Google Pay '}</Text>
                     
                </View>

                <View style={styles.inner}>
                <Image  source={require('../images/payment/5.png')}
                style={{height:20,width:20,left:"10%"}}/>
                 <Text style={{fontSize:15,left:22,top:1}}>{'Pay via UPI '}</Text>
                     
                </View>
               
             </View> 

              <Text style={{left:"6%",fontSize:20,top:10,
              shadowOffset:{  width: 20,  height: 20,  },
              shadowColor: 'black',
              shadowOpacity: 0.5  
            }}>Wallets</Text>  


             <View style={styles.balance3}>
             <View style={styles.inner}>
                 <Image  source={require('../images/payment/1.png')}
                  style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:15,left:22,top:0}}>{'Mobikwik '}</Text>
                     
                </View>

                <View style={styles.inner2}>
                <Image  source={require('../images/payment/2.png')} style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:15,left:22,top:0}}>{'Freecharge '}</Text>
                     
                </View>
             </View>
                                              
        </View>
    )
}


export default PaymentOptions;



const styles=StyleSheet.create({
    container:{
       
        flex:1,
        
    },
    header:{
        width:"100%",
        height:"25%",
        backgroundColor:"red",
      
   },
   image:{
       height:150,
       width:"100%",
      
   },
   text:{
       color:"white",
       fontSize:30,
       fontWeight:"bold",
       marginTop: 20,
       marginLeft: 15,
      },


text1:{
    color:"white",
    fontSize:30,
    fontWeight:"bold",
    marginTop: 0,
    marginLeft: 15,
    
},
   balance:{
    height:"8%",
    width:"90%",
    left:"3%",
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20,
    flexDirection:"row",
    alignItems:"center"
 },
 balance2:{
    height:"13%",
    width:"90%",
    left:"5%",
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20
 },
 balance3:{
    height:"10%",
    width:"90%",
    left:"5%",
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20
 },
 inner:{
     height:"35%",
     width:"90%",
     left:"5%",
    // alignItems:"center",
     flexDirection:"row"
 },
 inner2:{
    height:"30%",
    width:"90%",
    left:"5%",
    alignItems:"center",
  //  display:"flex",
    flexDirection:"row",
    top:10
}
});