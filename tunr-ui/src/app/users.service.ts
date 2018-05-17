import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './types/user';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  addNewUser(user: User) {
    return this.httpClient.post<User>(
      '/api/users',
      user
    );
  }

  get(userId: string) {
    return this.httpClient.get<User>(`/api/users/${userId}`);
  }
  getUsers() {
    return this.httpClient.get<User[]>('/api/users');
  }

  deleteUser(userId: string) {
    return this.httpClient.delete(`/api/users/${userId}`);
  }

  editUser(updateduser) {
    return this.httpClient.patch(`/api/users/` + updateduser.id, 
    updateduser
    );
  }
}
