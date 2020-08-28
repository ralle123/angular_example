import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:PageInfo={};
  loaded=false;
  team:any[]=[];

  constructor(private http: HttpClient) {
    // console.log('Servicio listo')
    this.loadInfo();
    this.loadTeam();
  }
  private loadInfo(){
    this.http.get('assets/data/data_page.json')
    .subscribe( (resp: PageInfo) => {
      this.loaded=true;
      this.info=resp;
      // console.log(resp);
    });
  }
  private loadTeam(){
    this.http.get('https://angular-htmlportfolio.firebaseio.com/Team.json')
    .subscribe( (resp:any[]) => {
      this.loaded=true;
      this.team=resp;
      console.log(resp);
    });
  }
}
