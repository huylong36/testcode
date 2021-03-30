export function addUserAction(user) {
    return {
        type: 'ADD_USER',
        addUser: user,
    }
}
export function editUserAction(editUser) {
    return {
        type: 'EDIT_USER',
        editUser: editUser,
    }
}
export function editUserActionOk(editUserOk) {
    return {
        type: 'EDIT_USER_OK',
        editUserOk: editUserOk,
    }
}
export function removeUserAction(removeUser) {
    return {
        type: 'REMOVE_USER',
        removeUser: removeUser,
    }
}
export function resetIndex(reset) {
    return {
        type: 'RESET_INDEX',
        reset: reset,
    }
}
export function locNguoiDungTheoTruong(userFilter) {
    return {
        type: 'USER_FILTER',
        userFilter: userFilter,
    }
}
export function timKiemUser(userSearch) {
    return {
        type: 'USER_SEARCH',
        userSearch: userSearch,
    }
}
export function reSearch(reSearch) {
    return {
        type: 'RE_SEARCH',
        reSearch: reSearch,
    }
}
export function pagination(pagination) {
    return {
        type: 'PAGE',
        pagination: pagination,
    }
}
