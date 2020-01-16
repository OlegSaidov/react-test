import Immutable from 'immutable'

const jsonStringRecursive = rawState => { // function that takes two arguments passed from serialize
  const item =Immutable.fromJS(rawState)
  let jsonTree={}
     
   jsonTree = item.map(item => {
     return(
       item.delete('type')
     )
   });  
  


  
    

  

 
   
 

  return JSON.stringify(jsonTree)
}

export default jsonStringRecursive
