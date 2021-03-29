export function getData(data?: object[] | string): Promise<object[]> {
  if (typeof data === 'string' && data.startsWith('http')) {
    const url = data;
    return fetch(url).then(data => data.json());
  } else if (typeof data === 'object') {
    return Promise.resolve(data);
  }

  return Promise.resolve([]);
}
