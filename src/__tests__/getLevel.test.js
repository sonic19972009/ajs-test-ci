import fetchData from '../http.js';
import { getLevel } from '../getLevel.js';

jest.mock('../http.js');

describe('getLevel', () => {
  test('should return level when status ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 42 });
    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 42');
  });

  test('should return error message when status not ok', () => {
    fetchData.mockReturnValue({ status: 'error' });
    const result = getLevel(2);
    expect(result).toBe('Информация об уровне временно недоступна');
  });
});
