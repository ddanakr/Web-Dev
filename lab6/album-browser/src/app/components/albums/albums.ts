import { Component, inject, OnInit, signal } from '@angular/core';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
  standalone: true,
})
export class Albums implements OnInit {
  
  albums = signal<Album[]>([]);
  isLoading: boolean = true;

  private albumService = inject(AlbumService);

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.isLoading = true;
    this.albumService.getAlbums().subscribe({
    next: (data) => {
      console.log('Albums received:', data);
      this.albums.set(data);
    },
    error: (err) => {
      console.error('Fetch failed:', err);
    },
    complete: () => {
      this.isLoading = false; 
    }
  });
}

  

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();

    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.update(prev => prev.filter(album => album.id !== id))
    });
  }
    
}
