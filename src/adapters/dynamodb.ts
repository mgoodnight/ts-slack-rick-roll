import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
} from '@aws-sdk/lib-dynamodb';

export class DynamoDbAdapter {
  /**
   * Instance of DynamoDBDocumentClient
   *
   * @private
   * @type {DynamoDBDocumentClient}
   * @memberof DynamoDbAdapter
   */
  private client: DynamoDBDocumentClient;

  /**
   * Creates an instance of DynamoDbAdapter
   *
   * @param {DynamoDBClientConfig} params
   * @memberof DynamoDbAdapter
   */
  constructor(params: DynamoDBClientConfig = {}) {
    this.client = DynamoDBDocumentClient.from(new DynamoDBClient(params), {
      marshallOptions: { removeUndefinedValues: true },
    });
  }

  /**
   * Execute a GetCommand to DynamoDB
   *
   * @returns {Promise<GetCommandOutput>}
   * @memberof DynamoDbAdapter
   */
  public async get(params: GetCommandInput): Promise<GetCommandOutput> {
    return await this.client.send(new GetCommand(params));
  }

  /**
   * Execute a PutCommand to DynamoDB
   *
   * @returns {Promise<PutCommandOutput>}
   * @memberof DynamoDbAdapter
   */
  public async put(params: PutCommandInput): Promise<PutCommandOutput> {
    return await this.client.send(new PutCommand(params));
  }
}

export default new DynamoDbAdapter();
