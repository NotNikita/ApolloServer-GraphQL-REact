import { User } from '../../models/User';
import { UserService } from '../../services/UserService';

export const userResolver = {
  Query: {
    getUsersByPage: async (parent, { page }): Promise<User[] | undefined> =>
      await UserService.getUsersByPage(page),

    getUserById: async (parent, { id }): Promise<User | undefined> =>
      await UserService.getUserById(id),
  },
  Mutation: {
    createUser: async (parent, { user }): Promise<User> =>
      await UserService.createUser(user),
  },
};
