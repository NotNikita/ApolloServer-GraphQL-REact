import apolloProvider from "./ApolloProvider";
import { getUserByPage } from "../User/getUserByPage";
import { createUser } from "../User/createUser";
import { User } from "../../models/User";

class UserHandler {
  public constructor() {}

  public getUserByPage = async (page: string): Promise<User[] | undefined> => {
    if (!page) return;

    const { data } = await apolloProvider.client.query({
      query: getUserByPage,
      variables: {
        page: parseInt(page, 10),
      },
    });

    return data.getUsersByPage;
  };

  public createUser = async (user: User): Promise<any> => {
    const { data } = await apolloProvider.client.mutate({
      mutation: createUser,
      variables: {
        user,
      },
    });
    return data.createUser;
  };
}

const userStore = new UserHandler();

export default userStore;
