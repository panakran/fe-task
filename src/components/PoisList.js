import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as poisActions from '../actions/poisActions';
import ListItem from './ListItem';

class PoisList extends Component {

  componentDidMount() {
    let { actions } = this.props;
    actions.getPois();
  }

  // render list item
  renderItem(poi) {
    return <ListItem poi={poi} />;
  }

  render() {
    const { poisModel } = this.props;
    return (
      <FlatList
        data={poisModel.poisList}
        renderItem={this.renderItem}
        keyExtractor={(poi => poi.id)}
      />
    );
  }
}

const mapStateToProps = state => ({
  poisModel: state.poisModel.poisModel,
});

const ActionCreators = Object.assign(
  {},
  poisActions
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoisList);