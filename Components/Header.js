import { StyleSheet, Text, View } from 'react-native';
import { React,useState} from 'react';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Activity</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 25,
        fontWeight: 'semibold'
    },
})