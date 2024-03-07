import { Component, inject } from '@angular/core';
import { AdviceAPIService } from '../../../shared';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  public advice: { id: number; advice: string };
  public isLoading: boolean = true;

  private adviceSrv = inject(AdviceAPIService);

  constructor() {
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