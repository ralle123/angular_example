import { Component } from '@angular/core';
import { InfoPaginaService } from './services/page-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoPaginaService: InfoPaginaService){

  }
}
