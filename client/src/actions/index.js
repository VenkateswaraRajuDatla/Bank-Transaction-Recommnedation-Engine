import axios from 'axios';
export const LOGIN = 'login';

const ROOT_URL = 'http://localhost:3001';

function loggingIn() {
    return {
        type: LOGIN,
        payload: {
            loginStatus: false,
            username: "",
            password: "",
            isLoggingIn: true,
            errorMsg: ''
        }
    }
}


function loginError(message) {

    // console.log(message.message);
    return {
        type: LOGIN,
        payload: {
            loginStatus: false,
            username: "",
            password: "",
            userSession:"",
            isLoggingIn: false,
            errorMsg: message,
        }
    }
}

function signingIn() {
    return {
        type: "SIGNUP",
        payload: {
            registerStatus: false,
            username: null,
            password: null,
            isLoggingIn: true,
            errorMsg: ''
        }
    }
}

function signInSuccess(response) {

    localStorage.setItem('username', response.data.username);
    return {
        type: "SIGNUP",
        payload: {
            registerStatus: true,
            data: response.data,
            password: '',
            isLoggingIn: false,
            errorMsg: ''
        }
    }
}

function signInError(message) {

    // console.log(message.message);
    return {
        type: "SIGNUP",
        payload: {
            registerStatus: false,
            username: null,
            password: null,
            isLoggingIn: false,
            errorMsg: message,
        }
    }
}



function sessionSuccess(response,values) {
    console.log("session exisits");
    console.log(response);
    if (response.data.length>0) {

        //console.log(data.firstName);


        return {
            type: "session",
            payload: {
                userSession: response.data,
                sessionchecking: false

            }
        }
    }
    else {
        console.log("no session");
        return {
            type: "session",
            payload: {
                userSession: "",
                sessionchecking: false
            }

        }
    }
}
function sessionCleared(response) {
    return {
        type: "sessionclear",
        payload: {
            userSession: "",
            sessionchecking: false

        }
    }
}
function checkingSession(values) {

console.log("sessionchecking is set");
    return {
        type: "sessionchecking",
        payload: {
            loginStatus: false,
            username: values.username,
            password: values.username,
            userSession:values.username,
            isLoggingIn: false,
            errorMsg: "",

            sessionchecking: true,

        }
    }
}









function loginSuccess(response) {
    console.log("idi");
    console.log(response);
    if (response.data!="password not working") {
        const data = response.data[0];
        console.log(data.firstName);
        console.log("from login succcess");


        return {
            type: LOGIN,
            payload: {
                loginStatus: true,
                username: data.firstname,
                email:data.email,
                password: data.userPassword,
                isLoggingIn: false,
                errorMsg: '',
                userSession: data.firstName

            }
        }
    }
    else {
        console.log("incorrect password");
        return {
            type: LOGIN,
            payload: {
                loginStatus: false,
                username: "",
                password: "",
                isLoggingIn: false,
                errorMsg: "password incorrect"
            }

        }
    }
}




export function SignupRedirect() {

    return {
        type : "SignupRedirect"
        // this is same as newItem : newItem in ES6 Signup
    }
}

export function Signup(values) {
    // inputUsername: item.username,
    // inputPassword: item.password,
    // inputEmail: item.email
console.log("signup details");
console.log(values);

    return (dispatch) => {
        dispatch(signingIn());
        const request = axios.post(`${ROOT_URL}/registerUser`, values,).then(response => {
            console.log("after signup");
            console.log(response);
            dispatch(signInSuccess(response));
        }).catch(error => {
            const message = JSON.parse(error.request.response);
            dispatch(signInError(message.message))
        });
    }
}




export function loginSubmit(values) {
    // username: item.username,
    //password: item.password

    return (dispatch) => {
       // dispatch(loggingIn());
        const request = axios.post(`${ROOT_URL}/checkPassword`, values , {withCredentials:true}).then(response => {
            dispatch(loginSuccess(response))
        }).catch(error => {
            console.log(error);

            // dispatch(loginError(message.message))
            dispatch(loginError("vish"))
        });
    }
}

export function projectDetails(values) {
    // username: item.username,
    //password: item.password

    return (dispatch) => {
        var respub,resbid;
        const request = axios.post(`${ROOT_URL}/projDetails`, values).then(response => {
            console.log(values.username);
          /*  for(var i=0;i<response.data.length;i++)
            {
                while(response.data[i]!=null)
                {
                    respub[i]=response.data[i];
                }
                var j=0;
                i++;
                while(response.data[i]!=null)
                {
                    resbid[i]=response.data[i];
                }
            }*/

            dispatch(projSuccess(response,values))
        }).catch(error => {
            const message = JSON.parse(error.request.response);
            dispatch(loginError(message.message))
        });
    }
}





export function myprojectDetails(values) {
    // username: item.username,
    //password: item.password

    return (dispatch) => {
      var respub=[],resbid=[],respublen;
        const request = axios.post(`${ROOT_URL}/myprojDetails`, values).then(response => {
            console.log(values.username);
            var i=0,j=0,pub=0;
           console.log(response);
            //console.log(response.data.length);
              pub=response.data[response.data.length-1];
            for(i=0;i<pub;i++) {
            //console.log(response.data[i]);
                respub[i] = response.data[i];
            }
            console.log(respub);
                j=0;
            for(i=pub;i<response.data.length-1;i++)
            {
                    resbid[j] = response.data[i];
                    j++;
            }
            console.log(resbid);
            dispatch(myprojSuccess(response,respub,resbid,values))
        }).catch(error => {
           const message = JSON.parse(error.request.response);
            dispatch(loginError(message.message))
        });
    }
}
export function checkSession(values) {
    // username: item.username,
    //password: item.password
console.log("CHECKING");
    return (dispatch) => {
 dispatch(checkingSession(values));
   console.log("after checking");
        const request = axios.post(`${ROOT_URL}/checkSession`, values,{withCredentials:true}).then(response => {
            console.log(values.username);
            dispatch(sessionSuccess(response,values))
        }).catch(error => {
            const message = (error.request);
            dispatch(loginError(message))
        });
    }
}

export function clearSession(values) {
    // username: item.username,
    //password: item.password

    return (dispatch) => {

        const request = axios.post(`${ROOT_URL}/clearSession`, values,{withCredentials:true}).then(response => {
            console.log(values.username);
            dispatch(sessionCleared(response))
        }).catch(error => {
            const message = (error.request.response);
            dispatch(loginError(message.message))
        });
    }
}

function projSuccess(response,values) {
    console.log(response);
    if (response.data!= "projects not yet created") {
        const data = response.data;
        console.log(data.firstName);

       // localStorage.setItem('username', data.firstName);
        return {
            type: "projDetails",
            payload: {
                loginStatus: true,
                username: values.username,
                password: values.username,
                isLoggingIn: false,
                errorMsg: '',
                projects: response.data,
                userSession: values.username,
                sessionchecking: false,


            }
        }
    }
    else {
        console.log("incorrect userid");
        return {
            type: "projDetails",
            payload: {
                loginStatus: false,
                username: values.username,
                password: values.username,
                isLoggingIn: false,
                errorMsg: "password incorrect",
                userSession: values.username,
                sessionchecking: false,

            }

        }
    }
}
function myprojSuccess(response,respub,resbid,values) {
    console.log(response);
    if (response.data!= "projects not yet created") {
        const data = response.data;
        console.log(data.firstName);

        // localStorage.setItem('username', data.firstName);
        return {
            type: "myprojDetails",
            payload: {
                loginStatus: true,
                username: values.username,
                password: values.username,
                isLoggingIn: false,
                errorMsg: '',
                projects:response.data,
                pubprojects: respub,
                bidprojects:resbid,
                userSession: values.username,
                sessionchecking: false,


            }
        }
    }
    else {
        console.log("incorrect userid");
        return {
            type: "projDetails",
            payload: {
                loginStatus: false,
                username: values.username,
                password: values.username,
                isLoggingIn: false,
                errorMsg: "password incorrect",
                userSession: values.username,
                sessionchecking: false,

            }

        }
    }
}



export function logout() {
    return {
        type : "LOGOUT",
        payload: {
            isLoggedIn: false,
            username: null,
            password: null,
            isLoggingIn: false,
            errorMsg: '',
        }
    }
}

export function editProfile(values) {
    // return (dispatch) => {
    //     dispatch(signingIn());
    //     const request = axios.post(`${ROOT_URL}/signup`, values).then(response => {
    //         console.log("1");
    //         console.log(response.data.username);
    //         console.log("2");
    //         dispatch(signInSuccess(response));
    //     }).catch(error => {
    //         const message = JSON.parse(error.request.response);
    //         dispatch(signInError(message.message))
    //     });
    // }

    const request = axios.get(`${ROOT_URL}`);
    return{
        type : "PROFILE_EDIT",
        payload : request
    }
}
