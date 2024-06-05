export interface ConfigDynamoDb {
  tables: ConfigDynamoDbTables;
}

export interface ConfigDynamoDbTables {
  installs: string;
}

export interface ConfigServer {
  port: number;
}

export interface ConfigSlackInstall {
  scopes: string[];
}
