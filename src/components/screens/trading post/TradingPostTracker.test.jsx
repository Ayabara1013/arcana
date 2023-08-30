test('prints tradingPostData to console', () => {
  console.log(tradingPostData);
});import React from 'react';
import { render } from '@testing-library/react';
import TradingPostTracker from './TradingPostTracker';

test('renders TradingPostTracker component', () => {
  const { getByText } = render(<TradingPostTracker />);
  const titleElement = getByText(/Trading Post Tracker/i);
  expect(titleElement).toBeInTheDocument();
});

test('imports tradingPostData successfully', () => {
  expect(() => {
    require('../../../assets/data/tradingPostScraperResults.json');
  }).not.toThrow();
});