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
 * The PaymentMethod model module.
 * @module model/PaymentMethod
 * @version 1.0.0
 */
export class PaymentMethod {
  /**
   * Constructs a new <code>PaymentMethod</code>.
   * @alias module:model/PaymentMethod
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentMethod} obj Optional instance to populate.
   * @return {module:model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PaymentMethod();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('imageSrc'))
        obj.imageSrc = ApiClient.convertToType(data['imageSrc'], 'String');
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('controller'))
        obj.controller = ApiClient.convertToType(data['controller'], 'String');
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
 * @member {String} type
 */
PaymentMethod.prototype.type = undefined;

/**
 * @member {String} title
 */
PaymentMethod.prototype.title = undefined;

/**
 * @member {String} imageSrc
 */
PaymentMethod.prototype.imageSrc = undefined;

/**
 * @member {String} provider
 */
PaymentMethod.prototype.provider = undefined;

/**
 * @member {String} controller
 */
PaymentMethod.prototype.controller = undefined;

/**
 * @member {Array.<String>} syncFields
 */
PaymentMethod.prototype.syncFields = undefined;

/**
 * @member {Number} id
 */
PaymentMethod.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
PaymentMethod.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
PaymentMethod.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
PaymentMethod.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
PaymentMethod.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
PaymentMethod.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
PaymentMethod.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
PaymentMethod.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
PaymentMethod.prototype.tags = undefined;


