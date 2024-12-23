import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import { colors } from '../../../constants/colors'
import Talking from '../../../components/Talking'
import { styles } from './styles'
import images from '../../../constants/icons'
import Typography from '../../../components/common/Typography'
import ThoughtCard from '../../../components/Thought'

const FeliDiaries = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Header bgColor={colors.diaries} />
        <View style={styles.circle}></View>
        <Typography title='For adding all your
moments' textStyle={styles.title} />
        <Talking textColor={colors.black} icon={images.DIARIES_ICON} text={'Create a new entry'} />
      </View>
      <ThoughtCard />
      <View style={styles.option}>
        <View style={styles.optionBack}>
          <Image source={images.MIC_ICON} style={styles.image} />
        </View>
        <View style={styles.optionBack}>
          <Image source={images.NOTE_ICON} style={styles.image} />
        </View>
      </View>
      <View style={styles.lastBox}>
        <Typography title='Feelings are something you have;
not something you are.' textStyle={styles.note} size={18}/>
      </View>
    </ScrollView>
  )
}

export default FeliDiaries