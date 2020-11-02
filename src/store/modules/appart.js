 // const token = window.localStorage.getItem('token') || ""; 
 const url = "https://vias-e-reservation.herokuapp.com";

 const state = {
    
    createResponse:'',
    allApparts:[],
    appartById:"",
    deleteResponse:'',
    modifyResponse:'',
    


     
 
 }
 const getters = {

    getCreateAppartResponse:(state)=>(state.createResponse),
    getAllApparts:(state)=>(state.allApparts),
    getAppartById:(state) => (state.appartById),
    getDeleteAppartResponse:(state)=>(state.deleteResponse),
    getModifyAppartResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createAppart({commit},obj){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
        {"name":obj.name,
        "description":obj.description,
        "inventory":obj.inventory,
        "images":obj.images,
        "nbPlayers":obj.nbPlayers,
        "userId":obj.userId,
        "available":obj.available,
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/appartements", requestOptions)
    .then(response => response.json())
    .then(result => commit('createAppartMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL APPARTS 

    fetchAllApparts({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/appartements", requestOptions)
          .then(response => response.json())
          .then(result => commit('allAppartsMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET APPART BY ID 

    fetchAppartById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/appartements/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('appartByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY APPART

    modifyAppart({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"name","value":obj.name},
            {"propName":"description","value":obj.description},
            {"propName":"inventory","value":obj.inventory},
            {"propName":"images","value":obj.images},
            {"propName":"nbPlayers","value":obj.nbPlayers},
            {"propName":"userId","value":obj.userId},
            {"propName":"available","value":obj.available},


            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/appartements/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyAppartMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteAppart({commit},id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${url}/appartements/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteAppartMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE APPART 

     createAppartMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH APPARTS 

     allAppartsMutation:(state,allApparts) => (state.allApparts = allApparts),
     appartByIdMutation:(state,appartById) => (state.appartById = appartById),

     // DELETE APPART 

    deleteAppartMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY APPART

    modifyAppartMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }