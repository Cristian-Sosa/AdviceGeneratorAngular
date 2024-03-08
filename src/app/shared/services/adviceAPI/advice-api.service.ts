import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAdvice, IAdviceResponse } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdviceAPIService {
  public advice!: IAdvice;
  public _advice: BehaviorSubject<IAdvice>;

  constructor(private http: HttpClient) {
    this.advice = {
      id: 150,
      advice: 'The most important thing is the thing most easily forgotten.',
    };
    this._advice = new BehaviorSubject(this.advice);
  }

  fetchAdvice = (): Observable<IAdviceResponse> => {
    return this.http.get<IAdviceResponse>('https://api.adviceslip.com/advice');
  };

  public getAdviceObservable = (): Observable<IAdvice> => {
    return this._advice.asObservable();
  };

  public getNewAdvice = () => {
    this.fetchAdvice()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.advice = res.slip;
          this._advice.next(this.advice);
        },
        error: (err) => {
          this.advice = {
            id: 150,
            advice:
              'The most important thing is the thing most easily forgotten.',
          };
          this._advice.next(this.advice);
        },
      })
      .unsubscribe();
  };
}
