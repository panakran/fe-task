export const crowDistanceCalc = (latA, lonA, latB, lonB) => {

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
