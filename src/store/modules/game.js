 // const token = window.localStorage.getItem('token') || ""; 
 const url = "https://gameproject-api.herokuapp.com";

 const state = {
    
    createResponse:'',
    allGames:[],
    gameById:"",
    deleteResponse:'',
    modifyResponse:'',
    


     
 
 }
 const getters = {

    getCreateGameResponse:(state)=>(state.createResponse),
    getAllGames:(state)=>(state.allGames),
    getGameById:(state) => (state.gameById),
    getDeleteGameResponse:(state)=>(state.deleteResponse),
    getModifyGameResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createGame({commit},obj){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
        {"name":obj.name,
        "categoryId":obj.categoryId,
        "description":obj.description,
        "inventory":obj.inventory,
        "images":obj.images,
        "nbPlayers":obj.nbPlayers,
        "minAge":obj.minAge,
        "userId":obj.userId,
        "available":obj.available,
        "status":obj.status
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/games", requestOptions)
    .then(response => response.json())
    .then(result => commit('createGameMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL GAMES 

    fetchAllGames({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/games", requestOptions)
          .then(response => response.json())
          .then(result => commit('allGamesMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET GAME BY ID 

    fetchGameById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/games/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('gameByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY GAME

    modifyGame({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"name","value":obj.name},
            {"propName":"categoryId","value":obj.categoryId},
            {"propName":"description","value":obj.description},
            {"propName":"inventory","value":obj.inventory},
            {"propName":"images","value":obj.images},
            {"propName":"nbPlayers","value":obj.nbPlayers},
            {"propName":"minAge","value":obj.minAge},
            {"propName":"userId","value":obj.userId},
            {"propName":"available","value":obj.available},
            {"propName":"status","value":obj.status},


            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/games/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyGameMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteGame({commit},id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${url}/games/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteGameMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE GAME 

     createGameMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH GAMES 

     allGamesMutation:(state,allGames) => (state.allGames = allGames),
     gameByIdMutation:(state,gameById) => (state.gameById = gameById),

     // DELETE GAME 

    deleteGameMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY GAME

    modifyGameMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }