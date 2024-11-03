import $api from "../http/http";
import { AxiosResponse } from 'axios';

export default class UserService {
    static createUser(data) {
        return $api.post('/create_user', {
            login: data[0],
            email: data[1],
            password: data[2],
        })
    }
}