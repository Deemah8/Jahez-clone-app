import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen(){
    return(
        <View style={styles.container}>
            <Text>Favorites Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
  });