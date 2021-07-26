import bent from 'bent';
// import * as Sentry from "@sentry/react";
const apiURL="https://api.unsplash.com"
export async function getSearchImage(key,term){
    const get= bent(`${apiURL}`,'GET','json',200);
    try {

        const response = await get(`/search?query=${term}&client_id=${key}`);
          
        return [null,response]
  
      } catch (error) {
  
        // const errorMessage = await error.json();
    
        // Sentry.captureException(errorMessage)
        
        // return[errorMessage,null]
        return [error,null]
          
      }
}
export async function getSingleImage(key,id){
    const get= bent(`${apiURL}`,'GET','json',200);
    try {

        const response = await get(`/photos/${id}?client_id=${key}`);
          
        return [null,response]
  
      } catch (error) {
  
        // const errorMessage = await error.json();
    
        // Sentry.captureException(errorMessage)
        
        // return[errorMessage,null]
        return [error,null]
          
      }
}