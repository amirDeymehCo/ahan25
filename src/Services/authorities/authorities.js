
import { Get } from './../../utils/axiosHelper/AxiosHelper';
const api = {
    getListAuthorities : "/front/authorities"
}

const Authorities = {
    getListAuthorities:(then)=>Get(api.getListAuthorities,{}, then)
}

export default Authorities;