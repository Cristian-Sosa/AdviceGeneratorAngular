import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './shared';
import { CardComponent, LoaderComponent } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent, CardComponent],
  providers: [LoaderService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;

  constructor(private loaderSrv: LoaderService) {}

  ngOnInit(): void {
    this.loaderSrv
      .getLoaderStateObservable()
      .subscribe((res) => (this.isLoading = res));
  }
}
