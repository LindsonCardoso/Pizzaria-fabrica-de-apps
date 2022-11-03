import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'

interface ItemProps {
  data: {

    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };

  deleteItem: (item_id: string) => void;
}

export  function ListItem({data, deleteItem}: ItemProps) {



  function handleDeleteItem() {
      deleteItem(data.id)
  }




  return (
    <View style={styles.container}>
      <Text style={styles.item}>{data.amount} - {data.name}</Text>
      <TouchableOpacity onPress={handleDeleteItem}>
        <Feather name="trash-2" color='#FF3F4b' size={25}/>
      </TouchableOpacity>
    </View>
  )
}
