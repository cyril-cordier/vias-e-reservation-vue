const viastoken = window.localStorage.getItem('viastoken') || ""; 
 const url = "https://vias-e-reservation.herokuapp.com";


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
        myHeaders.append( "Authorization", `Bearer ${viastoken}`);
        myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
        {
            "comment":obj.comment,
            "mark":obj.mark,
            "userId":obj.userId,
            "profileId":obj.profileId,
            "appartId":obj.appartId
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
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(url + "/reviews", requestOptions)
          .then(response => response.json())
          .then(result => commit('allReviewsMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET REVIEW BY ID 

    fetchReviewById({commit},id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
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
        myHeaders.append( "Authorization", `Bearer ${viastoken}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"comment","value":obj.comment},
            {"propName":"mark","value":obj.mark},
            {"propName":"userId","value":obj.userId},
            {"propName":"profileId","value":obj.profileId},
            {"propName":"appartId","value":obj.appartId},


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
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
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