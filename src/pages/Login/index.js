import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, Gap, Input, Link } from '../../components/atoms';
import { colors } from '../../utils';

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
        <AntDesign 
        name= "meho" 
        size={50} 
        color = "black" />
            <Text style={styles.title}>Masuk dan mulai berkontribusi</Text>
        <Input label="Email Adress" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={10} />
        <Link title = "Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
        <Gap height={30} />
        <Link title = "Create New Account" size={16} align="center" onPress={()=>navigation.navigate('Register')} />
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {
        padding: 40, 
        backgroundColor: colors.white, 
        flex: 1,
    }, 
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold', 
        color: colors.text.primary, 
        marginVertical: 40, 
        maxWidth: 153
    }
})