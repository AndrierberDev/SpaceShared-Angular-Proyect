import { Component, OnInit } from '@angular/core';
import { Data} from './data'

@Component({
  selector: 'app-section-account',
  templateUrl: './section-account.component.html',
  styleUrls: ['./section-account.component.css']
})
export class SectionAccountComponent implements OnInit {

   Datas: Data[] =[
      {nombre: "FreddyAngel", apellido: "Leal"}
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
