import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Upswipe from '../Components/UpSwipe';
import {renderCard} from '../Components/RenderCard';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      serverData: [],
    };
    fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=e9ed76ff6496462b8096d1e4b3178434&pageSize=15',
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

  render() {
    console.log('dsdsd', this.state.serverData);
    return (
      <View style={styles.container}>
        <Upswipe
          data={this.state.serverData}
          renderCard={item => renderCard(item, this.props)}
          // onSwipeLeft={item => console.log(item, 'onSwipeLeft')}
          // onSwipeRight={item => console.log(item, 'onSwipeRight')}
          // renderNoMoreCards={this.renderNoMoreCards}
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
