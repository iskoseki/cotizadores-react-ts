const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function createApiUrl(path) {
  return `${API_BASE_URL}${path}`;
}
