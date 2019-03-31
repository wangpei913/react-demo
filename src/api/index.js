import Axios from '../axios/index';
export const tableList = (params) => {
    return Axios.post('/table/list', params);
}