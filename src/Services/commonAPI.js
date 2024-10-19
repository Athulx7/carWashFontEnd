import axios from 'axios'

export const commonAPI = async(httpreq,url,reqbody,reqHeader) =>{
    const reqConfig = {
        method :httpreq,
        url:url,
        data:reqbody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}

    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

}