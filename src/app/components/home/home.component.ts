import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  
  constructor( private spotify: SpotifyService ) {
    this.spotify.getNewReleases();
  }

  ngOnInit() {
  }

}
