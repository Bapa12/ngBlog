import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  public post: {
    id: string,
    titlePost: string,
    contentPost: string,
    imagePost: string
  } = {
    id: "1",
    titlePost: "Post One",
    contentPost: "Hola Mundo",
    imagePost: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
  }

  constructor (private route: ActivatedRoute) {}

  ngOnInit() {
    this.post.id = this.route.snapshot.params['id'];
  }

}
