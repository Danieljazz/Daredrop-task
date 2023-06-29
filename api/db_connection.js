import Database from "better-sqlite3";

export const db = new Database(
  "./dare2stream.db",
  { readonly: false },
  (err) => {
    err && console.log("Cannot connect with db", err);
  }
);

// try {
//   const stmt = db.prepare("select");
//   stmt.run();
// } catch (e) {
//   console.log("there is db problem \n", e);
// }

//console.log(info);
// let sql =
//   "CREATE TABLE streamers ( id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL, description VARCHAR(1000), platform VARCHAR(20) NOT NULL, votes INT DEFAULT NULL, img VARCHAR(1000))";
// let sql = `
// CREATE TABLE streamers ( id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL, description VARCHAR(1000), platform VARCHAR(20) NOT NULL,  img VARCHAR(1000) DEFAULT "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png", UNIQUE(name , platform ))
// `;
// const stmt = db.prepare(sql);
// stmt.run();
