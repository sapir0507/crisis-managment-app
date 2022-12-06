import { ICrisis } from '../interfaces/crisis.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/environment';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  CRISIS: ICrisis[] = [];
  private readonly url = environment.api + 'crisis';

  constructor() { }
  //add handle errors
  //add rxjs
  private _get_all_crisis = async() => {
    const res = await axios.get(this.url).then((res)=>{
      return res
    })
    return res.data
  }

  private set_all_crisis = async() => {
    const res = await this._get_all_crisis()
    this.CRISIS = res;
  }

  get_all_crisis = async() => {
    await this.set_all_crisis()
    return this.CRISIS;
  }

}
