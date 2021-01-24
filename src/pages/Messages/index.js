import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { List } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = ({navigation}) => {
   const [doctors] = useState([
        {
            id: 1, 
            profile: DummyDoctor1,
            name: 'Kevin William',
            desc: 'Baik ibu, terimakasih banyak atas wakt...',
        },
        {
            id: 2, 
            profile: DummyDoctor2,
            name: 'Kenzo Miguel',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id: 3, 
            profile: DummyDoctor3,
            name: 'Charlotte Raquel',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <Text style={styles.title}>Messages</Text>
            {
                doctors.map(doctor => {
                    return <List key={doctor.id} profile={doctor.profile} 
                        name={doctor.name} desc={doctor.desc} onPress={()=>navigation.navigate('Chatting')} />
                })
            }
            
            </View>
            
        </View>
    )
}

export default Messages;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary, 
        flex: 1,
    }, 
    content: { 
        backgroundColor: colors.white,
        flex: 1, 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
    }, 
    title: { 
        fontSize: 20, 
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    }
})
