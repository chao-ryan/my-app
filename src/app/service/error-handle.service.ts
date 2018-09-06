import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ErrorHandleService {
  /**
   * init class's propertys when instanced
   */
  constructor() {}

  /**
   * Handle Http opreation that failed.
   * Let the app continue.
   * @param opreation name of the opreation that failed
   * @param result optional value to return as the observable result
   * @param ctr optional class object
   * @return return a function with error handle
   */
  handleError<T>(opreation = "opreation", result?: T, ctr?: any): any {
    return (error: any): Observable<T> => {

      // send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // better job of transforming error for user consumption
      ctr.log(`${opreation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    }
  }
}
