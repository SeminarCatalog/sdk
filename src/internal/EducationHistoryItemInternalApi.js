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
import {EducationHistoryItem} from '../model/EducationHistoryItem';

/**
* EducationHistoryItem internal service.
* @module internal/EducationHistoryItemInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class EducationHistoryItemInternalApi {

    /**
    * Constructs a new EducationHistoryItemInternalApi. 
    * @alias module:internal/EducationHistoryItemInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EducationHistoryItem} and HTTP response
     */
    educationhistoryitemCreateWithHttpInfo() {
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
      let returnType = EducationHistoryItem;

      return this.apiClient.callApi(
        '/api/educationhistoryitem', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EducationHistoryItem}
     */
    educationhistoryitemCreate() {
      return this.educationhistoryitemCreateWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EducationHistoryItem} and HTTP response
     */
    educationhistoryitemDeleteWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling educationhistoryitemDelete");
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
      let returnType = EducationHistoryItem;

      return this.apiClient.callApi(
        '/api/educationhistoryitem/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EducationHistoryItem}
     */
    educationhistoryitemDelete(id) {
      return this.educationhistoryitemDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EducationHistoryItem} and HTTP response
     */
    educationhistoryitemGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling educationhistoryitemGet");
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
      let returnType = EducationHistoryItem;

      return this.apiClient.callApi(
        '/api/educationhistoryitem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EducationHistoryItem}
     */
    educationhistoryitemGet(id) {
      return this.educationhistoryitemGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EducationHistoryItem} and HTTP response
     */
    educationhistoryitemListWithHttpInfo() {
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
      let returnType = EducationHistoryItem;

      return this.apiClient.callApi(
        '/api/educationhistoryitem', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EducationHistoryItem}
     */
    educationhistoryitemList() {
      return this.educationhistoryitemListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EducationHistoryItem} and HTTP response
     */
    educationhistoryitemUpdateWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling educationhistoryitemUpdate");
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
      let returnType = EducationHistoryItem;

      return this.apiClient.callApi(
        '/api/educationhistoryitem/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EducationHistoryItem}
     */
    educationhistoryitemUpdate(id) {
      return this.educationhistoryitemUpdateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
