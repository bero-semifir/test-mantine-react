import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:4000/formations";

class FormationService {

    getFormations(): Promise<AxiosResponse> {
     return axios.get(API_URL);
    }

}

export default Object.freeze(new FormationService());
