import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log("spotify service");
  }
  
  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQBkAwF6UQ3rCiTbA7jTIX50rdJyZwr_PN1GWKC1fEpkVB-M6NhHrAaUPQCGFW4gAdSQUl0VazAK2PcFSb3FUde3rx-eoNPwI-LMgVAGfSahaZ53V4lI8VrMTjCt_C-agfs96DG5p127sTrgmMUb8TJc_2xboIc"
    });
    //Con map y un pipe extraigo lo que quiero
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers}).pipe( map( data => {
        //Busca la propiedad albums
        return data.['albums'].items;
    }));
  }
  
  getArtista(termino: string) {
      const headers = new HttpHeaders({
      "Authorization": "Bearer BQBkAwF6UQ3rCiTbA7jTIX50rdJyZwr_PN1GWKC1fEpkVB-M6NhHrAaUPQCGFW4gAdSQUl0VazAK2PcFSb3FUde3rx-eoNPwI-LMgVAGfSahaZ53V4lI8VrMTjCt_C-agfs96DG5p127sTrgmMUb8TJc_2xboIc"
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
