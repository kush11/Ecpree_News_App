import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class DeckSwiper extends PureComponent {
  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
    this.swipedCardPosition = new Animated.ValueXY({x: 0, y: -SCREEN_HEIGHT});
    this.state = {
      currentIndex: 0,
    };
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0 && this.state.currentIndex > 0) {
          this.swipedCardPosition.setValue({
            x: 0,
            y: -SCREEN_HEIGHT + gestureState.dy,
          });
        } else {
          this.position.setValue({x: 0, y: gestureState.dy});
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (
          this.state.currentIndex > 0 &&
          gestureState.dy > 50 &&
          gestureState.vy > 0.7
        ) {
          Animated.timing(this.swipedCardPosition, {
            toValue: {x: 0, y: 0},
            duration: 400,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex - 1});
            this.swipedCardPosition.setValue({x: 0, y: -SCREEN_HEIGHT});
          });
        } else if (-gestureState.dy > 50 && -gestureState.vy > 0.7) {
          Animated.timing(this.position, {
            toValue: {x: 0, y: -SCREEN_HEIGHT},
            duration: 400,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1});
            this.position.setValue({x: 0, y: 0});
          });
        } else {
          Animated.parallel([
            Animated.spring(this.position, {
              toValue: {x: 0, y: 0},
            }),
            Animated.spring(this.swipedCardPosition, {
              toValue: {x: 0, y: -SCREEN_HEIGHT},
            }),
          ]).start();
        }
      },
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(this.state.currentIndex === nextState.currentIndex);
  // }

  renderArticles = () => {
    return this.props.data
      .map((item, i) => {
        if (i == this.state.currentIndex - 1) {
          return (
            <Animated.View
              key={item.id}
              style={this.swipedCardPosition.getLayout()}
              {...this.PanResponder.panHandlers}>
              {this.props.renderCard(item)}
            </Animated.View>
          );
        } else if (i < this.state.currentIndex) {
          return null;
        }
        if (i == this.state.currentIndex) {
          return (
            <Animated.View
              key={item.id}
              style={this.position.getLayout()}
              {...this.PanResponder.panHandlers}>
              {this.props.renderCard(item)}
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={item.id}>
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.currentIndex == this.props.data.length ? (
          <View
            style={{
              flex: 1,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>No Data</Text>
          </View>
        ) : (
          this.renderArticles()
        )}
      </View>
    );
  }
}
export default DeckSwiper;
