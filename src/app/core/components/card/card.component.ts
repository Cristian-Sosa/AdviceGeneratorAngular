import { Component, inject } from '@angular/core';
import { AdviceAPIService } from '../../../shared';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  providers: [AdviceAPIService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  public advice: { id: number; advice: string };
  public isLoading: boolean = true;

  constructor(private adviceSrv: AdviceAPIService) {
    this.advice = {
      id: 150,
      advice: 'The most important thing is the thing most easily forgotten.',
    };
  }

  ngOnInit(): void {
    this.adviceSrv
      .getAdviceObservable()
      .subscribe((res) => (this.advice = res));
  }

  public getAdvice = () => {
    this.adviceSrv.getNewAdvice();
  };
}
