export default function (state = 0, action) {
    switch (action.type) {
        case "CHANGE_COUNT_IMAGES":
            return action.payload;
            break;
        default:
            return state;
    }
}