const viastoken = window.localStorage.getItem('viastoken') || ""; 
 const url = "https://vias-e-reservation.herokuapp.com";


 const state = {
    
    createResponse:'',
    allContents:[],
    contentById:"",
    deleteResponse:'',
    modifyResponse:'',
    


     
 
 }
 const getters = {

    getCreateContentResponse:(state)=>(state.createResponse),
    getAllContents:(state)=>(state.allContents),
    getContentById:(state) => (state.contentById),
    getDeleteContentResponse:(state)=>(state.deleteResponse),
    getModifyContentResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createContent({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append( "Authorization", `Bearer ${viastoken}`);
        myHeaders.append("Content-Type", "application/json");
console.log(obj);
var raw = JSON.stringify(
        {
            "title":obj.title,
            "content":obj.content,
            "visible":obj.visible,
    });
console.log(raw);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/contents", requestOptions)
    .then(response => response.json())
    .then(result => commit('createContentMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL CONTENTS 

    fetchAllContents({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/contents", requestOptions)
          .then(response => response.json())
          .then(result => commit('allContentsMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET CONTENT BY ID 

    fetchContentById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/contents/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('contentByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY CONTENT

    modifyContent({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append( "Authorization", `Bearer ${viastoken}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"title","value":obj.title},
            {"propName":"content","value":obj.content},
            {"propName":"visible","value":obj.visible},
            
            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/contents/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyContentMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteContent({commit},id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${viastoken}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`${url}/contents/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteContentMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE CONTENT 

     createContentMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH CONTENTS 

     allContentsMutation:(state,allContents) => (state.allContents = allContents),
     contentByIdMutation:(state,contentById) => (state.contentById = contentById),

     // DELETE CONTENT 

    deleteContentMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY CONTENT

    modifyContentMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }