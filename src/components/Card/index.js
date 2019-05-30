import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native'
import {styles} from './styles'

export default Card = (props) => (
  <View style={styles.card}>
    <Image style={styles.cardImg} source={{uri:`${props.imgSrc}`}}></Image>
    <Text style={styles.cardText}>{props.title}</Text>
  </View>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}
