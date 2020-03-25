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
import {Participation} from './Participation';

/**
 * The ParticipationPaginationResult model module.
 * @module model/ParticipationPaginationResult
 * @version 1.0.0
 */
export class ParticipationPaginationResult {
  /**
   * Constructs a new <code>ParticipationPaginationResult</code>.
   * @alias module:model/ParticipationPaginationResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ParticipationPaginationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParticipationPaginationResult} obj Optional instance to populate.
   * @return {module:model/ParticipationPaginationResult} The populated <code>ParticipationPaginationResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ParticipationPaginationResult();
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('entryCount'))
        obj.entryCount = ApiClient.convertToType(data['entryCount'], 'Number');
      if (data.hasOwnProperty('maxEntryCount'))
        obj.maxEntryCount = ApiClient.convertToType(data['maxEntryCount'], 'Number');
      if (data.hasOwnProperty('entries'))
        obj.entries = ApiClient.convertToType(data['entries'], [Participation]);
    }
    return obj;
  }
}

/**
 * @member {Number} limit
 */
ParticipationPaginationResult.prototype.limit = undefined;

/**
 * @member {Number} offset
 */
ParticipationPaginationResult.prototype.offset = undefined;

/**
 * @member {Number} entryCount
 */
ParticipationPaginationResult.prototype.entryCount = undefined;

/**
 * @member {Number} maxEntryCount
 */
ParticipationPaginationResult.prototype.maxEntryCount = undefined;

/**
 * @member {Array.<module:model/Participation>} entries
 */
ParticipationPaginationResult.prototype.entries = undefined;

