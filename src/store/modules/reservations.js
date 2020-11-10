const viastoken = window.localStorage.getItem('viastoken') || ""; 
 const url = "https://vias-e-reservation.herokuapp.com";


 const state = {
    
    createResponse:'',
    allReservations:[],
    reservationById:"",
    deleteResponse:'',
    modifyResponse:'',
    


     
 
 }
 const getters = {

    getCreateReservationResponse:(state)=>(state.createResponse),
    getAllReservations:(state)=>(state.allReservations),
    getReservationById:(state) => (state.reservationById),
    getDeleteReservationResponse:(state)=>(state.deleteResponse),
    getModifyReservationResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createReservation({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append( "Authorization", `Bearer ${viastoken}`);
        myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
        {
            "ownerId":obj.ownerId,
            "borrowerId":obj.borrowerId,
            "start":obj.start,
            "end":obj.end,
            "title":obj.title,
            "status": obj.status,
            "price":obj.price,
            "nbdays":obj.nbdays,
            "appartId":obj.appartId
    });


    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/reservations", requestOptions)
    .then(response => response.json())
    .then(result => {
        commit('createReservationMutation',result)
        console.log(result);
    })
    .catch(error => console.log('error', error));
    },

    // GET ALL RESERVATIONS 

    fetchAllReservations({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(url + "/reservations", requestOptions)
          .then(response => response.json())
          .then(result => commit('allReservationsMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET RESERVATION BY ID 

    fetchReservationById({commit},id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`${url}/reservations/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('reservationByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY RESERVATION

    modifyReservation({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append( "Authorization", `Bearer ${viastoken}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"ownerId","value":obj.ownerId},
            {"propName":"borrowerId","value":obj.borrowerId},
            {"propName":"start","value":obj.start},
            {"propName":"end","value":obj.end},
            {"propName":"appartId","value":obj.appartId},
            {"propName":"status","value":obj.status},
            {"propName":"title","value":obj.title},
            {"propName":"price","value":obj.price},
            {"propName":"nbdays","value":obj.nbdays},


            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/reservations/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyReservationMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteReservation({commit},id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`${url}/reservations/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteReservationMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE RESERVATION 

     createReservationMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH RESERVATIONS 

     allReservationsMutation:(state,allReservations) => (state.allReservations = allReservations),
     reservationByIdMutation:(state,reservationById) => (state.reservationById = reservationById),

     // DELETE RESERVATION 

    deleteReservationMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY RESERVATION

    modifyReservationMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }