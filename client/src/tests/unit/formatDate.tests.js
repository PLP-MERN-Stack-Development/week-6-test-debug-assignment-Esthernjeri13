import { formatDate } from '../../utils/formatDate';

describe('formatDate', () => {
  it('formats ISO date to Kenyan format', () => {
    const result = formatDate('2025-07-18T12:00:00Z');
    expect(result).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });
});
