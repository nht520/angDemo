import { Injectable } from '@angular/core';
import Axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axiosGet(api) {
    return new Promise((resolve, reject) => {
        Axios.get(api).then((res) => {
          resolve(res);
        }) .catch((err) => {
          resolve(err);
        });
    })
  }
}
