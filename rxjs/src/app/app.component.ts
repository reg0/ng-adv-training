import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, fromEvent, from, interval, Subject, BehaviorSubject, ReplaySubject, forkJoin, combineLatest, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, take, takeWhile, takeUntil, map, mapTo } from 'rxjs/operators';
const API = 'https://api.debugger.pl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customOperator() {
    const myPipe = source => Observable.create((obs) => {
      source.subscribe(
          (val) => obs.next(val * 2),
          (err) => obs.error(err),
          () => obs.complete()
      )
    });

    of(1, 2, 3).pipe(map(it => it + 100), myPipe).subscribe(console.log);
  }

  combinationOperators() {
    forkJoin(
      ajax(API + '/workers'),
      ajax(API + '/items'),
    )
    .subscribe(resps => {
      // debugger;
    });

    combineLatest(
      fromEvent(document, 'mousemove').pipe(map(({clientX, clientY}: MouseEvent) => {
        // const {clientX, clientY} = it;
        return JSON.stringify({clientX, clientY});
      })),
      fromEvent(document, 'click').pipe(map((it: MouseEvent) => {
        const {clientX, clientY} = it;
        return 'c' + JSON.stringify({clientX, clientY});
      }))
    )
    .subscribe(val => {
      console.log(val);
    });
  }

  transformationOperators() {
    interval(300)
    .pipe(
      map(it => it + 2000),
      mapTo(200)
    )
    // .subscribe(console.log)
  }
  filteringOperators() {
    interval(200)
    .pipe(
      take(10),
      takeWhile(it => it < 6),
      takeUntil(fromEvent(document, 'click')), // reacts to observable!
      filter(it => !!(it % 2)),
    )
    .subscribe(console.log);
  }

  subjectExamples() {
    const subject = new Subject();
    subject.subscribe(console.log);

    subject.next(1);
    subject.next(3);
    subject.next(5);

    const behaviorSubject = new BehaviorSubject('x');
    behaviorSubject.subscribe(console.log);
    behaviorSubject.next('y');
    behaviorSubject.next('z');
    behaviorSubject.subscribe(console.log);
    behaviorSubject.next('a');

    const behaviorSubject2 = new BehaviorSubject<{id, name}>({id: 1, name: 'Kamil'});
    behaviorSubject2.subscribe(console.log);
    behaviorSubject2.next({...behaviorSubject2.value, id: 3});

    const replaySubject = new ReplaySubject();
    replaySubject.subscribe(console.log);
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.subscribe(console.log);

  }

  observableExamples() {
    fromEvent(document.body, 'mousemove').subscribe(console.log);

    const people = ['Joe', 'Mike', 'Bob', 'Kate'];
    from(people).subscribe(console.log);

    ajax('https://api.debugger.pl/workers').subscribe(console.log);

    // interval(300).subscribe(console.log)
  }

  observableAndObserver() {
    of(1, 2, 3).subscribe(
      console.log,
      console.error,
      () => console.log('koniec')
    );
  }

  title = 'rxjs';
  constructor(private http: HttpClient) {
    /* base */
    // this.observableAndObserver();
    // this.observableExamples();
    // this.subjectExamples();
    // this.filteringOperators();
    // this.transformationOperators();
    // this.combinationOperators();
    this.customOperator();

    /* mechanism */
    // this.hotvscold();
    // this.higherOrder()

    /* tasks */
    // this.helloWorld();
    // this.mousemoveAndClickCount();
    // this.notifications();
    // this.createForm();
  }

}
