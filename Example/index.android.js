'use strict';

var React = require('react-native');

var Snackbar = require('react-native-android-snackbar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var Example = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showSnackbarDefault}>
          <Text style={styles.label}>
            Click to show short snackbar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showSnackbarLong}>
          <Text style={styles.label}>
            Click to show longer snackbar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showSnackbarIndefinite}>
          <Text style={styles.label}>
            Click to show permanent snackbar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showSnackbarCustomAction}>
          <Text style={styles.label}>
            Click to show snackbar with custom action
          </Text>
        </TouchableOpacity>
      </View>
    );
  },

  showSnackbarDefault: function() {
    Snackbar.show('Hello World!');
  },

  showSnackbarLong: function() {
    var msg = 'This snackbar stays on screen for longer';
    Snackbar.show(msg, { duration: Snackbar.LONG });
  },

  showSnackbarIndefinite: function() {
    Snackbar.show('Click to dismiss this one', { duration: Snackbar.UNTIL_CLICK });
  },

  showSnackbarCustomAction: function() {
    Snackbar.show('This has a custom action:', {
      actionColor: '#FFCA00',
      actionLabel: 'CLICK',
      actionCallback: (() => Snackbar.show('Nice click!'))
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
});

AppRegistry.registerComponent('Example', () => Example);
