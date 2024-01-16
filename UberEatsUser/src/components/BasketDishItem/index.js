import { useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const BasketDishItem = ({basketDish }) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
             <Text>1</Text>
        </View>
            <Text style={{fontWeight: 600 }}>{basketDish.name}</Text>
            <Text style={{marginLeft: "auto"}}>$ {basketDish.price}</Text>
        </View>
);
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        paddingHorizontal: 10,
    },

    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 3,
    }, 
}); 

export default BasketDishItem;