import React from 'react';

const initialGlobalState = {
  toDoLists: []
};

const GlobalState = React.createContext();

class Global extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globals: initialGlobalState,
    };
  }

  componentDidMount() {
    GlobalState.set = this.setGlobalState;
    GlobalState.get = this.getGlobalState;
  }

  setGlobalState = (data = {}) => {
    this.setState((prevState) => ({
      globals: { ...prevState.globals, ...data }
    }));
  };

  getGlobalState = () => {
    return this.state.globals;
  };

  render() {
    const { globals } = this.state;
    const { children } = this.props;
    return (
      <GlobalState.Provider value={globals}>
        {children}
      </GlobalState.Provider>
    );
  }
}

const useGlobalState = () => React.useContext(GlobalState);

export { Global, useGlobalState, GlobalState };
