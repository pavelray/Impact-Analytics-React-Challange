const formarObject = (objectToFormat) => {
    const keys = Object.keys(objectToFormat);
    const values = Object.values(objectToFormat);

    const newValue = keys.map((key,index) => {
        return `${key}: ${values[index]}`
    })

    return newValue.toString();
}

export const formatResponceToTableData = (userData) => {
    const {city, state, country, postcode} = userData.location;
    const formattedData = [
        {
            name: `${userData?.name?.title}. ${userData?.name?.first} ${userData?.name?.last}`,
            gender: userData.gender,
            location: formarObject({city, state, country, postcode}),
            coordinates: formarObject(userData.location.coordinates),
            email: userData.email,
            dob: formarObject(userData.dob),
            registered: formarObject(userData.registered),
            phone:userData.phone,
            cell:userData.cell,
            nat: userData.nat,
            image: userData.picture
        }

    ];

    return formattedData;
}