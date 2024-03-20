import { Injectable } from '@nestjs/common';
import { BaseHttpService } from './http.service';

@Injectable()
export class AppService extends BaseHttpService {
  getHello() {
    return this.get('https://dummyjson.com/products/1');
  }
}
