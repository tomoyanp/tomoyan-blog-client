import { Component, OnInit } from '@angular/core';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  public title: string;
  public contents: string;
  public tags: string;

  constructor(private service: BlogPostService) { }

  ngOnInit(): void {
  }


  public post() {
    const data = {
      title: this.title,
      tags: this.tags,
      contents: this.contents
    };
    this.service.post(data).subscribe(item => {
      console.log(item);
    });
  }

}
