import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef <HTMLInputElement>;

  constructor( private gifsService: GifsService){ //se inyecta servicios

  }
  // serachTag( newTag: string){
  //   console.log({newTag});
  // }
  serachTag( ){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    console.log(newTag);

    this.tagInput.nativeElement.value = ''; //me limpia la caja de texto
    
  }
}
