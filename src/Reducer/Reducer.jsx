var initState = {
    listUser: [],
    editIndex: -1,
    listUserLoc: [],
    type: 0,
    userSearch: [],
    page: 0,
}

function setUserToLocalStorage(users) {
    localStorage.setItem('user', JSON.stringify(users))
}

const useReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            if (state.editIndex > -1) {
                state.listUser[state.editIndex] = action.addUser
            } else {
                state.listUser.push(action.addUser)
            }
            setUserToLocalStorage(state.listUser)
            return {
                ...state, listUser: [...state.listUser], editIndex: -1,
            }
        case 'EDIT_USER':
            return { ...state, editUser: action.editUser };
        case 'EDIT_USER_OK':
            // localStorage.setItem('user', JSON.stringify(state.listUser))
            setUserToLocalStorage(state.listUser)
            return { ...state, editIndex: action.editUserOk }
        case 'REMOVE_USER':
            let removeUser = state.listUser.filter((index) => index !== action.removeUser)
            // localStorage.setItem('user', JSON.stringify(removeUser))
            setUserToLocalStorage(removeUser)
            return {
                ...state,
                listUser: removeUser
            }
        case 'RESET_INDEX':
            return {
                ...state,
                editIndex: -1,
            }
        case 'USER_FILTER':
            return {
                ...state, listUserLoc: action.userFilter, type: 1,
            }
        case 'USER_SEARCH':
            return {
                ...state, userSearch: [action.userSearch], type: 2,
            }
        case 'RE_SEARCH':
            return {
                ...state, reSearch: action.reSearch,
                type: 0,
            }
        case 'PAGE':
            return {
                ...state, pagination: action.pagination,
            }

        default:
            let userDB = localStorage.getItem('user')
            if (userDB) {
                state.listUser = JSON.parse(userDB)
            } else {
                state.listUser = []
            }

            return state;
    }
}
export default useReducer;