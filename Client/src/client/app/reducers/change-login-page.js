export default function (state = { username: "", password: ""}, action) {
    switch (action.type) {
        case "CHANGE_LOGIN_PAGE":
            if ("username" in action.payload) state.username = action.payload.username;
            if ("password" in action.payload) state.password = action.payload.password;
            return state;
            break;
        default:
            return state;
    }
}