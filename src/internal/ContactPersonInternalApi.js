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

import {ApiClient} from "../ApiClient";
import {ContactPerson} from '../model/ContactPerson';
import {ContactPersonPaginationResult} from '../model/ContactPersonPaginationResult';

/**
* ContactPerson internal service.
* @module internal/ContactPersonInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class ContactPersonInternalApi {

    /**
    * Constructs a new ContactPersonInternalApi. 
    * @alias module:internal/ContactPersonInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/ContactPerson} contactPersonPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContactPerson} and HTTP response
     */
    contactpersonCreateWithHttpInfo(contactPersonPost) {
      let postBody = contactPersonPost;

      // verify the required parameter 'contactPersonPost' is set
      if (contactPersonPost === undefined || contactPersonPost === null) {
        throw new Error("Missing the required parameter 'contactPersonPost' when calling contactpersonCreate");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ContactPerson;

      return this.apiClient.callApi(
        '/api/contactperson', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/ContactPerson} contactPersonPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContactPerson}
     */
    contactpersonCreate(contactPersonPost) {
      return this.contactpersonCreateWithHttpInfo(contactPersonPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContactPerson} and HTTP response
     */
    contactpersonDeleteWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactpersonDelete");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ContactPerson;

      return this.apiClient.callApi(
        '/api/contactperson/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContactPerson}
     */
    contactpersonDelete(id) {
      return this.contactpersonDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContactPerson} and HTTP response
     */
    contactpersonGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactpersonGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ContactPerson;

      return this.apiClient.callApi(
        '/api/contactperson/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContactPerson}
     */
    contactpersonGet(id) {
      return this.contactpersonGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContactPersonPaginationResult} and HTTP response
     */
    contactpersonListWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ContactPersonPaginationResult;

      return this.apiClient.callApi(
        '/api/contactperson', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContactPersonPaginationResult}
     */
    contactpersonList() {
      return this.contactpersonListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/ContactPerson} contactPersonPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContactPerson} and HTTP response
     */
    contactpersonUpdateWithHttpInfo(id, contactPersonPut) {
      let postBody = contactPersonPut;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactpersonUpdate");
      }

      // verify the required parameter 'contactPersonPut' is set
      if (contactPersonPut === undefined || contactPersonPut === null) {
        throw new Error("Missing the required parameter 'contactPersonPut' when calling contactpersonUpdate");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ContactPerson;

      return this.apiClient.callApi(
        '/api/contactperson/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/ContactPerson} contactPersonPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContactPerson}
     */
    contactpersonUpdate(id, contactPersonPut) {
      return this.contactpersonUpdateWithHttpInfo(id, contactPersonPut)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
