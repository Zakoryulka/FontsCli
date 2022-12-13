/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainView from './screens/MainView';
import { setfavoritesFamilyFonts } from "./store/textInput";
import { setPremiumStatus } from "./store/content";   // оставить

function Root() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFavorites() {
      const storedFavorites = await AsyncStorage.getItem('favorites');

      if (storedFavorites) {
        dispatch(setfavoritesFamilyFonts({favoritesFonts: JSON.parse(storedFavorites)}));
      }
    };

    // временно отключим:
    // async function fetchPremiumAppStatus() {
    //   const appIsPremium = await AsyncStorage.getItem('appIsPremium');

    //   if (appIsPremium === true) {
    //     dispatch(setPremiumStatus({status: true}));
    //   } else {
    //     dispatch(setPremiumStatus({status: false}));
    // };

    fetchFavorites();

    // временно отключим:
    // fetchPremiumAppStatus();
  }, []);

  return <MainView />
}

export default function App() {

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
 }
