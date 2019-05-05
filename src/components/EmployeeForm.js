import React,{Component} from 'react';
import { View,Text,Picker } from 'react-native';
import {connect} from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection,Input } from './common';

class EmployeeForm extends Component{
  render() {
    return(
        <View>
            <CardSection>
              <Input
                label="Name"
                placeholder="jane"
                value={this.props.name}
                onChangeText = {value => this.props.employeeUpdate({ prop:'name',value }) }
              />
            </CardSection>

            <CardSection>
              <Input
                label="Phone"
                placeholder="555-555-5555"
                value={this.props.phone}
                onChangeText = {value => this.props.employeeUpdate({ prop:'phone',value })}
              />
            </CardSection>

            <CardSection >
                <Picker
                  style={{ flex:1}}
                  selectedValue={this.props.shift}
                  onValueChange = {value => this.props.employeeUpdate({prop:'shift',value})}
                >
                  <Picker.Item label="Shift Monday" value="Monday" />
                  <Picker.Item label="Shift Tuesday" value="Tuesday" />
                  <Picker.Item label="Shift Wednesday" value="Wednesday" />
                  <Picker.Item label="Shift Thursday" value="Thursday" />
                  <Picker.Item label="Shift Friday" value="Friday" />
                  <Picker.Item label="Shift Saturday" value="Saturday" />
                  <Picker.Item label="Shift Sunday" value="Sunday" />
                </Picker>
            </CardSection>
        </View>
    )
  }
}

const mapStateToProps= (state) => {
  const {name,phone,shift} = state.employeeForm;

  return { name,phone,shift };
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);
