import React,{Component} from 'react';
import { connect } from 'react-redux';
import { employeeUpdate,employeeCreate } from '../actions';
import {Cards,CardSection,Button,Input} from './common';
import EmployeeForm from './EmployeeForm';

class Create extends Component {
  onButtonPress(){
    const {name,phone,shift} = this.props;

    this.props.employeeCreate({name,phone,shift});
  };

  render() {
    // console.log(this.props.employee)

    return (
      <Cards>
            <EmployeeForm {...this.props} />

            <CardSection >
              <Button onPress={this.onButtonPress.bind(this)}>
                Create
              </Button>
            </CardSection>
      </Cards>
    );
  }
}


const mapStateToProps = (state) => {
  const { name,phone,shift } = state.employeeForm;

  return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(Create);
