import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdviceAPIService } from './shared';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers: [AdviceAPIService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  public advice: { id: number; advice: string };

  constructor(private AdviceSrv: AdviceAPIService) {
    this.advice = {
      id: 150,
      advice: 'The most important thing is the thing most easily forgotten.',
    };
  }

  ngOnInit(): void {
    this.AdviceSrv.getAdviceObservable().subscribe(
      (res) => (this.advice = res)
    );
  }

  public getAdvice = () => {
    this.AdviceSrv.getNewAdvice();
  };
}
