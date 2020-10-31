 // const token = window.localStorage.getItem('token') || ""; 
 const url = "https://gameproject-api.herokuapp.com";


 const state = {
    
    createResponse:'',
    allReviews:[],
    reviewById:"",
    deleteResponse:'',
    modifyResponse:'',
    
     
 
 }
 const getters = {

    getCreateReviewResponse:(state)=>(state.createResponse),
    getAllReviews:(state)=>(state.allReviews),
    getReviewById:(state) => (state.reviewById),
    getDeleteReviewResponse:(state)=>(state.deleteResponse),
    getModifyReviewResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createReview({commit},obj){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
        {
            "comment":obj.comment,
            "mark":obj.mark,
            "userId":obj.userId,
            "profileId":obj.profileId,
            "gameId":obj.gameId
    });


    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/reviews", requestOptions)
    .then(response => response.json())
    .then(result => commit('createReviewMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL REVIEWS 

    fetchAllReviews({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/reviews", requestOptions)
          .then(response => response.json())
          .then(result => commit('allReviewsMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET REVIEW BY ID 

    fetchReviewById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/reviews/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('reviewByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY REVIEW

    modifyReview({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"comment","value":obj.comment},
            {"propName":"mark","value":obj.mark},
            {"propName":"userId","value":obj.userId},
            {"propName":"profileId","value":obj.profileId},
            {"propName":"gameId","value":obj.gameId},


            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/reviews/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyReviewMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteReview({commit},id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${url}/reviews/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteReviewMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE REVIEW 

     createReviewMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH REVIEWS 

     allReviewsMutation:(state,allReviews) => (state.allReviews = allReviews),
     reviewByIdMutation:(state,reviewById) => (state.reviewById = reviewById),

     // DELETE REVIEW 

    deleteReviewMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY REVIEW

    modifyReviewMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }