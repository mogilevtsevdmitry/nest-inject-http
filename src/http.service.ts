import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class BaseHttpService {
  constructor(protected readonly http: HttpService) {}

  protected get(url: string) {
    return this.http.get(url).pipe(map((res) => res.data));
  }
}
