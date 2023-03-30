import { fireEvent, render, screen } from '@testing-library/react';
import SearchPage from '../SearchPage';
import { getWeather } from '../utils';
import AppContext from '@/components/AppContext';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('loads and displays search page correctly', () => {
  render(
    <AppContext value={{ forecast: {}, setForecast: () => {} }}>
      <SearchPage />
    </AppContext>
  );

  expect(screen.getByLabelText('city-input')).toBeTruthy();
  expect(screen.getByRole('link', { name: /Find City/ }));
  expect(screen.getByRole('link').getAttribute('href')).toEqual('/ResultsPage');
});

jest.mock('../utils');

test('when clicking on link calls weather api', () => {
  render(<SearchPage />);

  const link = screen.getByRole('link', { name: /Find City/ });
  fireEvent.click(link);

  expect(getWeather).toHaveBeenCalled();
});
