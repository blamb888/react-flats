import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectedFlat={props.selectedFlat}
        />
      );
    });
  };

  render() {
    return (
      <div className="flat-list">
        {renderList()}
      </div>
    );
  }
}

export default FlatList;
