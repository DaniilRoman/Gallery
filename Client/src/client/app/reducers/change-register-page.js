export default function (state = {username:"",password:"",name:"",email:""}, action) {
    switch (action.type) {
        case "CHANGE_REGISTER_PAGE":
            return action.payload;
            break;
        default:
            return state;
    }
}