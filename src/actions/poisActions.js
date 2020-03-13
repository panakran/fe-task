import { GET_POIS_MODEL } from '../constants/types';

export function setPois(poisModel) {
    return {
        type: GET_POIS_MODEL,
        payload: poisModel,
    };
}

export function getPois() {
    return async (dispatch) => {
        try {
            let poisModel;
            poisModel.user = null

            //GET POIS
            const apiReq = await fetch('https://warply.s3.amazonaws.com/data/test_pois.json', {
                method: 'GET'
            });
            poisModel.poisList = await apiReq.json();

            //GET USER PERMISION ANDLOCATION
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            poisModel.user.permission = status === 'granted';

            let response = await Location.getCurrentPositionAsync({});
            poisModel.user.location = response.coords;


            await dispatch(setPois(poisModel));
            return poisModel || {};
        } catch (error) {
            console.error('fetch error: ' + error);
        }
    };
}