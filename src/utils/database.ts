import * as sqlite3 from 'better-sqlite3';


// Определите интерфейс для данных, которые хранятся в таблице Users
interface UserData {
  ID: number;
  address: string;
  Mnemonic: string;
  ton_mnemonic: string;
  private_key: string;
  username: string;
  custom_erc: string;
  auth: string;
}

export class MnemonicDatabase {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3('test_wallets.db');
    this.init();
  }


  private async init() {
    await this.db.exec(`
    CREATE TABLE IF NOT EXISTS Users (ID CONSTRAINT "1" UNIQUE ON CONFLICT REPLACE, address, Mnemonic, ton_mnemonic, private_key, username CONSTRAINT Username UNIQUE ON CONFLICT REPLACE, custom_erc, auth UNIQUE);
    CREATE UNIQUE INDEX IF NOT EXISTS sqlite_autoindex_Users_1 ON Users (ID COLLATE BINARY);
    CREATE UNIQUE INDEX IF NOT EXISTS sqlite_autoindex_Users_2 ON Users (username COLLATE BINARY);
    CREATE UNIQUE INDEX IF NOT EXISTS sqlite_autoindex_Users_3 ON Users (auth COLLATE BINARY);
    `);
  }

  async getMnemonic(auth: string): Promise<string | null> {
    const row = await this.db.get<UserData | undefined>('SELECT Mnemonic FROM Users WHERE auth = ?', [auth]);

    return row ? row.Mnemonic : null;
  }

  async saveMnemonic(auth: string, mnemonic: string): Promise<void> {
    await this.db.run('INSERT OR REPLACE INTO Users (auth, Mnemonic) VALUES (?, ?)', [auth, mnemonic]);
  }
}

// Создайте API для работы с базой данных на стороне сервера
export const mnemonicDatabaseAPI = new MnemonicDatabase();
