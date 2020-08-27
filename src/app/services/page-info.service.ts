import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:PageInfo={};
  loaded=false;


  constructor(private http: HttpClient) {
    // console.log('Servicio listo')
    this.http.get('assets/data/data_page.json')
    .subscribe( (resp: PageInfo) => {
      this.loaded=true;
      this.info=resp;
      console.log(resp)
    })
  }
}
