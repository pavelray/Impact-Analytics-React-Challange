import { createSelector } from 'reselect';

const userData = state => state.userData.data;

export const selectUserData = createSelector(
    [userData],
    data => data
)

export const selectUserCordinates = createSelector(
    [userData],
    data => data?.location?.coordinates
)

export const selectUserName = createSelector(
    [userData],
    data => `${data?.name?.title}. ${data?.name?.first} ${data?.name?.last}`
)

