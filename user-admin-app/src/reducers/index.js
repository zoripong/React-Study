import { UPDATE, DELETE, SET_INPUT, RECEIVE_DATA } from '../actions';
import { combineReducers } from 'redux';

const initState = {
    input: "",
    users: [
        {
            id: 1,
            userId: "test",
            password: "test"
        },
        {
            id: 2,
            userId: "test2",
            password: "test2"
        }
    ], /* TODO axios */
    showUsers: [] /* TODO */
}

const searcher = (state = initState, action) => {
    switch (action.type) {
        case UPDATE:
            const updateResult = state.users.map(
                user => (user.id === action.id ? { ...user, ...action.data } : user)
            );
            return Object.assign({}, state, {
                users: updateResult,
                showUsers: updateResult.filter(user => user.userId.includes(state.input))/* [...users] 한번 해보자 */
            });
        case DELETE:
            const deleteResult = state.users.filter(user => user.id !== action.id);
            return Object.assign({}, state, {
                input: "",
                users: deleteResult,
                showUsers: deleteResult
            });
        case SET_INPUT:
            return Object.assign({}, state, {
                input: action.input,
                showUsers: state.users.filter(user => user.userId.includes(action.input))
            });
        case RECEIVE_DATA:
            console.log("호잇!");
            return Object.assign({}, state, {
                users: action.data,
                showUsers: action.data
            });
        default:
            return state;
    }
};


const searcherApp = combineReducers({
    searcher
});

export default searcherApp;