import React from "react";
import Item from "./item";

class Items extends React.Component {
  render() {

    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} />
        ))}
      </main>
    );
  }
}

export default Items;
