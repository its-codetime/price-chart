import React from "react";
import CardList from "./CardList";
import { cards } from "./data";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards };
  }

  render() {
    return (
      <section className="pricing py-5">
        <CardList cards={this.state.cards} />
      </section>
    );
  }
}

export default App;
