import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Gap, Header, Input, Loading } from '../../components';
import { colors, useForm } from '../../utils';
import {Fire} from '../../config';
import { showMessage, hideMessage } from "react-native-flash-message";

const Register = ({navigation}) => {
    const [form, setForm] = useForm({
        fullname: '',
        profession: '',
        email: '',
        password: '',
    });

    const[loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form);

        // showMessage({
        //     message: 'Hello World',
        //     type: 'default',
        //     backgroundColor: colors.error,
        //     color: colors.white,
        // })
        setLoading(true);

        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading(false);
            setForm('reset');

            const data = {
                fullname: form.fullname,
                profession: form.profession, 
                email: form.email,
            };
            Fire
            .database()
            .ref('users/' +success.user.uid+ '/')
            .set(data);
            console.log('register sucess: ', success);
         })
        .catch(error => {
            const errorMessage = error.message;
            setLoading(false);
            showMessage({
                message: errorMessage,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
            console.log('error', error);
  });
        //navigation.navigate('UploadPhoto')
    };
  
    return (
        <>
        <View style={styles.page}>
            <Header onPress= {() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
            <Input label ="Full Name" value={form.fullname} onChangeText={value =>setForm('fullname', value)} />
            <Gap height={24} />
            <Input label ="Pekerjaan" value={form.profession} onChangeText={(value) =>setForm('profession', value)}/>
            <Gap height={24} />
            <Input label ="Email" value={form.email} onChangeText={(value) =>setForm('email', value)} />
            <Gap height={24} />
            <Input label ="Password" value={form.password} onChangeText={(value) =>setForm('password', value)} secureTextEntry />
            <Gap height={40} />
            <Button title = "Continue" onPress={onContinue} />
                </ScrollView>
            </View>
        </View>  
        {
            loading && <Loading />
        }
        
        </>
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
