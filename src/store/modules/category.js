 // const token = window.localStorage.getItem('token') || ""; 
 const url = "https://gameproject-api.herokuapp.com";
 const state = {
    
    createResponse:'',
    allCategories:[],
    categoryById:"",
    deleteResponse:'',
    modifyResponse:'',
    
     
 
 }
 const getters = {

    getCreateCategoryResponse:(state)=>(state.createResponse),
    getAllCategories:(state)=>(state.allCategories),
    getCategoryById:(state) => (state.categoryById),
    getDeleteCategoryResponse:(state)=>(state.deleteResponse),
    getModifyCategoryResponse:(state)=>(state.modifyResponse),

   
 }
 const actions = {

    createCategory({commit},obj){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
        {
        "name":obj.name,
        
    });


    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url + "/categories", requestOptions)
    .then(response => response.json())
    .then(result => commit('createCategoryMutation',result))
    .catch(error => console.log('error', error));
    },

    // GET ALL CATEGORIES 

    fetchAllCategories({commit}){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url + "/categories", requestOptions)
          .then(response => response.json())
          .then(result => commit('allCategoriesMutation',result))
          .catch(error => console.log('error', error));
    },

    // GET CATEGORIE BY ID 

    fetchCategoryById({commit},id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/categories/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('categoryByIdMutation',result))
          .catch(error => console.log('error', error));
    },

    //MODIFY CATEGORIE

    modifyCategory({commit},obj){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            [
            {"propName":"name","value":obj.name},
            


            ]);

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${url}/categories/${obj.id}`, requestOptions)
        .then(response => response.json())
        .then(result => commit('modifyCategoryMutation',result))
        .catch(error => console.log('error', error));
    },
    deleteCategory({commit},id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${url}/categories/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('deleteCategoryMutation',result))
          .catch(error => console.log('error', error));
    }



 }

 const mutations = {
     // CREATE CATEGORIE 

     createCategoryMutation:(state,createResponse) =>(state.createResponse = createResponse),

    // FETCH CATEGORIES 

     allCategoriesMutation:(state,allCategories) => (state.allCategories = allCategories),
     categoryByIdMutation:(state,categoryById) => (state.categoryById = categoryById),

     // DELETE CATEGORIE 

    deleteCategoryMutation:(state,deleteResponse) => (state.deleteResponse = deleteResponse),

    //MODIFY CATEGORIE

    modifyCategoryMutation:(state,modifyResponse) => (state.modifyResponse = modifyResponse),
 }
 
 
 
 export default{
     state,
     getters,
     actions,
     mutations,
 }