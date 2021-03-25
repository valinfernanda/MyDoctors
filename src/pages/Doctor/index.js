import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { DummyDoctor1, DummyDoctor3, DummyDoctor2, JSONCategoryDoctor } from '../../assets';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts, getData } from '../../utils';



const Doctor = ({navigation}) => {
    
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false }>
            <View style={styles.wrapperContent}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
            </View>

            <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={styles.category}>
                    <Gap width={32}/> 
                    {
                        JSONCategoryDoctor.data.map(item => {
                            return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')} />;
                        })
                    }
                    
                    <Gap width={22}/> 
                </View>
            </ScrollView>
            </View>
            <View style={styles.wrapperContent}>
                <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                <RatedDoctor name="Laura Erika" desc="Pediatrician" avatar={DummyDoctor1} onPress={()=>navigation.navigate('DoctorProfile')} />
                <RatedDoctor name="Kevin William" desc="Dentist" avatar={DummyDoctor2} />
                <RatedDoctor name="Katarina Lerebulan" desc="Podiatrist" avatar={DummyDoctor3} />

            <Text style={styles.sectionLabel}>Good News</Text>  
            </View>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <Gap height={30} />
            </ScrollView>
            </View>
            
        </View>
    )
}

export default Doctor;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    }, 
    content: { 
        backgroundColor: colors.white,
        flex: 1,
        // paddingVertical: 30, 
        // paddingHorizontal: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    welcome: {
        fontSize: 20, 
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30, 
        marginBottom: 16,
        maxWidth: 209,
    },
    category: {
        flexDirection: 'row',
    }, 
    wrapperScroll: { 
        marginHorizontal: -16,
    }, 
    sectionLabel: { 
        fontSize: 16, 
        fontFamily: fonts.primary[600], 
        color: colors.text.primary,
        marginTop: 30, 
        marginBottom: 16, 
    },
    wrapperContent: { 
        paddingHorizontal: 16,
    }, 
 
});
