import { Component } from '@angular/core';
import { ChuckNorrisService } from './services/chuck-norris.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  chuck: any;


  constructor(
    public chuckNorrisService: ChuckNorrisService

  ){

  }

  ngOnInit(): void {

    this.chuckNorrisService.getPhrase().subscribe(resp=> {
      this.chuck = resp;
    },
    error=> {console.error(error)}
    );


  }

recargar(chuck: any){
  window.location.reload()
}

}

