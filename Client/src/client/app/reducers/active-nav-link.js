export default function (state = ["nav-link active", "nav-link"], action) {
    switch (action.type) {
        case "CHANGE_ACTIVE_NAV_LINK":
            return action.payload;
            break;
        default:
            return state;
    }
}