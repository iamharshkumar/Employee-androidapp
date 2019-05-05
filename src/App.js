import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    const config = {
    apiKey: 'AIzaSyBHmwe5ZciTvaGFXG-MyGXZVLsmm0LivF4',
    authDomain: 'manager-e81dc.firebaseapp.com',
    databaseURL: 'https://manager-e81dc.firebaseio.com',
    projectId: 'manager-e81dc',
    storageBucket: 'manager-e81dc.appspot.com',
    messagingSenderId: '246919947789'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
    return(
      <Provider store = {store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
