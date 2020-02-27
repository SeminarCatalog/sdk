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
import {Subscription} from './Subscription';

/**
 * The SubscriptionPaginationResult model module.
 * @module model/SubscriptionPaginationResult
 * @version 1.0.0
 */
export class SubscriptionPaginationResult {
  /**
   * Constructs a new <code>SubscriptionPaginationResult</code>.
   * @alias module:model/SubscriptionPaginationResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubscriptionPaginationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionPaginationResult} obj Optional instance to populate.
   * @return {module:model/SubscriptionPaginationResult} The populated <code>SubscriptionPaginationResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionPaginationResult();
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('entryCount'))
        obj.entryCount = ApiClient.convertToType(data['entryCount'], 'Number');
      if (data.hasOwnProperty('maxEntryCount'))
        obj.maxEntryCount = ApiClient.convertToType(data['maxEntryCount'], 'Number');
      if (data.hasOwnProperty('entries'))
        obj.entries = ApiClient.convertToType(data['entries'], [Subscription]);
    }
    return obj;
  }
}

/**
 * @member {Number} limit
 */
SubscriptionPaginationResult.prototype.limit = undefined;

/**
 * @member {Number} offset
 */
SubscriptionPaginationResult.prototype.offset = undefined;

/**
 * @member {Number} entryCount
 */
SubscriptionPaginationResult.prototype.entryCount = undefined;

/**
 * @member {Number} maxEntryCount
 */
SubscriptionPaginationResult.prototype.maxEntryCount = undefined;

/**
 * @member {Array.<module:model/Subscription>} entries
 */
SubscriptionPaginationResult.prototype.entries = undefined;


