
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/AuthContext';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'

import { api } from '../../sevices/api'

export default function Dashboard() {

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

  const { signOut } = useContext(AuthContext)
  const [mesa, setMesa] = useState('')


  async function openOrder() {
    if (mesa === '') {
      return;
    }

    const response = await api.post('/order', {
      table: Number(mesa),
    })

    //console.log(response.data)
    //criar a orde e ir pra proxima tela {levando os dados da mesa}

    navigation.navigate('Order', { number: mesa, order_id: response.data.id})

    setMesa('')

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="INSERE A MESA"
        keyboardType='numeric'

        value={mesa}
        onChangeText={setMesa}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D2E",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 24
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#3fffa3',
    marginVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#101026',
    fontWeight: 'bold'

  }
});
