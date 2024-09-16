import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charcaterList: Character[] = [
    {
      name: "Trunks",
      power: 10
    },
  ];

  @Output()
  public idOfCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void{
    this.idOfCharacter.emit(id);
  }
}
