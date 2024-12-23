import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import Talking from '../../../components/Talking'
import { colors } from '../../../constants/colors'
import { styles } from './styles'
import Typography from '../../../components/common/Typography'
import IssuesList from '../../../components/IssuesList'
import UserCard from '../../../components/UserCard'
import FavouriteUsers from '../../../components/FavouriteUsers'
import images from '../../../constants/icons'
import { SCREENS } from '../../../constants/routes'
import { useNavigation } from '@react-navigation/native'

const FeliExpert = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Header bgColor={colors.expert} />
                <View style={styles.circle}></View>
                <Talking textColor={colors.expert} icon={images.TALK_ICON} text={'Setup a call with our experts'} onPress={() =>
                    navigation.navigate(SCREENS.CONNECTED_WITH, {
                        color: colors.expert,
                        backColor: colors.expertBack,
                        lightColor: colors.exportLight
                    })
                } />
                <View style={styles.issueMain}>
                    <Typography textStyle={styles.sectionTitle} title='Find Expert as per your issues' />
                    <Typography textStyle={styles.sectionInfo} title='Find experts to talk to for all your queries' size={12} />
                    <IssuesList bgcolor={colors.expertBack} />
                </View>
                <Text style={styles.sectionTitle}>Recently Talked With</Text>
            </View>
            <View style={styles.recentTalked}>
                <UserCard />
                <Typography textStyle={styles.sectionTitle} title='Your Favourite'/>
                <FavouriteUsers textColor={colors.expert} bgColor={colors.expertBack} />
            </View>
        </ScrollView>
    )
}

export default FeliExpert