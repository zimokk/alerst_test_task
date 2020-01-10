import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ConnectionService {
  private readonly socketAddress: string;
  private connection: WebSocket;
  private connectionSubject: Subject<string>;

  constructor() {
    this.socketAddress = environment.socketAddress;
    this.connectionSubject = new Subject<string>();
    if (this.socketAddress) {
      this.connectToSocket();
    } else {
      console.log('WebSocket addr not set, please set up');
    }
  }
  private connectToSocket(): void {
    this.connection = new WebSocket(this.socketAddress);
    this.initSocketEvents();
  }

  private initSocketEvents(): void {
    this.connection.onopen = () => {
      console.log('Connected to Socket');
    };
    this.connection.onclose = () => {
      this.connection.close();
    };
    this.connection.onmessage = (message: MessageEvent) => {
      this.connectionSubject.next(message.data);
    };
    this.connection.onerror = ev => {
      console.log('Error during connection. Retry in 20s ...');
      setTimeout(this.connectToSocket.bind(this), 20000);
    };
  }

  send(data: string): void {
    this.connection.send(data);
  }

  get connectionStream(): Observable<any> {
    return this.connectionSubject.asObservable();
  }
}
