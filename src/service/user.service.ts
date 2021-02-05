import { Injectable } from '@nestjs/common';
import { user } from 'src/user/user.interface';

@Injectable()
export class UserService {
  getList(): user {
    return;
  }
  getUserById(id): user {
    const user = new UserService();
    // firebese.database
    return;
  }
}
