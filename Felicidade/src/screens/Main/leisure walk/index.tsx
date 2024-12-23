import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../components/common/Header'
import { styles } from './styles'
import { FlatList, Pressable, ScrollView } from 'react-native-gesture-handler'
import images from '../../../constants/icons'
import LinearGradient from 'react-native-linear-gradient'
import Typography from '../../../components/common/Typography'

const LeisureWalk = () => {
    const trips = [
        { id: '1', date: '27th Sep', title: "Ravi's Cycle Trip", description: 'Lorem ipsum dolor sit amet', type: 'Cycle trip' },
    ];
    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.main}>
                    <View>
                        <Header isShow={true} title="Leisure walk" />
                        <View style={styles.circle} />
                        <View style={styles.head}>
                            <Image source={images.CONNECTED_WITH} style={styles.userImg} />
                        </View>
                    </View>
                    <FlatList
                        data={trips}
                        renderItem={({ item }) => (
                            <LinearGradient
                                colors={['#FFFFFF', '#FFEFCF']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.tripCard}
                            >
                                <Text style={styles.tripDate}>{item.date}</Text>
                                <View>
                                    <Typography textStyle={styles.tripTitle} title={item.title} size={12} />
                                    <Typography textStyle={styles.tripDescription} title={item.description} size={16} />
                                    <View style={styles.type}>
                                        <Image source={images.WALK_ICON} style={styles.checkIcon} />
                                        <Typography textStyle={styles.tripType} title={item.type} size={12} />
                                    </View>
                                </View>
                            </LinearGradient>
                        )}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                    <View>
                        <Typography textStyle={styles.sectionTitle} title='About the events' />
                        <Typography textStyle={styles.description} title='Lorem ipsum dolor sit amet consectetur. Odio lacus nunc egestas nibh ut est. Odio in porta dictum sed id dictum ligula egestas. Aenean eget vitae in et ac ultrices neque magna. Morbi cras morbi bibendum tincidunt nulla donec natoque venenatis nulla. Mattis lacus nullam sed nulla morbi laoreet sed purus nam. Vel urna nunc.' size={12} />
                    </View>
                </View>
                <View style={styles.onwardsContent}>
                    <View>
                        <Typography textStyle={styles.onwards} title='200 onwards' size={24} />
                        <Typography textStyle={styles.now} title='Available now' size={16} />
                    </View>
                    <View>
                        <Pressable>
                            <LinearGradient
                                colors={['#FFCED9', '#FFF6C0']}
                                start={{ x: 0.12, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={styles.gradientBackground}
                            >
                                <Typography textStyle={styles.cancelButtonText} title='Start booking' />
                            </LinearGradient>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LeisureWalk