import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../utils';


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000)
    }, [])
    return (
        <View style={styles.page}>
        <AntDesign 
        name= "meho" 
        size={50} 
        color = "black" />
        <Text style={styles.title}>My Doctor</Text>
    </View>
    );
};

export default Splash; 

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, 
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'column', 
        justifyContent: 'center'
        }, 
    title: {
        fontSize: 20, 
        fontWeight: '600', 
        color: colors.text.primary, 
        marginTop: 20}
})
