export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const SET_INPUT = 'SET_INPUT';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function updateUser(id, data) {
    return {
        type: UPDATE,
        id: id,
        data: data
    };
}

export function deleteUser(id) {
    return {
        type: DELETE,
        id: id
    };
}

export function setInput(value) {
    return {
        type: SET_INPUT,
        input: value
    };
}

export function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data: data
    }

}