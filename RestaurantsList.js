import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from "react-native";

const ResItem = ({ name, details }) => (
    <View style={styles.item}>
        <Image source={require('../assets/favicon.png')} style={styles.img}/>
        <View style={styles.itemInfoView}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.details}>{details}</Text>
        </View>
    </View>
);

const List = ({ searchPhrase, setClicked, data }) => {
    const renderItem = ({ item }) => {
        if (searchPhrase === "" || 
            item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim()) || 
            item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim())) {
            return <ResItem name={item.name} details={item.details} />;
        }
        return null;
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                onScrollBeginDrag={() => setClicked(false)} // Close the search on scroll
            />
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        height: "85%",
        width: "100%",
    },
    item: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
        width: '100%',
        paddingTop: '20',
        paddingBottom: '20',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 6,
    },
    details: {
        marginLeft: 20,
        marginBottom: 10,
    },
    img: {
        margin: 10,
        marginBottom: 15,
    }
});
