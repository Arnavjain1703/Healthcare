import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  path:any;
  i:number=0;
  imgpath:any;


  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100vh',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#173E43',
          },
          shape: {
              polygon: {
                "nb_sides": 5
              },
          },
          line_linked: {
            "enable": true,
            "distance": 150,
            "color": "#173E43",
            "opacity": 0.5,
            "width": 2
          },
      }
    };

  }
}
