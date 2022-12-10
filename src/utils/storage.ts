export default {
  getItem: (key: string) => JSON.parse(localStorage.getItem(key) || 'null'),
  setItem: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),
  removeItem: (key: string) => localStorage.removeItem(key)
}
