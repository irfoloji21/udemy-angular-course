import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  user = {
    name: "İrfan",
    surname: "MEŞE",
    job: "beradayi",
    favorite_place: "haymatlos cafe",
    favorite_place_image: "https://pr1.nicelocal.biz.tr/MiroVBcv0QSK36rVuf4sCg/587x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2XGz1_RLRdqLQDJKtE-gEnCkgXqv5rbhC7Auk_ybWij5XL2KIPXkUztWhUo925UEBg",
    isEditable:true
  };

  type = "text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    alert("clicked");
  }

  inputSubmit(value: any) {
    alert(value.target.value + " geldi");
  }

}
