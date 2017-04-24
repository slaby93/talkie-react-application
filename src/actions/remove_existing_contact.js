import removeExistingContactRequest from './../logic/remove_existing_contact'
import {
    REMOVE_EXISTING_FRIEND__STARTED,
    REMOVE_EXISTING_REQUEST_FAILURE,
    REMOVE_EXISTING_REQUEST_SUCCESS,
} from './../ducks/contacts'

export default function addNewContact(oldFriendID) {
    return (dispatch, getState) => {
        if (!oldFriendID) {
            return;
        }
        const state = getState();
        const myId = state.account.id;

        dispatch(REMOVE_EXISTING_FRIEND__STARTED());

        removeExistingContactRequest(myId, oldFriendID)
            .then(() => {
                dispatch(REMOVE_EXISTING_REQUEST_SUCCESS());
            }).catch((e) => {
            dispatch(REMOVE_EXISTING_REQUEST_FAILURE(e));
        })
    }
}