import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from './routes'
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
                    routes.map((item, index) => {
                        return (
                            <Stack.Screen key={index} name={item.path} component={item.component} />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RoutesPage