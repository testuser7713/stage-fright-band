import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

const DB_PATH = "/sql-wasm.js"; // Path to sql-wasm.js in the public folder

const SQLiteComponent = forwardRef((props, ref) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const loadDatabase = async () => {
      try {
        const SQL = await window.initSqlJs({
          // locateFile: (file) => `${process.env.PUBLIC_URL}/sql-wasm.wasm`,
          locateFile: (file) => `/stage-fright-band/sql-wasm.wasm`,
        });

        const request = indexedDB.open("MyDatabase", 1);

        request.onupgradeneeded = (event) => {
          const idb = event.target.result;
          idb.createObjectStore("sqlite", { keyPath: "id" });
        };

        request.onsuccess = (event) => {
          const idb = event.target.result;
          const transaction = idb.transaction("sqlite", "readwrite");
          const store = transaction.objectStore("sqlite");
          const getRequest = store.get(1);

          getRequest.onsuccess = () => {
            let database;
            if (getRequest.result) {
              database = new SQL.Database(new Uint8Array(getRequest.result.data));
            } else {
              database = new SQL.Database();

              database.run(
                "CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, number INTEGER);"
              );

              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt1", 5]);
              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt2", 5]);
              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt3", 5]);
              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt4", 5]);
              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt5", 5]);
              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt6", 5]);
              database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt7", 5]);

			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt8", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt9", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["shirt10", 5]);
			  
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["toteOne", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["toteTwo", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["cap", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["tokens", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["bundle", 5]);
			  

			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["fanny", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["vinyl", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["manuscript", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["cd", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["ignition_vinyl", 5]);

			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["lif_vinyl", 5]);
			  database.run("INSERT INTO messages (text, number) VALUES (?, ?)", ["surged_vinyl", 5]);


              saveToIndexedDB(database);
            }

            setDb(database);
          };
        };
      } catch (error) {
        console.error("Error loading database:", error);
      }
    };

    loadDatabase();
  }, []);

  const saveToIndexedDB = (database) => {
    const binaryArray = database.export();
    const request = indexedDB.open("MyDatabase", 1);

    request.onsuccess = (event) => {
      const idb = event.target.result;
      const transaction = idb.transaction("sqlite", "readwrite");
      const store = transaction.objectStore("sqlite");
      store.put({ id: 1, data: binaryArray });
    };
  };

  const fetchDataByText = (searchText) => {
    if (!db || !searchText) return null;

    const query = "SELECT number FROM messages WHERE text = ?";
    const result = db.exec(query, [searchText]);

    if (result.length && result[0].values.length) {
      return result[0].values[0][0];
    } else {
      return null;
    }
  };

  

const updateNumberByText = (text, newNumber) => {
  if (!db || !text || newNumber === undefined) {
    console.warn("Database not ready or missing parameters.");
    return;
  }

  const querySelect = "SELECT number FROM messages WHERE text = ?";
  const result = db.exec(querySelect, [text]);

  if (!result.length || !result[0].values.length) {
    console.warn(`No matching item found for: ${text}`);
    return;
  }

  const currentNumber = result[0].values[0][0]; // ? Extract current number value

  const updatedNumber = currentNumber - parseInt(newNumber, 10);

  if (updatedNumber < 0) {
    console.warn(`Warning: Resulting number for "${text}" is negative. Setting to 0.`);
    updatedNumber = 0; // ? Prevent negative values
  }

  const queryUpdate = "UPDATE messages SET number = ? WHERE text = ?";
  db.run(queryUpdate, [updatedNumber, text]);

  saveToIndexedDB(db); // ? Save changes to IndexedDB for persistence

};
  
  
  
  
  
  

  useImperativeHandle(ref, () => ({
    fetchDataByText,
    updateNumberByText,
  }));

  return <div></div>;
});

export default SQLiteComponent;
