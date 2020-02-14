import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Webview from 'react-native-webview';
export default class WebView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //   static navigationOptions = ({navigation}) => {
  //     const {params} = navigation.state;
  //     const title = navigation.getParam('title');
  //     return {
  //       title,
  //       headerStyle: {
  //         backgroundColor: 'red',
  //       },
  //     };
  //   };

  render() {
    const Header = () => (
      <View
        style={{
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
            backgroundColor: '#0c084c',
          flexDirection: 'row',
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <Text
          style={{
              color:'white'
          }}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            Back
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>
      </View>
    );
    const {navigation} = this.props;
    const url = navigation.getParam('url');
    const title = navigation.getParam('title');
    console.log('hjghjghh', title);
    return (
      <View style={{flex: 1}}>
        <Header />
        <Webview source={{uri: url}} />
        {/* <Text> {contentPageData}textInComponent </Text> */}
      </View>
    );
  }
}
