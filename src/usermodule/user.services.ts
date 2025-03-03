import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {

    private users: User[] = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
        { id: 4, name: 'User4' },
        { id: 5, name: 'User5' },
    ];
  getusers(): User[] {
    return this.users;
  }
}
