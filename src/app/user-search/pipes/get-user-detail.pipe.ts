import { Pipe, PipeTransform } from '@angular/core';
import { Observable, NEVER } from 'rxjs';
import { UserService } from '../service/user-service.service';
import { shareReplay } from 'rxjs/operators';

@Pipe({
  name: 'getUserDetail'
})
export class GetUserDetailPipe implements PipeTransform {
  userUrl: string;
  userDetail$: Observable<any>;

  constructor(private hpService: UserService) {}
  transform(userUrl: any): Observable<any> {
    if (!userUrl) {
      return NEVER;
    }

    if (this.userUrl === userUrl) {
      return this.userDetail$;
    }

    this.userUrl = userUrl;

    this.userDetail$ = this.hpService
      .getUserDetail(userUrl)
      .pipe(shareReplay(1));

    return this.userDetail$;
  }

}

