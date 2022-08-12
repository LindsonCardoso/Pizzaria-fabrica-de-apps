
import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext';

export default function Dashboard() {
  const {signOut} = useContext(AuthContext)

  return (

      <View style={styles.container}>
      <Text>AQUI È O LOGIN JA FEITO PARCEIRO</Text>
      <Button
        title='Sair do App'
        onPress={signOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1D2E",
        alignItems: 'center',
        justifyContent: 'center',
    }
});
