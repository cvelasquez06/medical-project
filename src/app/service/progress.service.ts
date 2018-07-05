import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private progress = new BehaviorSubject<boolean>(false);
  statusProgress = this.progress.asObservable();

  constructor() {}

  cargarStatus(status: boolean) {
    this.progress.next(status);
  }


}
