import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(msg: String, extra?: unknown) { // unknown é quase a mesma coisa que any, é possível testar seu tipo, ao contrario de any
    console.info(msg, extra ?? '');
  }

  warn(msg: String, extra?: unknown) {
    console.warn(msg, extra ?? '');
  }

  error(msg: String, extra?: unknown) {
    console.error(msg, extra ?? '');
  }
}
