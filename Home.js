import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from './Searchbar'; 
import List from './RestaurantsList';

export default function HomeScreen(){
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    const data = [
        {id: '1', name: 'Albaik', details: 'Fast food' },
        {id: '2', name: 'Kudo', details: 'Fast food'},
        {id: '3', name: 'Alromansiah', details: 'Traditional'},
        {id: '4', name: 'Sors', details: 'Desserts'},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
            <Text style={styles.headerTitle}>Jahez</Text>
            <SearchBar 
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            </View>
            <List 
                searchPhrase={searchPhrase} 
                setClicked={setClicked} 
                data={data} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',  // Adjusted to place the search bar at the top
    },
    headerView: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        backgroundColor: '#D20E0E',
        width: '100%',
        paddingBottom: 10,
        paddingTop: 60,
    }, 
    headerTitle: {
        color: 'white',
        justifyContent: 'flex-end',
        fontSize: 50,
        paddingLeft: 14, 
        fontWeight: 'bold',
    }
  });