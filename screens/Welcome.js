// import React from 'react';
// import {
//     View,
//     Text,
//     Image,
//     StyleSheet,
//     StatusBar,
//     SafeAreaView,
//     ImageBackground
// } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const data = [
//     {
//         image: require('../images/Welcome/6.jpeg'),
//         title: 'New Era of Earn Money',
//         image2: require('../images/Welcome/1.jpeg'),
//     },
//     {
//         image: require('../images/Welcome/6.jpeg'),
//         title: 'New Era of Earn Money ',
//         image2: require('../images/Welcome/1.jpeg'),
//     },
//     {
//         image: require('../images/Welcome/6.jpeg'),
//         title: ' New Era of Earn Money ',
//         image2: require('../images/Welcome/1.jpeg'),
//     },
// ];

// type Item = typeof data[0];

// export default class App extends React.Component {
//     _renderItem = ({ item }: { item: Item }) => {
//         return (
//             <ImageBackground source={require('../images/Welcome/2.jpeg')} style={{ width: '100%', height: '100%' }}>
//                 <View
//                     style={{
//                         flex: 1,
//                         backgroundColor: item.bg,
//                     }}>
//                     <SafeAreaView style={styles.slide}>
//                         <Text style={styles.title}>{item.title}</Text>
//                         <Image source={item.image} style={styles.image} />
//                         <Image source={item.image2} style={styles.image2} />

//                         <View style={{ position: "absolute", top: 285, left: 65 }}>
//                             <Text style={{ marginLeft: 38, fontSize: 18, fontWeight: 'bold' }} >Invest in</Text>
//                             <Text style={{ fontSize: 30, color: "#fff", fontWeight: 'bold' }}>trending</Text>
//                             <Text style={{ marginLeft: 48, fontSize: 20, fontWeight: 'bold' }}>assets</Text>
//                         </View>
//                     </SafeAreaView>
//                 </View>
//             </ImageBackground>
//         );
//     };

//     _keyExtractor = (item: Item) => item.title;

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <AppIntroSlider
//                     keyExtractor={this._keyExtractor}
//                     renderItem={this._renderItem}
//                     bottomButton
//                     showSkipButton
//                     showPrevButton
//                     data={data}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     slide: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
//     },
//     image: {
//         position: "absolute",
//         height: 100,
//         width: 300,
//         left: 70,
//         top: 65,
//         borderRadius: 10,
//         alignSelf: 'center'
//     },
//     image2: {
//         position: "absolute",
//         height: 230,
//         width: 230,
//         top: 255,
//         left: "45%",
//         borderRadius: 10,
//     },
//     title: {
//         position: "absolute",
//         fontSize: 18,
//         color: "#EAF0F2",
//         top: 180,
//         alignSelf: 'center'
//     },
// });

// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// import Onboarding from 'react-native-onboarding-swiper';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// const Dots = ({ selected }) => {
//     let backgroundColor;

//     backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

//     return (
//         <View
//             style={{
//                 width: 6,
//                 height: 6,
//                 marginHorizontal: 3,
//                 backgroundColor
//             }}
//         />
//     );
// }

// const Skip = ({ ...props }) => (
//     <TouchableOpacity
//         style={{ marginHorizontal: 10 }}
//         {...props}
//     >
//         <Text style={{ fontSize: 16 }}>Skip</Text>
//     </TouchableOpacity>
// );

// const Next = ({ ...props }) => (
//     <TouchableOpacity
//         style={{ marginHorizontal: 10 }}
//         {...props}
//     >
//         <Text style={{ fontSize: 16 }}>Next</Text>
//     </TouchableOpacity>
// );

// const Done = ({ ...props }) => (
//     <TouchableOpacity
//         style={{ marginHorizontal: 10 }}
//         {...props}
//     >
//         <Text style={{ fontSize: 16 }}>Done</Text>
//     </TouchableOpacity>
// );

// const OnboardingScreen = ({ navigation }) => {

//     return (
//         <ImageBackground source={require('../images/Welcome/2.jpeg')} style={{ width: '100%', height: '100%' }}>
//             <Image source={require('../images/Welcome/6.jpeg')} style={styles.header} />
//             <Text style={{ position: "absolute", fontSize: 18, color: "#EAF0F2", top: 180, alignSelf: 'center' }}>New Era of Earn Money</Text>

//             <Image source={require('../images/Welcome/1.jpeg')} style={styles.img} />
//             <View style={{ position: "absolute", top: 285, left: 65 }}>
//                 <Text style={{ marginLeft: 38, fontSize: 18, fontWeight: 'bold' }} >Invest in</Text>
//                 <Text style={{ fontSize: 30, color: "#fff", fontWeight: 'bold' }}>trending</Text>
//                 <Text style={{ marginLeft: 48, fontSize: 20, fontWeight: 'bold' }}>assets</Text>
//             </View>

//             <View style={{ position: "absolute", top: 535, left: "35%", height: 33, width: "35%", opacity: 0.5, backgroundColor: "white", borderRadius: 5 }}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }} >
//                     <Text>Start Earning</Text>
//                 </TouchableOpacity>
//             </View>

//             <Onboarding
//                 SkipButtonComponent={Skip}
//                 NextButtonComponent={Next}
//                 DoneButtonComponent={Done}
//                 DotComponent={Dots}
//                 onSkip={() => navigation.replace("Login")}
//                 onDone={() => navigation.navigate("Login")}
//                 pages={[
//                     {
//                         subtitle: 'Next',
//                     },
//                     {
//                         subtitle: 'Share Your Thoughts With Similar Kind of People',
//                     },
//                     {
//                         subtitle: "Let The Spot Light Capture You",
//                     },
//                 ]}
//             />
//         </ImageBackground>
//     );
// };

// export default OnboardingScreen;

// const styles = StyleSheet.create({
//     header: {
//         position: "absolute",
//         height: 100,
//         width: 300,
//         left: 70,
//         top: 65,
//         borderRadius: 10,
//         alignSelf: 'center'
//     },
//     assets: {
//         position: "absolute",
//         height: 120,
//         width: "100%",
//         top: "40%",
//         backgroundColor: "white",
//         display: "flex",
//         flexDirection: "row"

//     },
//     img: {
//         position: "absolute",
//         height: 230,
//         width: 230,
//         top: 255,
//         left: "45%",
//         borderRadius: 10,
//     }

// });
