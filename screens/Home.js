import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput, ImageBackground} from "react-native";
import * as React from 'react';


function Home({ navigation }) {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
            <ImageBackground
              source={require('../images/payment/Header.jpg')} 
              style={styles.image}>

              <View style={styles.div}>
              <Text style={styles.text}>Investment Record </Text>

              </View>
              <View style={styles.div2}>
              <View style={{flexDirection:'row'}}>
                  <View>
                  <Text style={{marginLeft:20,marginRight: 3,fontSize: 20,marginTop:20, color:'red',}}> Rs 0.00</Text>
            <Text style={{marginLeft:20,marginRight: 3,color:'grey',}}>Total Assets</Text></View>

                    <View>
                    <Text style={{marginLeft:20,marginRight: 3,fontSize: 20,marginTop:20, color:'green',}}>Rs 0.00</Text>
              <Text style={{marginLeft:20,marginRight: 3,color:'grey',}}>Total Income</Text></View>
                    
                    <View>
                    <Text style={{marginLeft:20,marginRight: 3,fontSize: 20,marginTop:20, color:'blue',}}> Rs 0.00</Text>
              <Text style={{marginLeft:20,marginRight: 3,color:'grey',}}>Transactions</Text></View>
                
                
              </View>
              </View>

              
              <View style={styles.div3}>
              <Text style={styles.text2}>91******9812 stb66 Web Order Revenue 2,000.38; </Text>
              </View>

              <View style={{flexDirection:'row'}}>
                  <ImageBackground source={require('../images/payment/Green.jpg')} 
              style={styles.image2}>
              <Text style={styles.text}>My Investment</Text></ImageBackground>

                  <ImageBackground source={require('../images/payment/Red.jpg')} 
              style={styles.image3}>
                  <Text style={styles.text}>Dividend Log</Text>
              </ImageBackground>
              </View>

              <Text style={styles.text3}> Investor's Status</Text>

              <View style={styles.div5}>
              <View style={{flexDirection:'row',}}>
              <Image source={require('../images/payment/User.png')} 
               style={styles.icon}/>
               <View style={{flexDirection:'column',}}>
              <Text style={{marginLeft:10, fontSize: 20,}}>john</Text>
              <View style={{flexDirection:'row',}}>
              <Text style={{marginLeft:2, fontSize: 13, marginLeft:10, color:'grey'}}>just invested, Mobile Phone</Text>
              <Text style={{marginLeft:2, fontSize: 13, marginLeft:25,}}>123******78</Text>
              </View>
                  </View>
              </View>

              <View style={{flexDirection:'row',}}>
              <Image source={require('../images/payment/User.png')} 
               style={styles.icon}/>
               <View style={{flexDirection:'column',}}>
              <Text style={{marginLeft:10, fontSize: 20,}}>Deepti</Text>
              <View style={{flexDirection:'row',}}>
              <Text style={{marginLeft:2, fontSize: 13, marginLeft:10, color:'grey'}}>just invested, Mobile Phone</Text>
              <Text style={{marginLeft:2, fontSize: 13, marginLeft:25,}}>123******78</Text>
              </View>
                  </View>
              </View>


             
            
              </View>

              <View style={styles.div4}>
              <View style={{flexDirection:'row'}}>
                  <View>
                  <Image source={require('../images/payment/Home.png')} 
              style={styles.icon}/>
            <Text style={{marginLeft:30,marginRight: 13,}}>Home</Text></View>

                    <View>
                  <Image source={require('../images/payment/Invest.png')} 
               style={styles.icon}/>
              <Text style={{marginLeft:20,marginRight: 13,}}>Investment</Text></View>
                    
                    <View>
              <Image source={require('../images/payment/Team.png')} 
               style={styles.icon}/>
              <Text style={{marginLeft:28,marginRight: 13,}}>Team</Text></View>
                
                <View>
              <Image source={require('../images/payment/User.png')} 
               style={styles.icon}/>
              <Text style={{marginLeft:20,marginRight:13,}}>Account</Text></View>
              </View>

              </View>

   </ImageBackground>
   
            

             
             </View>
                                              
        </View>
    )
}


export default Home;



const styles=StyleSheet.create({
    container:{
       
        flex:1,
        
    },
    header:{
        width:"100%",
        height:"26%",
        backgroundColor:"red",
      
   },
   image:{
       height:'100%',
       width:"100%",
      
   },
   
   image2:{
    height:120,
    width:160,
    marginTop: 10,
    marginLeft: 20,
  borderRadius: 3,

   
},


   image3:{
    height:120,
    width:160,
    marginTop: 10,
    marginLeft: 4,
    borderRadius: 3,
   
},

icon:{
    height:30,
    width:30,
    left:"20%",
    top:5,
    borderRadius:50,
    marginLeft:15,
    marginRight:6,

},

   div:{
    
        width:"90%",
        height:"25%",
        backgroundColor:"black",
        marginTop: 90,
        marginLeft: 20,
   },
   div2:{
    
    width:"90%",
    height:"55%",
    backgroundColor:"white",
    marginLeft: 20,
    
},

div4:{
    
    width:"100%",
    height:"35%",
    backgroundColor:"white",
    //marginLeft: 20,
    marginTop: 10,
    
},

div5:{
    
    width:"90%",
    height:"65%",
    backgroundColor:"white",
    marginLeft: 20,
    marginTop: 10,
    
},
div3:{
    
    width:"90%",
    height:"25%",
    backgroundColor:"blue",
    marginLeft: 20,
    marginTop: 10,
},
   
   text:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
    marginTop: 5,
    marginLeft: 10,
   },
    
   text2:{
    color:"white",
    fontSize:13,
    fontWeight:"bold",
    marginTop: 5,
    marginLeft: 15,
   },

    
   text3:{
    color:"black",
    fontSize:16,
    fontWeight:"bold",
    marginTop: 2,
    marginLeft: 25,
   },
});