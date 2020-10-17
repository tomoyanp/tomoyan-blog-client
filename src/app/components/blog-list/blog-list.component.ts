import { Component, OnInit } from '@angular/core';
import { BlogListService } from 'src/app/services/blog-list.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogList = [
    {
      tags: ['#Angular', 'プログラミング'],
      id: 20200827000,
      date: '2020-08-04',
      title: '【Angular】ブログシステムを作ってみた',
      thumbnail: '',
      summary: 'サマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリ'
    },
    {
      tags: ['#Angular', 'プログラミング'],
      id: 20200827001,
      date: '2020-08-04',
      title: '【Angular】ブログシステムを作ってみた',
      thumbnail: '',
      summary: 'サマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリサマリ'
    }

  ];

  constructor(private _blogListService: BlogListService) { }

  ngOnInit(): void {
    this._blogListService.get().subscribe(blogList => {
      console.log(blogList);
    });
    
  }

}
