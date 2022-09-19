import { myAPI } from "../../utils/api/callAPI";

export const loginRequest = (data) => {
    return {
        type: "LOGIN_REQUEST",
        payload: data
    }
}

export const loginSuccess = (email, token) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            email, token
        }
    }
}

export const loginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

export const userRefesh = () => {
    return {
        type: "USER_REFRESH",
    };
};
//middleware gọi api
export const loginUser = (email, password) => {
    return async function (dispatch) {
        dispatch(loginRequest(true));
        try {
            const response = await myAPI.post("/api/login", { email, password });
            if (response && response.data.token) {
                localStorage.setItem("token", response?.data.token);
                localStorage.setItem("email", email);
                dispatch(loginSuccess(email, response.data.token));
            }
            return response?.data;
        } catch (error) {
            dispatch(loginError(error))
        }
    }
}

export const refesh = () => {
    return function (dispatch) {
        dispatch(userRefesh());
    };
};