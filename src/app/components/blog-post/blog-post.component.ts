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
  public fileList: Array<object> = [];

  constructor(private _blogPostService: BlogPostService) { }

  ngOnInit(): void {
  }

  public roopArray(size) {
    return new Array(size).fill(0);
  }

  public post() {
    const data = {
      title: this.title,
      tags: this.tags,
      contents: this.contents
    };
    this._blogPostService.post(data, this.fileList).subscribe(item => {
      console.log(item);
    });
  }

  public onFileChange(files) {
    console.log(files);
    if (files.length > 0) {
      this.fileList.push(files[0]);
    }
  }

}
