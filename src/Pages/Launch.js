import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../Styles/GlobalStyles'
const Launch = () => {
    const navigation = useNavigation();
    const defaultNavigate =()=>{
        navigation.navigate('login');
    }
    return (
        <SafeAreaView style={globalStyles.centeredContainer}>
            <Text onPress={()=>defaultNavigate()}>
                Logo
            </Text>
        </SafeAreaView>
    )
}

export default Launch