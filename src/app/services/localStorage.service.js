const DB_KEY = "local-db";
const THEME_KEY = "app_theme";

function setDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function getDB() {
  return JSON.parse(localStorage.getItem(DB_KEY));
}

function addItem(item) {
  const db = JSON.parse(localStorage.getItem(DB_KEY)) || [];
  db.push(item);
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function deleteItem(id) {
  const db = JSON.parse(localStorage.getItem(DB_KEY));
  localStorage.setItem(
    DB_KEY,
    JSON.stringify(db.filter((item) => item.id !== id))
  );
}

function editItem(item) {
  const db = JSON.parse(localStorage.getItem(DB_KEY));
  const index = db.findIndex((elem) => elem.id === item.id);
  db[index] = item;
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function getTheme() {
  return localStorage.getItem(THEME_KEY);
}

function setTheme(theme) {
  return localStorage.setItem(THEME_KEY, theme);
}

const localStorageService = {
  setDB,
  getDB,
  addItem,
  deleteItem,
  editItem,
  getTheme,
  setTheme,
};

export default localStorageService;
