import {Post} from './../../utils/axiosHelper/AxiosHelper'

const api = {
    getCodeForEmailAndPass : "/front/user/emailCode"
}

const ChangePassServices={
    getCodeForEmailAndPass : (data, then) => Post(api.getCodeForEmailAndPass, data, then)
}

export default ChangePassServices;