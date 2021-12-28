import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  str: string = "";
  eqstr: string = "";
  spstr: string[] = [];
  value: any = "Ans";
  eq: any = "";
  index: boolean;
  val1: number;
  val2: number;
  err: string = "";

  constructor() { }

  clear() {
    this.str = "";
    this.eqstr = "";
    this.value = "Ans";
    this.err = "";
  }

  eqsolve() {
    if (this.eqstr.includes('+')) { this.eq = '+'; } else
      if (this.eqstr.includes('~')) { this.eq = '~'; } else
        if (this.eqstr.includes('*')) { this.eq = '*'; } else
          if (this.eqstr.includes('/')) { this.eq = '/'; }

    this.spstr = this.eqstr.split(this.eq);
    if (this.spstr[1] == "0" && this.eq == '/') {
      this.str = "";
      this.eqstr = "";
      this.err = "Illegal Operation, divide by  0";
      this.value = "Ans";
    } else {
      this.val1 = Number(this.spstr[0]);
      this.val2 = Number(this.spstr[1]);
      switch (this.eq) {
        case '+': this.value = this.val1 + this.val2; break;
        case '~': this.value = this.val1 - this.val2; break;
        case '*': this.value = this.val1 * this.val2; break;
        case '/': this.value = this.val1 / this.val2; break;
      }
      this.value = this.value.toFixed(2);
      this.err = "";
    }
  }

  add(values) {
    this.str = this.str + values;
    this.eqstr = this.eqstr + values;
  }

  solve(values) {
    if (this.eqstr.includes('+')) { this.eq = '+'; } else
      if (this.eqstr.includes('~')) { this.eq = '~'; } else
        if (this.eqstr.includes('*')) { this.eq = '*'; } else
          if (this.eqstr.includes('/')) { this.eq = '/'; }
          else { this.eq = ''; }

    if (this.eq != '') {
      this.spstr = this.eqstr.split(this.eq);

      if (this.spstr[1] == "" || this.spstr[0] == "") {
        this.str = "";
        this.eqstr = "";
        this.err = "Illegal Operation";
        this.value = "Ans";
      } else
        if (this.spstr[1] == "0" && this.eq == '/') {
          this.str = "";
          this.eqstr = "";
          this.err = "Illegal Operation, divide by  0";
          this.value = "Ans";
        }
        else {
          this.val1 = Number(this.spstr[0]);
          this.val2 = Number(this.spstr[1]);
          switch (this.eq) {
            case '+': this.value = this.val1 + this.val2;
              break;
            case '~': this.value = this.val1 - this.val2;
              break;
            case '*': this.value = this.val1 * this.val2;
              break;
            case '/': this.value = this.val1 / this.val2;
              break;
          }
          this.value = this.value.toFixed(2);
          this.eqstr = this.value + values;
        }
    }
    else {
      this.eqstr = this.eqstr + values;
      this.value = "Ans"; this.err = "";
    }
    this.str = this.str + values;
  }
}
