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
import {Language} from './Language';

/**
 * The LanguagePaginationResult model module.
 * @module model/LanguagePaginationResult
 * @version 1.0.0
 */
export class LanguagePaginationResult {
  /**
   * Constructs a new <code>LanguagePaginationResult</code>.
   * @alias module:model/LanguagePaginationResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LanguagePaginationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LanguagePaginationResult} obj Optional instance to populate.
   * @return {module:model/LanguagePaginationResult} The populated <code>LanguagePaginationResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LanguagePaginationResult();
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('entryCount'))
        obj.entryCount = ApiClient.convertToType(data['entryCount'], 'Number');
      if (data.hasOwnProperty('maxEntryCount'))
        obj.maxEntryCount = ApiClient.convertToType(data['maxEntryCount'], 'Number');
      if (data.hasOwnProperty('entries'))
        obj.entries = ApiClient.convertToType(data['entries'], [Language]);
    }
    return obj;
  }
}

/**
 * @member {Number} limit
 */
LanguagePaginationResult.prototype.limit = undefined;

/**
 * @member {Number} offset
 */
LanguagePaginationResult.prototype.offset = undefined;

/**
 * @member {Number} entryCount
 */
LanguagePaginationResult.prototype.entryCount = undefined;

/**
 * @member {Number} maxEntryCount
 */
LanguagePaginationResult.prototype.maxEntryCount = undefined;

/**
 * @member {Array.<module:model/Language>} entries
 */
LanguagePaginationResult.prototype.entries = undefined;


