import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';


const Register = ({navigation}) => {
    const [fullname, setFullName] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    return (
        <View style={styles.page}>
            <Header onPress= {() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
            <Input label ="Full Name" />
            <Gap height={24} />
            <Input label ="Pekerjaan" />
            <Gap height={24} />
            <Input label ="Email" />
            <Gap height={24} />
            <Input label ="Password" />
            <Gap height={40} />
            <Button title = "Continue" onPress={(onPress) => navigation.navigate('UploadPhoto')} />
                </ScrollView>
            </View>
        </View>  
    )
}

export default Register;

const styles = StyleSheet.create({
    content: {
        padding: 40, 
        paddingTop: 0, 
    },
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
})
