const initialState = {
    isLoading: false,
    isError: false,
    email: "",
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                isLoading: action.payload,
                isError: false,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                email: action.payload.email,
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case "USER_REFRESH":
            return {
                ...state,
                isLoading: false,
                isError: false,
                email: localStorage.getItem("email")
            }
        default:
            return state;
    }
}
export default accountReducer;