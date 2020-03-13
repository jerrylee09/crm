// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="People" component={PeopleList} />
                <Tab.Screen name="Add" component={AddPerson} />
                <Tab.Screen name="Company" component={CompanyList} />
            </Tab.Navigator>
        );
    }
};

// export default TabNavigator;
// const TabNavigator = createBottomTabNavigator(
//     {
//         People: PeopleList,
//         Add: AddPerson,
//         Company: CompanyList,
//     },
//     {
//         initialRouteName: 'People',
//         tabBarOptions: {
//             activeTintColor: 'white',
//             inactiveTintColor: '#80cbc4',
//             showLabel: false,
//             showIcon: true,
//             style: {
//                 backgroundColor: '#26a69a'
//             }
//         },
//     }
// );
//
// export default createAppContainer(TabNavigator);
