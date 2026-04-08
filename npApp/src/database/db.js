import * as SQLite from 'expo-sqlite';

let db = null;

// ✅ Initialize DB
export const initDB = async () => {
  if (db) return db; // already initialized

  db = await SQLite.openDatabaseAsync('nexapay.db');

  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount REAL NOT NULL,
    type TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

  return db;
};

// ✅ Ensure DB exists before use
const getDB = async () => {
  if (!db) {
    await initDB();
  }
  return db;
};

// ➕ Insert user
export const insertUser = async (email) => {
  const database = await getDB();

  await database.runAsync('INSERT INTO users (email) VALUES (?);', [email]);
};

// 🔍 Get user
export const getUser = async () => {
  const database = await getDB();

  const result = await database.getAllAsync('SELECT * FROM users LIMIT 1;');

  return result[0];
};

// ❌ Delete user
export const deleteUser = async () => {
  const database = await getDB();

  await database.runAsync('DELETE FROM users;');
};

export const insertTransaction = async (amount, type) => {
  const database = await getDB();

  await database.runAsync(
    'INSERT INTO transactions (amount, type) VALUES (?, ?);',
    [amount, type]
  );
};

export const getTransactions = async () => {
  const database = await getDB();

  const result = await database.getAllAsync(
    'SELECT * FROM transactions ORDER BY created_at DESC;'
  );

  return result;
};

export const userExists = async (email) => {
  const database = await getDB();

  const result = await database.getAllAsync(
    'SELECT * FROM users WHERE email = ?;',
    [email]
  );

  return result.length > 0;
};