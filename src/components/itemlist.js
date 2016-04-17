import React, { Component, PropTypes } from 'react';
import Item from './item';

export default class ItemList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    return(
      <div>
        {
          this.props.items.map((item, index) => {
            return <Item {...item}
                  key={index} />
          }).reverse()
        }
      </div>
    )
  }
}
