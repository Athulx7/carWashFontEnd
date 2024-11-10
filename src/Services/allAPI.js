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

export const getOwnerComplaint = async()=>{
    return await commonAPI("GET",`${BASE_URL}/admin/getcomplaints`,'','')
}


export const getWebsiteReviewAdmin = async()=>{
    return await commonAPI("GET",`${BASE_URL}/admin/getwebreview`,'','')
}

export const getMessagesAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/admin/getmessage`,'','')
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

export const addOwnerComplaint = async(complaint,reqHeader) =>{
    return await commonAPI("POST",`${BASE_URL}/owner/addcomplaint`,complaint,reqHeader)
}


export const getReviewForcenter = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/owner/getReviews`,'',reqHeader)
}

export const getBookingForCenter = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/owner/getBookingdetails`,'',reqHeader)
}


export const getSearchForAvailbli = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/owner/availablity`,'',reqHeader)
}


export const deleteUpdateAPI = async(bookid,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/owner/deleteUpdate/${bookid}`,{},reqHeader)

}



//user

export const getSixCenterForHome = async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/getHomecenters`,'','')
}

export const getMoreCenterAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/getMoreCenter`,'','')
}



export const getSelectedCenterAPI = async(centerID)=>{
    return await commonAPI("GET",`${BASE_URL}/user/seleecetdCenter/${centerID}`,'','')
}


export const addReviewForSpecificCenter = async(reviewdata)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addreviewCenter`,reviewdata,'')
}


export const getReviewDetailsUSerDash = async(centerID)=>{
    return await commonAPI("GET",`${BASE_URL}/user/reviewSpeci/${centerID}`,'','')
}


export const addWebReview = async(reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addwebreview`,reqBody,'')
}

export const getWebReviewApi = async()=>{
    return await commonAPI('GET',`${BASE_URL}/user/getwebreview`,'','')
}

export const addBookingDetails = async(reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addbooking`,reqBody,'')
}


export const searching = async(loc,date,time)=>{
    return await commonAPI("GET",`${BASE_URL}/user/search/${loc}/${date}/${time}`,'','')
}


export const sendMessageAPI = async(reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addmessage`,reqBody,'')
}