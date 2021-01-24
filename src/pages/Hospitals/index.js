import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets';
import { ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type="Rumah Sakit" name="Hasan Sadikin" address="Jl. Bandung" pic={DummyHospital1} />
                <ListHospital type="Rumah Sakit" name="Immanuel" address="Jl. Kopo" pic={DummyHospital2} />
                <ListHospital type="Rumah Sakit" name="Cicendo" address="Jl. Pajajaran" pic={DummyHospital3} />
            

            </View>
        </View>
    )
}

export default Hospitals;

const styles = StyleSheet.create({
    background: { 
        height: 240,
        paddingTop: 30,
    },
    page: {
        backgroundColor: colors.secondary, 
        flex: 1, 
    },
    content: { 
        backgroundColor: colors.white, 
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14,
    },
    title: {
        fontSize: 20, 
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
    }, 
    desc: {
        fontSize: 14, 
        fontFamily: fonts.primary[300],
        color: colors.white, 
        marginTop: 6, 
        textAlign: 'center',
    }
})
