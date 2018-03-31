export default function (state = {username:"",password:"",name:"",email:""}, action) {
    switch (action.type) {
        case "CHANGE_REGISTER_PAGE":
            if("username" in action.payload) state.username=action.payload.username;
            if("password" in action.payload) state.password=action.payload.password;
            if("name" in action.payload) state.name=action.payload.name;
            if("email" in action.payload) state.email=action.payload.email;
            return state;
            break;
        default:
            return state;
    }
}