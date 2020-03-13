import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/EvilIcons';
import { Textfield, MKColor, Button } from 'react-native-material-kit';
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20,
    },
});

// const AddButton = Button.coloredButtonText()
//     .withText('ADD')
//     .build();

class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Text>Plus</Text>
        )
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Add a new contact</Text>
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'First name...'}
                        tintColor={MKColor.Teal}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Last name...'}
                        tintColor={MKColor.Teal}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Phone number...'}
                        tintColor={MKColor.Teal}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Email...'}
                        tintColor={MKColor.Teal}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Company...'}
                        tintColor={MKColor.Teal}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Project...'}
                        tintColor={MKColor.Teal}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Notes...'}
                        tintColor={MKColor.Teal}
                    />
                    <View style={styles.addButton}>
                        {/*<AddButton />*/}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default connect(null, actions)(AddPerson);
