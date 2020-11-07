import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";

export const createGraphQlClient = (link: HttpLink) => {
  return new ApolloClient({
    link,
  })
}
