import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../Styles/GlobalStyles';
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.centeredContainer}>
      <Text>
        Home
      </Text>
    </SafeAreaView>
  )
}

export default Home;