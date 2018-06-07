import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log("spotify service");
  }
  
  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQC0qs7dOW42zLZubDJ0gER0nOX5Y3PAnZrm7tJJ4691QmygBwCSHR1PYNWKKxR6wldyXdX0wJklm0ZWWTbrGk8waTMkXBlANP-b2fRzBEW9N8TYJIlOWUhqfUwCyVCySVs_nHnH5ZukNdDi_WQvHSayyySHLsw"
    });
    this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers}).subscribe((data) => {
        console.log(data);
    });
  }
}
