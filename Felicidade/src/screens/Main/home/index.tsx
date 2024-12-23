import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import BoxCard from '../../../components/BoxCard';
import Typography from '../../../components/common/Typography';
import Header from '../../../components/Header';
import UserCard from '../../../components/UserCard';
import { colors } from '../../../constants/colors';
import images from '../../../constants/icons';
import { styles } from './styles';
import IssuesList from '../../../components/IssuesList';
import TripList from '../../../components/TripList';
import CategoryCardComponent from '../../../components/CategoryCard';
import DateListComponent from '../../../components/DateList';
import DayInfoComponent from '../../../components/DayInfo';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Header bgColor={colors.purple}/>
                <Typography title='Not feeling well,
Connect with someone' textStyle={styles.title} />
                <View style={styles.searchContainer}>
                    <TextInput placeholder="Search Something" style={styles.searchInput} placeholderTextColor={colors.gray} />
                    <Image source={images.SEARCH_ICON} tintColor={colors.black} />
                </View>

                <BoxCard />

                <Text style={styles.sectionTitle}>How do you feel today?</Text>
                <View style={styles.moodSelector}>
                    <Typography title='😔' size={28} textStyle={styles.mood} />
                    <Typography title='😣' size={28} textStyle={styles.mood} />
                    <Typography title='🙂' size={28} textStyle={styles.mood} />
                    <Typography title='😇' size={28} textStyle={styles.mood} />
                    <Typography title='😄' size={28} textStyle={styles.mood} />
                </View>
                <Text style={styles.sectionTitle}>Recently Talked With</Text>
            </View>
            <View style={styles.recentTalked}>
                <UserCard />
            </View>

            <View style={styles.issueMain}>
                <Typography textStyle={styles.sectionTitle} title='Find Expert as per your issues' />
                <Typography textStyle={styles.sectionInfo} title='Find experts to talk to for all your queries' size={12} />
                <IssuesList bgcolor={colors.white}/>
            </View>
            <View style={styles.tripMain}>
                <Typography textStyle={styles.sectionTitle} title='Find your trip according to your preference' />
                <Typography textStyle={styles.sectionInfo} title='Find experts to talk to for all your queries' size={12} />
            </View>
            <CategoryCardComponent />
            <TripList textColor={colors.friend}/>

            <View style={styles.tripMain}>
                <Typography textStyle={styles.sectionTitle} title='Your recent Journal Entries' />
                <Typography textStyle={styles.sectionInfo} title='Find experts to talk to for all your queries' size={12} />
            </View>
            <DateListComponent />
            <DayInfoComponent />
        </ScrollView>
    );
};


export default HomeScreen;
