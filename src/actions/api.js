
const API_BASE = 'http://localhost:8081/api';

export function getLocationInfoAsync(dispatch, nextAction) {
  return fetch(`${API_BASE}/locations`)
    .then(res => res.json())
    .then(json => json.map(location => ({ value: location.id, label: location.county })))
    .then(locations => dispatch(nextAction(locations)));
}

export function getCategoryInfoAsync(dispatch, nextAction) {
  return fetch(`${API_BASE}/categories?nested=false`)
    .then(res => res.json())
    .then(json => json.map(category => ({ value: category.id, label: category.category })))
    .then(categories => dispatch(nextAction(categories)));
}