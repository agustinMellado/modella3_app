import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productos = [
    {
      nombre: 'Pikachu',
      url: 'https://images.cults3d.com/zyVC4265diQQ9gx2iTbKQtedTuA=/516x516/https://files.cults3d.com/uploaders/14388486/illustration-file/7acfb94e-2201-4f5f-aa51-64198f21adfb/Pikachu_1.png#2',
      disponibilidad: true,
    },
    {
      nombre: 'Charmander',
      url: 'https://images.cults3d.com/Xk0l_2egPok57T8-zl2ablrd7Qs=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14388486/illustration-file/1d0c7d7e-ec38-4a6e-bf81-2ca8a3d35bb9/Charmander_2.png',
      disponibilidad: true,
    },
    {
      nombre: 'Bulbasaur',
      url: 'https://images.cults3d.com/Nm87sRKUn88YQfsYqGaIlM1AtB8=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14388486/illustration-file/82a10630-f5c4-4f7f-8478-28ee09f08af8/Bulbasaur_0.jpg',
      disponibilidad: true,
    },
    {
      nombre: 'Squirtle',
      url: 'https://images.cults3d.com/wC-IGQ-FZA2JOqzgsFG_Cc8snZs=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14388486/illustration-file/41174528-7889-441a-9064-fff36c6483c8/Squirtle_2.jpg',
      disponibilidad: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
