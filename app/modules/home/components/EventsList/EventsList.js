import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
// import EventsDetail from './EventsDetail'
import { employeesFetch } from '../../actions';


class EventsList extends Component {


      componentWillMount() {
          this.props.employeesFetch();

          this.createDataSource(this.props);
      }

      componentWillReceiveProps(nextProps) {
          this.createDataSource(nextProps);
      }

      createDataSource({ events }) {
          const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          });
          this.dataSource = ds.cloneWithRows(events);
      }

      // renderRow(event) {
      //     return <EventsDetail event={event} />;
      //   }

      render() {

        console.log(this.props);
          return (
          <View
              // enableEmptySections
              // dataSource={this.dataSource}
              // renderRow={this.renderRow}
          />
          );
      }
    }

    const mapStateToProps = state => {
      const events = _.map(state.events, (val, uid) => {
        return { ...val, uid };
      });

      return { events };
    };

export default connect(mapStateToProps, { employeesFetch })(EventsList);
