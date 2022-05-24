import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { Appbar, Avatar, BottomNavigation, Text } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationTab from '../projet/src/navigation/NavigationTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderComponent from '../projet/src/components/HeaderComponent';


export default function App() {
  return (
    <SafeAreaProvider>
    <PaperProvider style={{ flex: 1}}>
      <HeaderComponent />
      <NavigationTab />
      <StatusBar style="auto" />
    </PaperProvider>
    </SafeAreaProvider>
  );
}