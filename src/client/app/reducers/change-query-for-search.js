export default function (state="Russia", action) {
    switch (action.type) {
        case "CHANGE_QUERY_FOR_SEARCH":
            return action.payload;
            break;
        default:
            return state;
    }
}