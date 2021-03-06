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
 * The Address model module.
 * @module model/Address
 * @version 1.0.0
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Address();
      if (data.hasOwnProperty('addressType'))
        obj.addressType = ApiClient.convertToType(data['addressType'], 'String');
      if (data.hasOwnProperty('company'))
        obj.company = ApiClient.convertToType(data['company'], 'String');
      if (data.hasOwnProperty('department'))
        obj.department = ApiClient.convertToType(data['department'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('firstname'))
        obj.firstname = ApiClient.convertToType(data['firstname'], 'String');
      if (data.hasOwnProperty('lastname'))
        obj.lastname = ApiClient.convertToType(data['lastname'], 'String');
      if (data.hasOwnProperty('degree'))
        obj.degree = ApiClient.convertToType(data['degree'], 'String');
      if (data.hasOwnProperty('customerNumber'))
        obj.customerNumber = ApiClient.convertToType(data['customerNumber'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (data.hasOwnProperty('zipcode'))
        obj.zipcode = ApiClient.convertToType(data['zipcode'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('countryId'))
        obj.countryId = ApiClient.convertToType(data['countryId'], 'Number');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('fax'))
        obj.fax = ApiClient.convertToType(data['fax'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('invoiceEmail'))
        obj.invoiceEmail = ApiClient.convertToType(data['invoiceEmail'], 'String');
      if (data.hasOwnProperty('useInvoiceEmail'))
        obj.useInvoiceEmail = ApiClient.convertToType(data['useInvoiceEmail'], 'Number');
      if (data.hasOwnProperty('extra1'))
        obj.extra1 = ApiClient.convertToType(data['extra1'], 'String');
      if (data.hasOwnProperty('extra2'))
        obj.extra2 = ApiClient.convertToType(data['extra2'], 'String');
      if (data.hasOwnProperty('orderNumber'))
        obj.orderNumber = ApiClient.convertToType(data['orderNumber'], 'String');
      if (data.hasOwnProperty('supplierNumber'))
        obj.supplierNumber = ApiClient.convertToType(data['supplierNumber'], 'String');
      if (data.hasOwnProperty('vatNo'))
        obj.vatNo = ApiClient.convertToType(data['vatNo'], 'String');
      if (data.hasOwnProperty('noOrderNumberNeeded'))
        obj.noOrderNumberNeeded = ApiClient.convertToType(data['noOrderNumberNeeded'], 'Number');
      if (data.hasOwnProperty('participationDefault'))
        obj.participationDefault = ApiClient.convertToType(data['participationDefault'], 'Number');
      if (data.hasOwnProperty('shippingDefault'))
        obj.shippingDefault = ApiClient.convertToType(data['shippingDefault'], 'Number');
      if (data.hasOwnProperty('billingDefault'))
        obj.billingDefault = ApiClient.convertToType(data['billingDefault'], 'Number');
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
 * @member {String} addressType
 */
Address.prototype.addressType = undefined;

/**
 * @member {String} company
 */
Address.prototype.company = undefined;

/**
 * @member {String} department
 */
Address.prototype.department = undefined;

/**
 * @member {String} gender
 */
Address.prototype.gender = undefined;

/**
 * @member {String} title
 */
Address.prototype.title = undefined;

/**
 * @member {String} firstname
 */
Address.prototype.firstname = undefined;

/**
 * @member {String} lastname
 */
Address.prototype.lastname = undefined;

/**
 * @member {String} degree
 */
Address.prototype.degree = undefined;

/**
 * @member {String} customerNumber
 */
Address.prototype.customerNumber = undefined;

/**
 * @member {String} street
 */
Address.prototype.street = undefined;

/**
 * @member {String} zipcode
 */
Address.prototype.zipcode = undefined;

/**
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * @member {String} country
 */
Address.prototype.country = undefined;

/**
 * @member {Number} countryId
 */
Address.prototype.countryId = undefined;

/**
 * @member {String} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * @member {String} phone
 */
Address.prototype.phone = undefined;

/**
 * @member {String} fax
 */
Address.prototype.fax = undefined;

/**
 * @member {String} email
 */
Address.prototype.email = undefined;

/**
 * @member {String} invoiceEmail
 */
Address.prototype.invoiceEmail = undefined;

/**
 * @member {Number} useInvoiceEmail
 */
Address.prototype.useInvoiceEmail = undefined;

/**
 * @member {String} extra1
 */
Address.prototype.extra1 = undefined;

/**
 * @member {String} extra2
 */
Address.prototype.extra2 = undefined;

/**
 * @member {String} orderNumber
 */
Address.prototype.orderNumber = undefined;

/**
 * @member {String} supplierNumber
 */
Address.prototype.supplierNumber = undefined;

/**
 * @member {String} vatNo
 */
Address.prototype.vatNo = undefined;

/**
 * @member {Number} noOrderNumberNeeded
 */
Address.prototype.noOrderNumberNeeded = undefined;

/**
 * @member {Number} participationDefault
 */
Address.prototype.participationDefault = undefined;

/**
 * @member {Number} shippingDefault
 */
Address.prototype.shippingDefault = undefined;

/**
 * @member {Number} billingDefault
 */
Address.prototype.billingDefault = undefined;

/**
 * @member {Array.<String>} syncFields
 */
Address.prototype.syncFields = undefined;

/**
 * @member {Number} id
 */
Address.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
Address.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
Address.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
Address.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
Address.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
Address.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
Address.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
Address.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
Address.prototype.tags = undefined;


