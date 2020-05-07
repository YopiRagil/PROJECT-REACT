const initialState = {
  full_name: "",
  email: "",
  api_key: "",
  login_status: false,
  userName: "",
  passWord: "",
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        full_name: action.payload.full_name,
        email: action.payload.email,
        api_key: action.payload.api_key,
        login_status: true,
      };
    case "LOGOUT_USER":
      return {
        ...userState,
        login_status: false,
      };
    default:
      return userState;
  }
}
