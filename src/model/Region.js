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
 * The Region model module.
 * @module model/Region
 * @version 1.0.0
 */
export class Region {
  /**
   * Constructs a new <code>Region</code>.
   * @alias module:model/Region
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Region</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Region} obj Optional instance to populate.
   * @return {module:model/Region} The populated <code>Region</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Region();
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('dateFormat'))
        obj.dateFormat = ApiClient.convertToType(data['dateFormat'], 'String');
      if (data.hasOwnProperty('dateTimeFormat'))
        obj.dateTimeFormat = ApiClient.convertToType(data['dateTimeFormat'], 'String');
      if (data.hasOwnProperty('timeFormat'))
        obj.timeFormat = ApiClient.convertToType(data['timeFormat'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'Number');
      if (data.hasOwnProperty('monthNames'))
        obj.monthNames = ApiClient.convertToType(data['monthNames'], 'String');
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
Region.prototype.syncFields = undefined;

/**
 * @member {String} name
 */
Region.prototype.name = undefined;

/**
 * @member {String} dateFormat
 */
Region.prototype.dateFormat = undefined;

/**
 * @member {String} dateTimeFormat
 */
Region.prototype.dateTimeFormat = undefined;

/**
 * @member {String} timeFormat
 */
Region.prototype.timeFormat = undefined;

/**
 * @member {Number} currency
 */
Region.prototype.currency = undefined;

/**
 * @member {String} monthNames
 */
Region.prototype.monthNames = undefined;

/**
 * @member {Number} id
 */
Region.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
Region.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
Region.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
Region.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
Region.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
Region.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
Region.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
Region.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
Region.prototype.tags = undefined;


