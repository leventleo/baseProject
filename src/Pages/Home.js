import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View ,Text} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context'
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View>
            <Text>
                Home
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default Home;