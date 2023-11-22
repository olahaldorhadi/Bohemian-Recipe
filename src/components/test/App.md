//Tried to make snapshottest for app.tsx, but had unresolved useQuery problems with ApolloClient server.
import { render } from '@testing-library/react';
import App from '../../App';

test('App component snapshot', () => {
const { asFragment } = render(<"App" />);
expect(asFragment()).toMatchSnapshot();
});
