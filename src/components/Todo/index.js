import React, { Component } from "react";
import { View, Text } from "react-native";

import * as commonActionsCreators from "../../actions/";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    name: state.common.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    commonActions: bindActionCreators(commonActionsCreators, dispatch)
  };
};

class Todo extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.commonActions.newName("Sorteio finalizado");
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text>{this.props.name ? this.props.name : "NADA"}</Text>
      </View>
    );
  }
}

const Conn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default Conn;
