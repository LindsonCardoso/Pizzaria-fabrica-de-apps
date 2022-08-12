import React, { useContext, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'
const SingIn = () => {

  //ESTADOS / VARIAVEIS



  const { signIn, loadingAuth } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //FUNCTIONS

  async function handleLogin() {
    if (email === '' || password == '') return;

    await signIn({ email, password })
  }



  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Digite seu email'
          style={styles.input}
          placeholderTextColor="#F0F0F0"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
          placeholderTextColor="#F0F0F0"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttonAcessar} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={27} color='#101026' />
            ) : (
              <Text style={styles.textbuttonAcessar}>Acessar</Text>
            )
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D2E",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 18,
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFF'
  },
  buttonAcessar: {
    width: '95%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textbuttonAcessar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }
});

export default SingIn
