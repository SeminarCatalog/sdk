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
 * The SubscriptionConfiguration model module.
 * @module model/SubscriptionConfiguration
 * @version 1.0.0
 */
export class SubscriptionConfiguration {
  /**
   * Constructs a new <code>SubscriptionConfiguration</code>.
   * @alias module:model/SubscriptionConfiguration
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubscriptionConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionConfiguration} obj Optional instance to populate.
   * @return {module:model/SubscriptionConfiguration} The populated <code>SubscriptionConfiguration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionConfiguration();
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('subscriptionDuration'))
        obj.subscriptionDuration = ApiClient.convertToType(data['subscriptionDuration'], 'Number');
      if (data.hasOwnProperty('daysTerminationPossible'))
        obj.daysTerminationPossible = ApiClient.convertToType(data['daysTerminationPossible'], 'Number');
      if (data.hasOwnProperty('daysInvoiceCreation'))
        obj.daysInvoiceCreation = ApiClient.convertToType(data['daysInvoiceCreation'], 'Number');
      if (data.hasOwnProperty('daysUntilSuspension'))
        obj.daysUntilSuspension = ApiClient.convertToType(data['daysUntilSuspension'], 'Number');
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
SubscriptionConfiguration.prototype.syncFields = undefined;

/**
 * @member {String} title
 */
SubscriptionConfiguration.prototype.title = undefined;

/**
 * @member {String} description
 */
SubscriptionConfiguration.prototype.description = undefined;

/**
 * @member {Number} subscriptionDuration
 */
SubscriptionConfiguration.prototype.subscriptionDuration = undefined;

/**
 * @member {Number} daysTerminationPossible
 */
SubscriptionConfiguration.prototype.daysTerminationPossible = undefined;

/**
 * @member {Number} daysInvoiceCreation
 */
SubscriptionConfiguration.prototype.daysInvoiceCreation = undefined;

/**
 * @member {Number} daysUntilSuspension
 */
SubscriptionConfiguration.prototype.daysUntilSuspension = undefined;

/**
 * @member {Number} id
 */
SubscriptionConfiguration.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
SubscriptionConfiguration.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
SubscriptionConfiguration.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
SubscriptionConfiguration.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
SubscriptionConfiguration.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
SubscriptionConfiguration.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
SubscriptionConfiguration.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
SubscriptionConfiguration.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
SubscriptionConfiguration.prototype.tags = undefined;


