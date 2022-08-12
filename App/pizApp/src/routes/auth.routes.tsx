import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SingIn from '../screens/SingIn';

const Stack = createNativeStackNavigator()

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
  )
}

export default AuthRoutes;
