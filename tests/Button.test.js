import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Button from '../src/components/Button.svelte';

it('it works', async () => {
  const { getByText } = render(Button);
  expect(getByText('Button')).toBeDefined();
});
