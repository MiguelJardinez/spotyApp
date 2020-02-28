import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');

  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBfPCaok77-K95BZi0QKdxfVezl7RWw8ESiJWFT7vKq7kmYyA2IYAkouro0HjDdOEUTY0ZH68GmH5Se5M',

    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {


    // // const headers = new HttpHeaders({
    // //   'Authorization': 'Bearer BQBkV-MLOK3LhDcEXn7ClxkfoGLPrsrepnSk8Q6rAJ3T4evUAprqhHQ4W0Fu_eapvFtcUN_t-R3TaDhFtqk',

    // });
    return this.getQuery('browse/new-releases?limit=20&offset=5')
      .pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBkV-MLOK3LhDcEXn7ClxkfoGLPrsrepnSk8Q6rAJ3T4evUAprqhHQ4W0Fu_eapvFtcUN_t-R3TaDhFtqk',

    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20&offset=5`, { headers })
    //   .pipe(map(data => data['artists'].items));

    return this.getQuery(`search?q=${termino}&type=artist&limit=20&offset=5`)
      .pipe(map(data => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artists']));

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
      .pipe(map(data => data['tracks']));

  }




}
