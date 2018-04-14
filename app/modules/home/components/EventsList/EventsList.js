import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { employeesFetch } from '../../actions';


class EventsList extends Component {


      componentWillMount() {
          this.props.employeesFetch();
          console.log('out');

          console.log('out');
      }
      render() {
          return (
            <ScrollView>

            </ScrollView>
          );
      }
    }


export default connect(null, { employeesFetch })(EventsList);
