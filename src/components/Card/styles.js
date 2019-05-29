import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  card:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: '2%',
    width: '96%',
    height:150,
    borderRadius: 5,
    shadowColor: '#FF0000',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {
      width:3,
      height: 3
    }
  },
  cardImg:{
    width:'37%',
    height: 120,
    resizeMode:'cover',
    borderRadius: Platform.OS === 'ios' ? 60 : 100,
    marginTop: 15,
    marginHorizontal: '5%',
  },
  cardText:{
    marginTop: 15,
    marginHorizontal: '5%',
    width: '37%',
    alignSelf: 'center',
    fontSize:24
  }
})