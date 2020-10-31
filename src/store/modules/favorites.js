 // const token = window.localStorage.getItem('token') || ""; 
 const url = "https://gameproject-api.herokuapp.com";

 const state = {
    
    createResponse:'',
    allFavorites:[],
    FavoriteById:"",
    deleteResponse:'',
    


     
 
 }
 const getters = {

    getCreateFavoriteResponse:(state)=>(state.createResponse),
    getAllFavorites:(state)=>(state.allFavorites),
    getFavoriteById:(state) => (state.favoriteById),
    getDeleteFavoriteResponse:(state)=>(state.deleteResponse),

   
 }
 const actions = {

    createFavorite({commit},obj){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
        {"userId":obj.userId,
        "gameId":obj.gameId,
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/favorites", requestOptions)
    .then(response => response.json())
    .then(result => commit('createFavoriteMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL FAVORITES (for a specified user) 

    fetchAllFavorites({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/favorites", requestOptions)
          .then(response => response.json())
          .then(result => commit('allFavoritesMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET FAVORITE BY ID 

    fetchFavoriteById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/favorites/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('favoriteByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    
    deleteFavorite({commit},id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${url}/favorites/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteFavoriteMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE FAVORITE 

     createFavoriteMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH FAVORITES 

     allFavoritesMutation:(state,allFavorites) => (state.allFavorites = allFavorites),
     favoriteByIdMutation:(state,favoriteById) => (state.favoriteById = favoriteById),

     // DELETE FAVORITE 

    deleteFavoriteMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }