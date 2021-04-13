import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Character} from '../common/character';
import {Gender} from '../common/gender';

@Component({
  selector: 'app-character-list',
  templateUrl: './characters-list-bootstrap.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[];
  gender: Gender;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.listCharacters();
  }


  listCharacters(): void {
    this.characterService.getCharacterList().subscribe(
      data => {
        this.characters = data;
      }
    );
  }

}
