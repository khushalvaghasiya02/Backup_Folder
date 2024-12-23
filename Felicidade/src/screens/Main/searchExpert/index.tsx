import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import Header from '../../../components/common/Header';
import { styles } from './styles';
import Typography from '../../../components/common/Typography';
import ExpertListScreen from '../../../components/ExpertCard';

const SearchExpert = ({ route }) => {
    const { iconSource, title } = route.params;
    const getPosition = (index) => {
        const positions = ['-3%', '4%', '4%', '-6%'];
        return positions[index % positions.length];
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Header isShow={true} />
                <View style={styles.circle} />
                <View style={styles.outerCircle} />
                <View style={styles.head}>
                    <Image source={iconSource} style={styles.icon} />
                    <Typography title={title} textStyle={styles.heading} size={32} />
                </View>
                <View style={styles.circleContainer}>
                    {[...Array(4)].map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.circlePlaceholder,
                                { marginTop: getPosition(index) }
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.listData}>
                    <ExpertListScreen />
                </View>
            </View>
        </ScrollView>
    );
};

export default SearchExpert;
