import { HIDE_ALERT, SHOW_ALERT } from "../types";

export function showAlertAction(alert) {
    return (dispatch) => {
        dispatch(showAlertError(alert));
    }
}

const showAlertError = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

export function hideAlertAction() {
    return (dispatch) => {
        dispatch(hideAlertError());
    }
}

const hideAlertError = () => ({
    type: HIDE_ALERT,
})