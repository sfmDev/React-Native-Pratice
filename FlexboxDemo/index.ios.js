/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class FlexboxDemo extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds,
      data: ["h", "e", "l", "l", "o"]
    }
  }

  _renderRow(rowData, rowId) {
    return(
      <View style={styles.cellContentView}>
        <Text style={styles.titleLable}>{rowData + "      " + rowId}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.topViewItem}/>
          <View style={styles.topViewItem1}/>
          <View style={styles.topViewItem2}/>
        </View>

        <View style={styles.centerView}>
          <View style={styles.centerViewItem1}></View>
          <View style={styles.centerViewItem2}></View>
          <View style={styles.centerViewItem3}></View>
        </View>

        <View style={styles.bottomView}>
          <ListView style={styles.listViewStyle}
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, rowId)}
                    showsVerticalScrollIndicator={false}
                    />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#FD5056',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  topViewItem: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
  topViewItem1: {
    width: 60,
    height: 80,
    backgroundColor: 'blue',
  },
  topViewItem2: {
    width: 60,
    height: 100,
    backgroundColor: 'black',
  },
  centerView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9b9b9b',
  },
  centerViewItem1: {
    flex: 1,
    backgroundColor: 'cyan',
    height: 60,
    borderBottomLeftRadius: 60 * 0.1,
  },
  centerViewItem2: {
    flex: 2,
    height: 80,
    backgroundColor: 'yellow',
    borderBottomLeftRadius: 80 * 0.1,
  },
  centerViewItem3: {
    flex: 3,
    height: 100,
    backgroundColor: 'red',
    borderBottomLeftRadius: 100 * 0.1,
  },
  bottomView: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  listViewStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    flex: 5,
  },
  cellContentView: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleLable: {
    textAlign: 'left',
    fontSize: 16,
    color: '#fd5056',
  }
});

AppRegistry.registerComponent('FlexboxDemo', () => FlexboxDemo);
