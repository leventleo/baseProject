import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from './routes'
import Home from '../Pages/Home'
import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();
const RoutesPage = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerMode: 'none'
            }}>
                {
                    routes.map((item) => {
                        return (
                            <Stack.Screen name={item.path} component={Home} />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RoutesPage