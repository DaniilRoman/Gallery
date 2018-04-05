export default function (state = [], action) {
    switch (action.type) {
        case "CHANGE_IMAGE_ARRAY":      
            return action.payload;
            break;
        default:
            return state;
    }
}