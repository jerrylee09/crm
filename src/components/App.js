/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </Provider>
        );
    }
}
