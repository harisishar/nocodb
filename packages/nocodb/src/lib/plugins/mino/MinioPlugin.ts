import { IStorageAdapterV2, XcStoragePlugin } from 'nc-plugin';

import Minio from './Minio';

class MinioPlugin extends XcStoragePlugin {
  private static storageAdapter: Minio;

  public getAdapter(): IStorageAdapterV2 {
    return MinioPlugin.storageAdapter;
  }

  public async init(config: any): Promise<any> {
    MinioPlugin.storageAdapter = new Minio(config);
    await MinioPlugin.storageAdapter.init();
  }
}

export default MinioPlugin;
