import BaseUrl from '../../BaseUrl';
import axios  from 'axios';
let token = "token";
export const GetAll =()=>{
    var config = {
        method: 'get',
        url: BaseUrl + "/GetAll",
        headers: { 
          'Content-Type': 'application/json',
          "Authorization":"bearer "+token
        },
      };    
    
    return axios(config)
}
export const Add =(data)=>{
  var config = {
      method: 'post',
      url: BaseUrl + "/Add",
      headers: { 
        'Content-Type': 'application/json',
        "Authorization":"bearer "+token
      },
      data : data
    };    
  
  return axios(config)
}
export const Delete =(data)=>{
  var config = {
      method: 'delete',
      url: BaseUrl+"/Delete/"+data.id,
      headers: { 
        'Content-Type': 'application/json',
        "Authorization":"bearer "+token
      },
      data : data
    };    
  
  return axios(config)
}
export const Update =(data)=>{
    var config = {
        method: 'put',
        url: BaseUrl+"/Update/"+data.id,
        headers: { 
          'Content-Type': 'application/json',
          "Authorization":"bearer "+token
        },
        data : data
      };    
    
    return axios(config)
  }
