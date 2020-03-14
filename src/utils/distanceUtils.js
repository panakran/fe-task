const calcCrowDistance = (latA, lonA, latB, lonB) => {

    const toRad = coord => (coord * Math.PI) / 180;
    const R = 6371; // Earth R in km
    const dLat = toRad(latB - latA);
    const dLon = toRad(lonB - lonA);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(toRad(latA)) *
        Math.cos(toRad(latB));
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d;
};

export const sortByDistance = (currentLocation, poisList) => {

    const distanceFromCurrentLocation = (lat, lon) =>
        calcCrowDistance(currentLocation.latitude, currentLocation.longitude, lat, lon);

    return poisList
        .map(e => {
            return {
                ...e,
                distance: distanceFromCurrentLocation(Number(e.latitude), Number(e.longitude))
            };
        })
        .sort((a, b) => a.distance - b.distance);

};

export const sortAlphabetically = (poisList) => poisList.sort((a, b) => ("" + a.address).localeCompare(b.address));