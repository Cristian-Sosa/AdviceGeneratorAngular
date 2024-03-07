import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdviceAPIService, LoaderService } from './shared';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, LoaderComponent],
  providers: [AdviceAPIService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  public advice: { id: number; advice: string };
  public isLoading: boolean = true;

  constructor(
    private adviceSrv: AdviceAPIService,
    private loaderSrv: LoaderService
  ) {
    this.advice = {
      id: 150,
      advice: 'The most important thing is the thing most easily forgotten.',
    };
  }

  ngOnInit(): void {
    this.adviceSrv
      .getAdviceObservable()
      .subscribe((res) => (this.advice = res));

    this.loaderSrv
      .getLoaderStateObservable()
      .subscribe((res) => (this.isLoading = res));
  }

  public getAdvice = () => {
    this.adviceSrv.getNewAdvice();
  };
}
