import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otgzsr12sw01xk6s856616/master',
    cache: new InMemoryCache()
})