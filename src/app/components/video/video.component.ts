import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { changeFilter } from '../../redux/actions';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: string;
  isOpen = false;
  src: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const videoUrl = `https://www.youtube.com/embed/${this.video}?autoplay=1&mute=1&controls=1`;
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    fromEvent(window, 'keydown')
      .pipe(
        map((event: KeyboardEvent): boolean => event.key === 'Escape')
      )
      .subscribe((value: boolean) => {
        this.isOpen = !value;
      });
  }

  watchVideo(): void {
    this.isOpen = true;
  }

  closeOverlay(): void {
    this.isOpen = false;
  }
}
