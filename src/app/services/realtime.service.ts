import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface RealtimeEvent {
  type: string;
  payload: any;
}

@Injectable({ providedIn: 'root' })
export class RealtimeService {
  private socket?: WebSocket;
  orderEvents = new Subject<RealtimeEvent>();
  tableEvents = new Subject<RealtimeEvent>();

  connect(url: string = `wss://${location.host}/ws`): void {
    if (this.socket) return;
    this.socket = new WebSocket(url);
    this.socket.onmessage = (event) => {
      const data: RealtimeEvent = JSON.parse(event.data);
      if (data.type.startsWith('order.')) {
        this.orderEvents.next(data);
      } else if (data.type.startsWith('table.')) {
        this.tableEvents.next(data);
      }
    };
    this.socket.onclose = () => (this.socket = undefined);
  }
}
