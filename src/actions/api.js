
const API_BASE = 'http://localhost:8081/api';

export function getCategoryInfoAsync(dispatch, nextAction) {
  return fetch(`${API_BASE}/categories?nested=false`)
    .then(res => res.json())
    .then(json => json.map(category => ({ value: category.id, label: category.category })))
    .then(categories => {
      dispatch(nextAction(categories))
    });
}