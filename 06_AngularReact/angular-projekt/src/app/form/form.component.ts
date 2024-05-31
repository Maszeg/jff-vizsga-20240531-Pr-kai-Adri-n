import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  a: number;
  b: number;
  kerulet: number;
  terulet: number;

  constructor() {
    this.a = 0;
    this.b = 0;
    this.kerulet = 0;
    this.terulet = 0;
  }

  ngOnInit(): void {
  }

  keruletSzamitas(a: number, b: number): void {
    this.kerulet = a*2+b*2;
  }

  teruletSzamitas(a: number, b: number): void {
    this.terulet = a*b;
  }

}
