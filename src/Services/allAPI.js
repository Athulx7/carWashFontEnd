import { commonAPI } from "./commonAPI"
import {BASE_URL} from "./baseURL"

export const registerAPI = async(userdetail)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,userdetail,'')
}

export const loginApi = async(userdetail)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,userdetail,'')
}




//admin 

export const getAllusers = async()=>{
    return await commonAPI("GET",`${BASE_URL}/admin/getusers`,'','')
}

export const addOwnerByAdmin = async(ownerdetail)=>{
    return await commonAPI("POST",`${BASE_URL}/admin/addowner`,ownerdetail,'')
}

export const deleteAddedOWnerAPI = async(ownerID)=>{
    return await commonAPI("DELETE",`${BASE_URL}/admin/deleteowner/${ownerID}`,{},'')
}





//owner

export const addCenterDetails = async(centerdetails,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/owner/addcenterdetails`,centerdetails,reqHeader)
}

export const specifOwnerCenter = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/owner/specifOwnerCenter`,"",reqHeader)
}


export const editCenterDetails = async(centerID,editedDetails,reqHeader) =>{
    return await commonAPI("PUT",`${BASE_URL}/owner/editCenter/${centerID}`,editedDetails,reqHeader)
}

//user