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

/**
 * The WaitingList model module.
 * @module model/WaitingList
 * @version 1.0.0
 */
export class WaitingList {
  /**
   * Constructs a new <code>WaitingList</code>.
   * @alias module:model/WaitingList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WaitingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WaitingList} obj Optional instance to populate.
   * @return {module:model/WaitingList} The populated <code>WaitingList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WaitingList();
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('foreignId'))
        obj.foreignId = ApiClient.convertToType(data['foreignId'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'Number');
      if (data.hasOwnProperty('createDate'))
        obj.createDate = ApiClient.convertToType(data['createDate'], 'Number');
      if (data.hasOwnProperty('changeDate'))
        obj.changeDate = ApiClient.convertToType(data['changeDate'], 'Number');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Number');
      if (data.hasOwnProperty('hidden'))
        obj.hidden = ApiClient.convertToType(data['hidden'], 'Number');
      if (data.hasOwnProperty('sorting'))
        obj.sorting = ApiClient.convertToType(data['sorting'], 'Number');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} syncFields
 */
WaitingList.prototype.syncFields = undefined;

/**
 * @member {Number} id
 */
WaitingList.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
WaitingList.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
WaitingList.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
WaitingList.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
WaitingList.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
WaitingList.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
WaitingList.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
WaitingList.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
WaitingList.prototype.tags = undefined;


