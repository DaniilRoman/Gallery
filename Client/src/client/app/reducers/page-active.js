export default function (state=1, action) {
    switch (action.type) {
        case "CHANGE_ACTIVE_PAGE":
            return action.payload;
            break;
        default:
            return state;
    }
}