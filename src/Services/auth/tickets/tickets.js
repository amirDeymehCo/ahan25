import { Get } from './../../../utils/axiosHelper/AxiosHelper';

const api = {
    listTickets : "/front/tickets"
}

const TicketsServices = {
    listTickets:(then)=> Get(api.listTickets,{}, then)
}

export default TicketsServices ;