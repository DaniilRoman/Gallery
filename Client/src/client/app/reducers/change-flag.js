export default function (state = true, action) {
    switch (action.type) {
        case "CHANGE_FLAG":
            return action.payload;
            break;
        default:
            return state;
    }
}