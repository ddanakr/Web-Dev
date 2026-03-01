import { Component, OnInit, inject, NgModule, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
  standalone: true,
})
export class AlbumDetail implements OnInit {
  private albumService = inject(AlbumService);
  private route = inject(ActivatedRoute);

  album = signal<Album | null>(null);
  isLoading = signal(true);

  draftTitle: string = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album.set(data);   // Update signal value
        this.draftTitle = data.title;
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  saveChanges(): void {
    const currentAlbum = this.album(); // Get current value from signal
    if (currentAlbum) {
      const updatedData = {...currentAlbum, title: this.draftTitle || currentAlbum.title};
      this.albumService.updateAlbum(updatedData).subscribe((updatedAlbum) => {
        console.log('Album updated:', updatedAlbum);
        this.album.set(updatedAlbum);
      });
    }
  }

  goBack(): void {
    window.history.back();
  }

}
