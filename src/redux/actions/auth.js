import users from "../../data/users.json";

export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";

export function login({ email, password }) {
  return dispatch => {
    /*
        simulation du processus du fetching from a REST API endpoint
        */
    dispatch({ type: ATTEMPT_LOGIN });
    const requestTime = Math.random() * 1500; //  0 a 1500ms
    setTimeout(() => {
      try {
        /*
         * here in a real api call we would get the token then
         * push it to localstorage,
         * but instead in this demo we retrieved whole user profile and added it to store + persist its ID
         */
        const user = users.filter(
          u => u.password === password && u.email === email
        )[0];

        if (!user) dispatch({ type: FAILED_LOGIN });
        else {
          dispatch({ type: SUCCESS_LOGIN, payload: user });
          localStorage.setItem("token", user.id);
        }
      } catch (Exception) {}
    }, requestTime);
  };
}

export const FETCH_USER = "FETCH_USER";

export const fetchUser = token => {
  return dispatch => {
    /*
        simulation du processus du fetching from a REST API endpoint
        */
    const requestTime = Math.random() * 1500; //  0 a 1500ms
    setTimeout(() => {
      try {
        const user = users.filter(u => u.id === token)[0];

        dispatch({ type: SUCCESS_LOGIN, payload: user });
      } catch (Exception) {}
    }, requestTime);
  };
};

export const LOGOUT = "LOGOUT";

export function logout() {
  // here we could also clear token from localstorage
  return { type: LOGOUT };
}
