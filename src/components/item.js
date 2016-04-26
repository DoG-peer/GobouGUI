import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText, TextField} from 'material-ui';
export default class Item extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  state = {
    comment: ""
  };

  _updateComment() {
    let that = this;
    return (e) => {
      that.setState({comment: e.target.value});
    };
  }
  render() {
    return (
      <Card>
        <CardTitle
          title={this.props.text}
          subtitle="plugin name"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <TextField
            multiLine={true}
            rows={1}
            rowsMax={4}
            fullWidth={true}
            value={this.state.comment}
            onChange={this._updateComment()}/>
        </CardText>
      </Card>
    );
  }
}
