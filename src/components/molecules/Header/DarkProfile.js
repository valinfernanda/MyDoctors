import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor11, DummyDoctor9 } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

const DarkProfile = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" onPress={onPress} />
            <View style={styles.contet}>
            <Text style={styles.name}>Mira Milani</Text>
            <Text style={styles.desc}>Dokter Anak</Text>
            </View>
            <Image source={DummyDoctor9} style={styles.avatar}/>
        </View>
    )
}

export default DarkProfile;

const styles = StyleSheet.create({
    container: { 
        backgroundColor: colors.secondary,
        paddingVertical: 30, 
        paddingLeft: 20, 
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    contet: { 
        flex: 1,
    }, 
    avatar: { 
        width: 46, 
        height: 46, 
        borderRadius: 46/2,
    }, 
    name: { 
        fontSize: 20, 
        fontFamily: fonts.primary[200],
        color: colors.white, 
        textAlign: 'center',
    }, 
    desc: {
        marginTop: 6, 
        textAlign: 'center',
        color: colors.text.subTitle, 

    }
})
