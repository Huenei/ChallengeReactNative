import {StyleSheet, Platform} from 'react-native';

export const Styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor:'#21618C',
    width: '100%'
  },
  title:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
  loader:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
})