import Database from "better-sqlite3";

export const db = new Database(
  "./dare2stream.db",
  { readonly: false },
  (err) => {
    err && console.log("Cannot connect with db", err);
  }
);
