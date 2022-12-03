import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../Styles/GlobalStyles'
const Register = ({navigation}) => {
    const defaultNavigate=()=>{
        navigation.navigate('home');
    }
    return (
        <SafeAreaView style={globalStyles.centeredContainer}>
            <Text onPress={()=>defaultNavigate()}>
                Register
            </Text>
        </SafeAreaView>
    )
}

export default Register