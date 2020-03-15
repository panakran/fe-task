import { GET_POIS_MODEL } from '../constants/types';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import { sortByDistance, sortAlphabetically } from '../utils/distanceUtils';


export function setPois(poisModel) {
    return {
        type: GET_POIS_MODEL,
        payload: poisModel,
    };
}

export function getPois() {
    return async (dispatch) => {
        try {
            let poisModel = { user: { permission: null, location: null } };

            //GET POIS
            const apiReq = await fetch('https://warply.s3.amazonaws.com/data/test_pois.json', {
                method: 'GET'
            });
            poisModel.poisList = await apiReq.json();

            //GET USER PERMISION AND LOCATION
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            poisModel.user.permission = granted==="granted";



            if (poisModel.user.permission) {
                const getPosition = () => new Promise((resolve, reject) => Geolocation.getCurrentPosition(resolve, reject));
                const geoLocationResponse = await getPosition();
                poisModel.user.location = geoLocationResponse.coords
            }

            poisModel.poisList =
            poisModel.user.permission
                    ? sortByDistance(poisModel.user.location, poisModel.poisList)
                    : sortAlphabetically(poisModel.poisList);

            await dispatch(setPois(poisModel));
            return poisModel || {};
        } catch (error) {
            console.error('fetch error: ' + error);
        }
    };
}