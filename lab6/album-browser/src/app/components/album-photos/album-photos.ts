import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
  standalone: true,
})
export class AlbumPhotos implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  photos: Photo[] = [];
  isLoading = true;
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(id).subscribe((data) => {
      this.photos = data;
      this.isLoading = false;
    });
  }

  goBack(): void {
    window.history.back();
  }
}
