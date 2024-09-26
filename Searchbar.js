import React from 'react';
import { StyleSheet, View, TextInput, Keyboard, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
        <View style={styles.container}>
            <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
                {/* Search Icon */}
                <Ionicons name="search-outline" size={24} color="black" style={{ marginLeft: 1 }} />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
            </View>
            {/* Cancel button, displayed when search bar is clicked */}
            {clicked && (
                <View>
                    {/* used pressable to be able to change text color */}
                    <Pressable
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}>
                        <Text style={{ color: 'white', padding: 4, fontSize: 18}}> Cancel </Text> 
                    </Pressable>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    searchBar__unclicked: {
        padding: 8,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 8,
        flexDirection: "row",
        width: "84%",
        backgroundColor: "#F5F5F5",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});

export default SearchBar;