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
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/PeopleReducer';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

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
