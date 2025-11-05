import getHealthStatus from '../health.js';

describe('getHealthStatus', () => {
  test('returns "healthy" when health > 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
  });

  test('returns "wounded" when health is between 15 and 50', () => {
    const result = getHealthStatus({ name: 'Воин', health: 50 });
    expect(result).toBe('wounded');
  });

  test('returns "critical" when health < 15', () => {
    const result = getHealthStatus({ name: 'Лучник', health: 10 });
    expect(result).toBe('critical');
  });
});
