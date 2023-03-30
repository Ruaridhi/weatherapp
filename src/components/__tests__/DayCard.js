import { render, screen } from '@testing-library/react';
import DayCard from '../DayCard';

Date.now = jest.fn(() => +new Date('2023-03-28'));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.useFakeTimers().setSystemTime(new Date('2023-03-28'));

test('it should show the right date', () => {
  render(<DayCard dayNumber={1} icon={'10d'} />);

  const day = screen.getByTestId('day');
  // TODO: Fix test
  // expect(day).toHaveTextContent('Wednesday, Mar 28')
});
