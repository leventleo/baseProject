import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../Styles/GlobalStyles'
const Login = ({navigation}) => {
    const defaultNavigate=()=>{
        navigation.navigate('register')
    }
    return (
        <SafeAreaView style={globalStyles.centeredContainer}>
            <Text onPress={()=>defaultNavigate()}>
                Login
            </Text>
        </SafeAreaView>
    )
}

export default Login