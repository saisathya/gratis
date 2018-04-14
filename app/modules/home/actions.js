import { Actions } from 'react-native-router-flux';
import { database } from '../../config/firebase';

export const employeesFetch = () => {

  return (dispatch) => {
    database.ref(`/events`)
      .on('value', snapshot => {
        dispatch({ type: 'events_fetch', payload: snapshot.val() });
      });
  };
};
