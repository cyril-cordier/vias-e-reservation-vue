 // const token = window.localStorage.getItem('token') || ""; 
 const url = "https://vias-e-reservation.herokuapp.com";


 const state = {
    
    createResponse:'',
    allWarnings:[],
    warningById:"",
    deleteResponse:'',
    modifyResponse:'',
    


     
 
 }
 const getters = {

    getCreateWarningResponse:(state)=>(state.createResponse),
    getAllWarnings:(state)=>(state.allWarnings),
    getWarningById:(state) => (state.warningById),
    getDeleteWarningResponse:(state)=>(state.deleteResponse),
    getModifyWarningResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createWarning({commit},obj){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
        {
            "userId":obj.userId,
            "targetId":obj.targetId,
            "content":obj.content,
            "subject":obj.subject,
            "status":"En attente"
    });


    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/warnings", requestOptions)
    .then(response => response.json())
    .then(result => commit('createWarningMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL WARNINGS 

    fetchAllWarnings({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/warnings", requestOptions)
          .then(response => response.json())
          .then(result => commit('allWarningsMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET WARNING BY ID 

    fetchWarningById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/warnings/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('warningByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY WARNING

    modifyWarning({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
                {"propName":"status","value":obj.status},
            
            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/warnings/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyWarningMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteWarning({commit},id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${url}/warnings/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteWarningMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE WARNING 

     createWarningMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH WARNINGS 

     allWarningsMutation:(state,allWarnings) => (state.allWarnings = allWarnings),
     warningByIdMutation:(state,warningById) => (state.warningById = warningById),

     // DELETE WARNING 

    deleteWarningMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY WARNING

    modifyWarningMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }