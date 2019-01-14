import React from "react";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
class App extends React.Component {
  state = {
    currentRoute: "Home"
  };
  _navigateTo = route => {
    this.setState({ currentRoute: route });
  };
  render() {
    let { currentRoute } = this.state;
    switch (currentRoute) {
      case "Home": {
        return <MainPage navigateTo={this._navigateTo} />;
      }
      case "Search": {
        return <SearchPage navigateTo={this._navigateTo} />;
      }
    }
  }
}
export default App;
