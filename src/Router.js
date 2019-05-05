import React from 'react';
import { Scene,Router,Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import Create from './components/Create';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop:60 }}>
      <Scene key="auth">
          <Scene  key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="main">
          <Scene
              onRight={() => Actions.CreateForm()}
              rightTitle="Add"
              key="list"
              component={EmployeeList}
              title="Employee List"
           />
           <Scene key="CreateForm" component={Create} title="Create Employee" />
           <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  )
};

export default RouterComponent;
