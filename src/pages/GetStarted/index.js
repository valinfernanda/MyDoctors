import React from 'react'
import { StyleSheet, Text, View, ImageBackground, onPress} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, Gap } from '../../components';
import { ILGetStarted } from '../../assets/illustration';
import { colors } from '../../utils';
import { color } from 'react-native-reanimated';


const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <AntDesign 
                name= "meho" 
                size={50} 
                color = "black" />
            <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={()=> navigation.navigate('Register')} />
                <Gap height={16} />
                <Button type= "secondary" title="Sign In" onPress={()=> navigation.replace('Login')}/>
            </View>
        </ImageBackground>
    );
};

export default GetStarted;
const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        flex: 1
        }, 
    title: { 
        fontSize: 28, 
        // fontWeight: "600", 
        color: colors.white, 
        marginTop: 91, 
        fontFamily: '._Nunito-SemiBold',
    },
});
