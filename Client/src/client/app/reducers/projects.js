export default function (state = [], action) {
    switch (action.type) {
        case "CHANGE_PROJECTS":
            return action.payload;
            break;
        default:
            return state;
    }
}