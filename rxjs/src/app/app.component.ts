import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';

  observableAndObserver() {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) {
    /* base */
    this.observableAndObserver();
    // this.observableExamples();
    // this.subjectExamples();
    // this.filteringOperators();
    // this.transformationOperators();
    // this.combinationOperators();
    // this.customOperator();

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
