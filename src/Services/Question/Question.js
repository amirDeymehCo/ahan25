
import { Get } from './../../utils/axiosHelper/AxiosHelper';

const api = {
    listQuestion : '/front/faqs'
}

const QuestionServices = {
    listQuestion :(then)=> Get(api.listQuestion,{},then)
}

export default QuestionServices;