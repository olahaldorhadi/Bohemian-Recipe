//Tried to make snapshottest for FeatureSection.tsx, but had unresolved useQuery problems with ApolloClient server.

import { describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureSection from '../molecules/FeatureSection';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import '@testing-library/jest-dom';

declare module 'vitest' {
interface Assertion<"T"> {
toMatchImageSnapshot(): T;
}
}

expect.extend({ toMatchImageSnapshot });

describe('FeatureSection', () => {
it('Renders feature picture', () => {
render(<"FeatureSection" />);
const dinnerImage = screen.getByAltText(/Lovely-dinner/i);
expect(dinnerImage).toBeInTheDocument();
});
});
