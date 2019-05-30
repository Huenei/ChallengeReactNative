import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from './action';
import {FlatList, ActivityIndicator, View, Text } from 'react-native';
import Card from '../../components/card/index';
import {Styles} from './styles'

class Drinks extends React.Component {
  componentWillMount() {
    this.props.fetchData()
  }
  
  render(){
    if(this.props.drinks.isFeching){
      return(
        <View style={Styles.loader}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Random Drinks</Text>
        <FlatList 
          data={this.props.drinks.data}
          keyExtractor={(item, index) => item.idDrink}
          renderItem={({item}) => <Card imgSrc={item.strDrinkThumb} title={item.strDrink} /> }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
      drinks: state.drinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchData: () => {
          return dispatch(fetchData())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drinks)
