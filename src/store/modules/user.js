const token = window.localStorage.getItem('token') || ""; 
const url = "https://vias-e-reservation.herokuapp.com";

const state = {
    registerResponse : "",
    loginResponse:"",
    allUsers:[],
    userMe:"",
    userById:'',
    deleteResponse:'',
    modifyResponse:'',
    modifyPwdResponse:'',
    

}
const getters = {
    getRegisterResponse:(state) =>(state.registerResponse),
    getLoginResponse:(state) =>(state.loginResponse),
    getAllUsers:(state) => (state.allUsers),
    getUserMe:(state) => (state.userMe),
    getUserById:(state) => (state.userById),
    getDeleteResponse:(state)=>(state.deleteResponse),
    getModifyResponse:(state)=>(state.modifyResponse),
    getModifyPwdResponse:(state)=>(state.modifyPwdResponse)

}
const actions = {

    // REGISTER A USER 
register({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email":obj.email,
            "password":obj.password,
            "username":obj.username,
            "street":obj.street,
            "zip":obj.zip,
            "number":obj.number,
            "city":obj.city,
            "avatar":obj.image,
            "lat": obj.lat,
            "lng": obj.lng
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(url + "/users/register", requestOptions)
        .then(response => response.json())
        .then(result => {commit('registerMutation',result)
       
    })
        .catch(error => console.log('error', error));
            },

// LOGIN ACTION 
    
login({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":obj.email,"password":obj.password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(url+ "/users/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            commit('loginMutation',result)
            if(result.success){
                localStorage.setItem('token',result.token);

                setTimeout(function () {
    window.location.href="/"
    }); 
            }
           
                        
        })
        .catch(error => console.log('error', error));
},

// RETRIEVE ALL USERS  

fetchAllUsers({commit}){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(url+ "/users", requestOptions)
        .then(response => response.json())
        .then(result => commit('allUsersMutation',result))
        .catch(error => console.log('error', error));
},


// FETCH USER ME 
    
fetchUserMe({commit}){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(url+ "/users/me", requestOptions)
    .then(response => response.json())
    .then(result => commit('userMeMutation',result))
    .catch(error => console.log('error', error));
    },

// FETCH USER BY ID 

fetchUserById({commit},id){

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${url}/users/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('userByIdMutation',result))
        .catch(error => console.log('error', error));


},

// DELETE USER BY ID 

deleteUser({commit},id){
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(`${url}/users/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('deleteUserMutation',result))
        .catch(error => console.log('error', error));
},

// MODIFY USER BY ID 


modifyUser({commit},obj){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
    [
    {"propName":"username","value":obj.username},
    {"propName":"email","value":obj.email},
    {"propName":"street","value":obj.street},
    {"propName":"zip","value":obj.zip},
    {"propName":"number","value":obj.number},
    {"propName":"city","value":obj.city},
    {"propName":"avatar","value":obj.avatar},
    {"propName":"lat","value":obj.lat},
    {"propName":"lng","value":obj.lng},
    {"propName":"is_admin","value":obj.is_admin},
    ]
);

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${url}/users/${obj.id}`, requestOptions)
.then(response => response.json())
.then(result => commit('modifyUserMutation',result))
.catch(error => console.log('error', error));
},

// MODIFY USER PASSWORD BY ID 


modifyPwd({commit},obj){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
    [
    {"propName":"password","value":obj.password},
    ]
);

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${url}/users/${obj.id}`, requestOptions)
.then(response => response.json())
.then(result => commit('modifyUserPwdMutation',result))
.catch(error => console.log('error', error));
}


}

const mutations = {

// LOGIN & REGISTER SEND DATA FROM API TO STATE

registerMutation:(state,registerResponse) =>(state.registerResponse = registerResponse),
loginMutation:(state,loginResponse) => (state.loginResponse = loginResponse),

// SEND USER DATA FROM API TO STATE

allUsersMutation:(state,allUsers) => (state.allUsers = allUsers),
userMeMutation:(state,userMe) => (state.userMe = userMe),
userByIdMutation:(state,userById) => (state.userById = userById),

// DELETE USER 

deleteUserMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),


//MODIFY USER 

modifyUserMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
modifyUserPwdMutation:(state,modifyPwdResponse) => (state.modifyPwdResponse = modifyPwdResponse)


}



export default{
    state,
    getters,
    actions,
    mutations,
}