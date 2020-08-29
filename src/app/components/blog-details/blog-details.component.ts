import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTag } from '@fortawesome/free-solid-svg-icons';

interface BlogData {
  title: string;
  date: string;
  tags: Array<string>;
  body: Array<Array<object>>;
}

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  private id: string;
  public tagIcon = faTag;

  public blogData: BlogData = {
    title: 'タイトル',
    date: '20200904',
    tags: ['tag1', 'tag2'],
    body: [
      [
        {
          type: 'text',
          content: 'hogehogehoge',
          style: undefined
        },
        {
          type: 'text',
          content: 'mogemoge',
          style: 'color: blue;'
        }
      ],
      [
        {
          type: 'text',
          content: 'hogehogehoge2',
          style: 'font-weight: bold;'
        },
        {
          type: 'text',
          content: 'mogemoge2',
          style: undefined
        },
        {
          type: 'image',
          content: '/xxx/xx/xxx',
          style: undefined
        }
      ]
    ]
  };

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      params => {
        this.id = params.id;
        console.log(this.id);
        // サーバから記事を取得する処理を記載する
      }
    );
  }

}
