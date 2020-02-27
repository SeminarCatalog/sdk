/*
 * SeminarCatalog API
 * Rest API for SeminarCatalog Administration
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@databay.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 */

import {ApiClient} from '../ApiClient';
import {ProviderInfo} from './ProviderInfo';

/**
 * The ProviderInfoPaginationResult model module.
 * @module model/ProviderInfoPaginationResult
 * @version 1.0.0
 */
export class ProviderInfoPaginationResult {
  /**
   * Constructs a new <code>ProviderInfoPaginationResult</code>.
   * @alias module:model/ProviderInfoPaginationResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProviderInfoPaginationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderInfoPaginationResult} obj Optional instance to populate.
   * @return {module:model/ProviderInfoPaginationResult} The populated <code>ProviderInfoPaginationResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProviderInfoPaginationResult();
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('entryCount'))
        obj.entryCount = ApiClient.convertToType(data['entryCount'], 'Number');
      if (data.hasOwnProperty('maxEntryCount'))
        obj.maxEntryCount = ApiClient.convertToType(data['maxEntryCount'], 'Number');
      if (data.hasOwnProperty('entries'))
        obj.entries = ApiClient.convertToType(data['entries'], [ProviderInfo]);
    }
    return obj;
  }
}

/**
 * @member {Number} limit
 */
ProviderInfoPaginationResult.prototype.limit = undefined;

/**
 * @member {Number} offset
 */
ProviderInfoPaginationResult.prototype.offset = undefined;

/**
 * @member {Number} entryCount
 */
ProviderInfoPaginationResult.prototype.entryCount = undefined;

/**
 * @member {Number} maxEntryCount
 */
ProviderInfoPaginationResult.prototype.maxEntryCount = undefined;

/**
 * @member {Array.<module:model/ProviderInfo>} entries
 */
ProviderInfoPaginationResult.prototype.entries = undefined;


