import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { IAuthor } from '../../interface/IAuthor';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  name = 'abm';
  authorList : any = [];

  constructor(private authorService:AuthorService) { }

  author: IAuthor[];

  ngOnInit(): void {
    console.log('page1');
    this.authorService.getAuthors().subscribe(data => {
      this.authorList = data.results;
      console.log('ssdsf', this.authorList);
    })
  }

  pageEvent(page: any) {
    console.log(page);
  }

}
