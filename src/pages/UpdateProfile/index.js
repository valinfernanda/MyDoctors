import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Profile, Input, Button, Gap} from '../../components';
import { colors } from '../../utils';


const UpdateProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={()=>navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Profile isRemove/>
            <Gap height={20} />
            <View style={styles.content}>
                <Input label="Full Name" />
                <Gap height={20} />
                <Input label="Occupation" />
                <Gap height={20} />
                <Input label="Email" />
                <Gap height={20} />
                <Input label="Password" />
                <Gap height={35} />
                <Button title="Save Profile" onPress={()=>navigation.goBack('UserProfile')} />
            </View>
            </ScrollView>
        </View>
    );
};
export default UpdateProfile;

const styles = StyleSheet.create({
    page: { 
        backgroundColor: colors.white,
        flex: 1,  
    },
    content: { 
        padding: 40, 
        paddingTop: 0, 
    }
});
