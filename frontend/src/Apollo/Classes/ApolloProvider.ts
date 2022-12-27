import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { makeAutoObservable } from "mobx";

class ApolloProvider {
  // @ts-ignore
  public client: ApolloClient<NormalizedCacheObject>;
  public constructor() {
    makeAutoObservable(this);
  }
  public setApolloClient = (
    client: ApolloClient<NormalizedCacheObject>
  ): void => {
    this.client = client;
  };
}

const apolloProvider = new ApolloProvider();
export default apolloProvider;
