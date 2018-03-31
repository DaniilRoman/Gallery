export default function (state = false, action) {
    switch (action.type) {
        case "CHANGE_FLAG":
            return action.payload;
            break;
        default:
            return state;
    }
}