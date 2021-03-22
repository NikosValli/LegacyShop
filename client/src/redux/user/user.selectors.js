import {createSelector} from 'reselect';
const selectUser= state => state.user;
const selectName= state => state.user;

export const selectCurrentUser=createSelector(
    [selectUser],
    user=>user.currentUser
);

export const selectDisplayName=createSelector(
    [selectName],
    user=>user.displayName
);