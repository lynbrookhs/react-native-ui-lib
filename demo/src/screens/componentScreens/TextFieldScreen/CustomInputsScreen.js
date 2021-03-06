import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, TextField, Colors, Spacings} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';

class CustomInputsScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View padding-s5>
          <Text text40 marginB-s5>
            Custom Inputs
          </Text>
          <TextField title="Default" placeholder="Enter Text" enableErrors={false} containerStyle={styles.input}/>
          <TextField
            title="Square"
            placeholder="Enter Text"
            hideUnderline
            containerStyle={styles.input}
            style={{padding: 10, borderWidth: 1, borderColor: Colors.grey50, borderRadius: 4}}
            enableErrors={false}
          />
          <TextField
            placeholder="Enter text"
            title="Rounded"
            text70
            containerStyle={styles.input}
            style={{
              backgroundColor: Colors.grey60,
              height: '100%',
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 20
            }}
            hideUnderline
            enableErrors={false}
            titleStyle={{marginLeft: 10}}
          />
        </View>
      </ScrollView>
    );
  }
}

export default CustomInputsScreen;

Navigation.registerComponent('unicorn.components.CustomInputsScreen', () => CustomInputsScreen);

const styles = StyleSheet.create({
  input: {
    marginBottom: Spacings.s4
  }
});
