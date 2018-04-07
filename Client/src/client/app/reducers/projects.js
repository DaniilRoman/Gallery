export default function (state = [], action) {
    switch (action.type) {
        case "NEW_PROJECTS":
            return action.payload;
            break;
        case "CHANGE_PROJECTS":
            return state.concat(action.payload);
            break;
        default:
            return state;
    }
}