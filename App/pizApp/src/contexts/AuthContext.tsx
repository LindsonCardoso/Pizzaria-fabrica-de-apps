import React, { useState, createContext, ReactNode, useEffect } from 'react';
import AsynStorage from '@react-native-async-storage/async-storage'
import { api } from '../sevices/api'

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (crendentials: SingInProps) => Promise<void>;
  loading: boolean;
  loadingAuth: boolean;
  signOut: () => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

type SingInProps = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthProviderProps) {


  /**
   *  {Implementação das variaveis e estados}
   * */
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  //verificando caso esteja logado ou nao
  const isAuthenticated = !!user.name;

  /**
   *  {Implementação das funcoes}
   * */

  useEffect(() => {

    async function getUser() {
      // pegar os dadso salvos do user
      const userInfo = await AsynStorage.getItem('@testeapp')
      let hasUser: UserProps = JSON.parse(userInfo || '{}')

      //verificar se recebemos as informalçoes do user
      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`
        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token
        })
      }
    }
    setLoading(false)
    getUser();

  }, [])

  async function signIn({ email, password }: SingInProps) {

    setLoadingAuth(true);

    try {
      const response = await api.post('/session', {
        email,
        password
      })
      //console.log(response.data)

      const { id, name, token } = response.data

      const data = {
        ...response.data
      }

      //crfiando armazendo de token
      await AsynStorage.setItem('@testeapp', JSON.stringify(data))

      //guardando o token
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser({
        id,
        name,
        email,
        token
      })

      setLoadingAuth(false);

    } catch (err) {
      console.log(err)
      setLoadingAuth(false);
    }


  }

  async function signOut() {
    await AsynStorage.clear()
      .then(() => {
        setUser({
          id: '',
          name: '',
          email: '',
          token: ''
        })
      })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        loading,
        loadingAuth,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>

  )
}
