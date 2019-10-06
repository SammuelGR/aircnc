import React, { useState, useEffect } from 'react';
import { AsyncStorage, Image, Platform, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image 
            style={[styles.logo, Platform.OS === 'ios' ? styles.logoIOS : styles.logoANDROID ]}
            source={logo}
            />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height:32,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logoIOS: {
        marginTop: 10
    },
    logoANDROID: {
        marginTop: 40
    }
});
