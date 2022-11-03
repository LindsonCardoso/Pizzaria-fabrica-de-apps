import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../screens/Dashboard';
import Order from '../screens/Order';

//tipagem das navegações {telas}
export type StackParamsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
}

const Stack = createNativeStackNavigator<StackParamsList>()

function AppRoutes(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}

      />
      <Stack.Screen
        name="Order"
        component={Order}

      />
    </Stack.Navigator>
  )
}

export default AppRoutes;
