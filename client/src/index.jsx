import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <h1>Testing out Apollo / GraphQL!</h1>
        <Query
          query={gql`
            {
              hello
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Sorry, there was an error...</p>;

            return (
              <div>
                <p>{(data.hello)}</p>
              </div>
            );
          }}
        </Query>
      </div>
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
