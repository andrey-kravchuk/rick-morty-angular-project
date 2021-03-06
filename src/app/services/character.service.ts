import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../common/character';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'http://localhost:8080/api/characters';

  constructor(private httpClient: HttpClient) { }

  getCharacterList(): Observable<Character[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.characters)
    );
  }
}

interface GetResponse {
  _embedded: {
    characters: Character[];
  };
}
