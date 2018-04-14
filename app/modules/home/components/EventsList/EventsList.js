import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import testData from '../../TestData';

class EventsList extends Component {


      componentWillMount() {
        console.log(JSON.parse(testData));
          //this.setState({ events:  testData });
      }

      renderEvents() {
        // return this.state.events.map((event) =>
        //     <EventDetail key={event.title} event={event} />
        //   );
        //
        // console.log(this.state);
        return JSON.parse(testData).map((event) => <EventDetail key={event.title} event={event} />)

      }

      render(){
          return(
            <ScrollView>
              {this.renderEvents()}
            </ScrollView>
          );
      }
    }

export default EventsList;
