import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Upswipe from '../Components/UpSwipe';
import {renderCard} from '../Components/RenderCard';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      serverData: [],
    };
    const category = this.props.navigation.getParam('category');
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e9ed76ff6496462b8096d1e4b3178434&pageSize=1`,
      // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e9ed76ff6496462b8096d1e4b3178434',
      // 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e9ed76ff6496462b8096d1e4b3178434',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(responseJson => this.setState({serverData: responseJson.articles}))
      .catch(err => {
        alert(err, 'Sorry for error');
      });
  }
  renderNoMoreCards() {
    console.log('dslllll',this.propsData)
    let goto = this.propsData.navigation;
    return (
      <TouchableOpacity
      onPress={()=>{
        goto.navigate('FirstPage')
      }}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink',
        }}>
        <Text>No More News at this Post Please come after some time</Text>
      </TouchableOpacity>
    );
  }

  render() {
    console.log('dsdsd', this.state.serverData);
    return (
      <View style={styles.container}>
        <Upswipe
          data={this.state.serverData}
          renderCard={item => renderCard(item, this.props)}
          renderNoMoreCards={this.renderNoMoreCards}
          propsData = {this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
