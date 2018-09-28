import { Component, OnInit } from '@angular/core';
import { Picture } from '../../models/picture';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

  pictures: Picture[];

  constructor(private pictureService: PicturesService) {
    this.getAllPictures();
  }

  ngOnInit() {
  }

  private getAllPictures(){
    this.pictureService.getAllPhotos().then((pictures: Picture[]) => {
      this.pictures = pictures;
    }).catch(err => {console.log(err)});
  }
}
