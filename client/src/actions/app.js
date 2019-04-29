import * as config from 'config'
import axios from 'axios'
import _ from 'underscore';





export const TRACK_USER = 'TRACK_USER';
export const SESSION_ID = 'SESSION_ID';
export const APP_LOAD = 'APP_LOAD';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const RESET = 'RESET';
export const SET_STATE = "SET_STATE";
export const SET_SORT = "SET_SORT";
export const USER_REPORT = 'USER_REPORT';
export const fileHeaderConfig = {headers:{'Content-Type': 'multipart/form-data'}};
export const headerConfig = {headers:{'Content-Type': 'application/json'}};

//axios.defaults.withCredentials = false;

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}


export function setFilter(formData){
    return (dispatch, getState) =>{
        const{app} = getState();
        const postData ={...app};
        postData['form_data'] = formData;
        postData['fil_options'] = initialState.fil_options;
        axios.get(`${API}`, {params:{...postData}})
            .then((res) => {
                dispatch({type:SET_FILTERS, payload:formData});
                dispatch({type:PING_TEST_SUCCESS, payload:res });

            })
            .catch((error) => {
                dispatch({type:PING_TEST_ERROR});
            });


    }}

    export function loginSubmit(values) {
    // username: item.username,
    //password: item.password

    return (dispatch) => {
       // dispatch(loggingIn());
        const request = axios.post(`${API}/checkPassword`, values , {withCredentials:true}).then(response => {
            dispatch(loginSuccess(response))
        }).catch(error => {
            console.log(error);

            // dispatch(loginError(message.message))
            dispatch(loginError("vish"))
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
        const request = axios.post(`${API}/checkSession`, values,{withCredentials:true}).then(response => {
            console.log(values.username);
            dispatch(sessionSuccess(response,values))
        }).catch(error => {
            const message = (error.request);
            dispatch(loginError(message))
        });
    }
}

export function setSort(filterState){
    return (dispatch, getState) =>{
        let state = {};
        const asc = 'asc';
        const desc = 'desc';
        const title = 'title';
        const date = 'date';
        const {app} =getState();
        const postData ={...app};


            if (filterState ==='title-asc') {
                postData['fil_options']['order'] = asc;
                postData['fil_options']['fil'] = title;
                state = {'fil':title, 'order':asc};
            }
            if (filterState ==='title-desc') {
                postData['fil_options']['order'] = desc;
                postData['fil_options']['fil'] = title;
                state = {'fil':title, 'order':desc};
            }
            if (filterState==='date-asc') {
                postData['fil_options']['order'] = 'asc';
                postData['fil_options']['fil'] = 'date';
                state = {'fil':date, 'order':asc};
            }
            if (filterState==='date-desc') {
                postData['fil_options']['order'] = 'desc';
                postData['fil_options']['fil'] = 'date';
                state = {'fil':date, 'order':desc};
            }

        axios.get(`${API}`, {params:{...postData}})
            .then((res) => {
                dispatch({type:SET_SORT, payload:state});
                dispatch({type:PING_TEST_SUCCESS, payload:res });

            })
            .catch((error) => {
                dispatch({type:PING_TEST_ERROR});
            });


    }}








export function setCurrPage(curr_page){
    return (dispatch, getState) =>{

        const {app}  = getState();
        const postData ={...app};
        postData['fil_options']['p_no'] = curr_page;
        axios.get(`${API}`, {params:{...postData}})
            .then((res) => {
                dispatch({type:SET_CURRENT_PAGE, payload:curr_page});
                dispatch({type:PING_TEST_SUCCESS, payload:res });

            })
            .catch((error) => {
                dispatch({type:PING_TEST_ERROR});
            });


        }}




export function incrPage(){
    return (dispatch, getState) =>{
        const {app:{fil_options:{p_no}}} = getState();
        const {app}  = getState();
        const postData = {...app};
        postData['fil_options']['p_no'] = p_no+1;
        axios.get(`${API}`, {params:{...postData}}, headerConfig)
            .then((res) => {
                dispatch({type:INCREMENT_PAGE, payload:p_no+1 });
                dispatch({type:PING_TEST_SUCCESS, payload:res });

            })
            .catch((error) => {
                dispatch({type:PING_TEST_ERROR});
            });


         }}


// form:{searchForm:{values}}
// const journal = values.journal || 'some default';


export function decrPage(){
    return (dispatch, getState) =>{
        const {app:{fil_options:{p_no}}} = getState();
        const {app} = getState();
        const postData = {...app};
        postData['fil_options']['p_no'] =p_no-1;
        axios.get(`${API}`, {params:{...postData}}, headerConfig)
            .then((res) => {
                dispatch({type:DECREMENT_PAGE, payload:p_no-1 });
                dispatch({type:PING_TEST_SUCCESS, payload:res });

            })
            .catch((error) => {
                dispatch({type:PING_TEST_ERROR});
            });


    }}

export function resetForm(){
    return (dispatch, getState) =>{
        const postData = {...initialState};
        axios.get(`${API}`, {params:{...postData}})
            .then((res) => {
                dispatch({type:RESET});
                dispatch({type:PING_TEST_SUCCESS, payload:res });

            })
            .catch((error) => {
                dispatch({type:PING_TEST_ERROR});
            });
    }}

export function setFormState(state){
    return (dispatch) => {
        dispatch({type:SET_STATE, payload: state});
        }
    }


export function fetchSignedUrl(fileName,files) {
  return dispatch => {



    const postData = {
      "bucket_name":      config.S3ROOTFOLDER,
      "region":           config.S3REGION,
      "expiration":       3600,
      "key":              fileName,
      "endpoint_url":     config.ENDPOINTS['s3BucketRoot']
    };

    axios.post(config.ENDPOINTS['signedUrl'], postData, fileHeaderConfig)
    .then((resp) => {
      dispatch({type: FETCH_SIGNED_URL,payload: resp.data});
      dispatch(postFile(files))
    })
    .catch((err) => {
      console.error("signed url error: ", err);
    })

  }
}


export function randStr(){
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
}
export function createSession(){
    let session =  randStr() + randStr() + '-' + randStr() + '-' + randStr() + '-' + randStr() + '-' + randStr() + randStr() + randStr();

    return (dispatch, getState) => {
        const {app:{sessionId}} = getState();
        if(sessionId !==""){
            return
        }
        axios.post(`${API}/session`, {'session':session})
            .then((res) => {
                dispatch({type:SESSION_ID, payload:session})

            })
            .catch((err) => {
                console.error("signed url error: ", err);
            })


    };



}

export function trackUser(link,sessionId){
   const  postData = {
        'link':link,
        'session':sessionId
    };
    return (dispatch, getState) => {
        axios.post(`${API}/track`, postData)
            .then((resp) => {
                dispatch({type:TRACK_USER})
            })
            .catch((err) => {
                console.error("signed url error: ", err);
            })
    };
}


export function userReport(interval){
    const postData = {
        'interval': interval
    };
    return (dispatch, getState) =>{
        axios.get(`${API}/report`, {params:postData, headers:{'Content-Type': 'application/json'}})
            .then((res) => {
                dispatch({type:USER_REPORT, payload:res})
            })
            .catch((err) => {
                console.error("report Error: ", err);
            })

    }


}




export default { loadApp }
