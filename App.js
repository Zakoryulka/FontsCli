/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from "react";
 import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
 import { Provider } from "react-redux";
 import { store } from "./store/store";


 import FontScreen from './screens/FontScreen';

 export default function App() {
   return (
     <SafeAreaView
       style={styles.mainView}
       // onLayout={onLayoutRootView}
     >
       <StatusBar
         translucent
         backgroundColor="#1E1E1E"
         barStyle="light-content"
       />
       {/* <Text style={{fontFamily: 'amatic', color: '#ffffff'}}>12345vlkf;xcdcdsbjns.</Text> */}
       <Provider store={store}>
         {/* <Text style={{ fontFamily: "amatic", color: "#ffffff" }}>
           12345vlkf;xcdcdsbjnsssddd.
         </Text> */}
         <FontScreen />
       </Provider>
     </SafeAreaView>
   );
 }

 const styles = StyleSheet.create({
   mainView: {
     flex: 1,
     paddingTop: StatusBar.currentHeight,
     backgroundColor: "#1E1E1E",
   },
 });
