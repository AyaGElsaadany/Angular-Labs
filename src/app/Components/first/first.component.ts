import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {
  title = 'FirstLab';
  name : string = "";
  changeKey(data){
    console.log(data.target);
    this.name = data.target.value;
  }
  changeVal(){
    this.name = this.name;
  }

  img : string = "assets/Images/1.jpg";
  timerID = setInterval(function () {
      this.count++;
      if (this.count > 5)
          this.count = 1;
      this.img = "assets/Images/" + this.count + ".jpg";
  }, 1000);
  count : number = 0;
  showPrevious(){
    this.count--;
    if (this.count < 1)
        this.count = 5;
    else if(this.count > 5)
        this.count = 1;
    this.img = "assets/Images/" + this.count + ".jpg";
  }
  showNext(){
    this.count++;
    if (this.count > 5)
        this.count = 1;
    this.img = "assets/Images/" + this.count + ".jpg";
  }
  slideShow(){
    this.timerID;
  }
  stopSlideShow(){
    clearInterval(this.timerID);
  }
}
