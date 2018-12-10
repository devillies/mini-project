import React, {Component} from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  myFavColor = {
    red: 'Red',
    blue: 'blue',
    green: 'green',
  };
  myFavSport = {
    soccer: 'Soccer',
    baseball: 'Baseball',
    basketball: 'Basketball',
  };
  render() {
    return (
      <MyContext.Provider
        value={{myFavColor: this.myFavColor, myFavSport: this.myFavSport}}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
class RadioGroup extends Component {
  render() {
    return (
      <div>
        <RadioItem />
      </div>
    );
  }
}
class RadioItem extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <span style={{fontSize: 20}}>My Favourite Color: </span>
              <div style={{height: 10}} />
              <input name={context.myFavColor} type="radio" />
              <span>{context.myFavColor.red}</span>
              <input name={context} type="radio" />
              <span>{context.myFavColor.blue}</span>
              <input name={context} type="radio" />
              <span>{context.myFavColor.green}</span>
              <div style={{height: 20}} />
              <span style={{fontSize: 20}}> My Favourite Sport: </span>
              <div style={{height: 10}} />
              <input name={context.myFavSport} type="radio" />
              <span>{context.myFavSport.soccer}</span>
              <input name={context.myFavSport} type="radio" />
              <span>{context.myFavSport.baseball}</span>
              <input name={context.myFavSport} type="radio" />
              <span>{context.myFavSport.basketball}</span>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
export {RadioGroup, MyProvider};
