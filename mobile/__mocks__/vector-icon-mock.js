const React = require('react');
const {Text} = require('react-native');

function FontAwesome6({name, ...props}) {
  return React.createElement(Text, props, name);
}

module.exports = {
  FontAwesome6,
  default: FontAwesome6,
};
