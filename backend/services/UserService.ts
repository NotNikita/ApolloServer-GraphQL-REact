import { bigUserData, UserData } from '../constants';
import { User } from '../models/User';
import { v4 } from 'uuid';

export class UserService {
  public static getUsersByPage = async (
    page: string,
  ): Promise<User[] | undefined> => {
    const users = bigUserData.find(
      (pageData: UserData) => pageData.page === parseInt(page, 10),
    )?.data;
    return Promise.resolve(users);
  };

  public static getUserById = async (id: string): Promise<User | undefined> => {
    const allUsers: User[] = [];
    bigUserData.forEach((pageData: UserData) =>
      allUsers.push(...pageData.data),
    );
    return Promise.resolve(allUsers.find(u => u.id === id));
  };

  public static createUser = async (user: User): Promise<User> => {
    const newUser = {
      id: v4(),
      ...user,
    };
    bigUserData[0].data.push(newUser);
    return Promise.resolve(newUser);
  };
}
