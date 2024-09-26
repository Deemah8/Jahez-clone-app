import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Searchbar'; 

export default function OrdersScreen(){
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false); 

    return(
        <View style={styles.container}>
              <SearchBar 
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            <Text>Orders Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontWeight: 'bold',
    },
  });