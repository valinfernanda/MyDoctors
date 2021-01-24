import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts } from '../../utils';

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Mira Milani" onPress={()=>navigation.goBack()} />
            <View style={styles.content}>
            <Text style={styles.chatDate}>Jumat, 23 Januari 2021</Text>
            <ChatItem isMe />
            <ChatItem />
            <ChatItem isMe/>
            </View>
            <InputChat />
            
            
        </View>
    )
}

export default Chatting;

const styles = StyleSheet.create({
    chatDate: { 
        fontSize: 11, 
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20, 
        textAlign: 'center',
    }, 
    page: { 
        backgroundColor: colors.white,
        flex:1, 
    }, 
    content: { 
        flex: 1,
    }
})
