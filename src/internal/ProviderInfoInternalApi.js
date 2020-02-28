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
import {ProviderInfo} from '../model/ProviderInfo';
import {ProviderInfoPaginationResult} from '../model/ProviderInfoPaginationResult';

/**
* ProviderInfo internal service.
* @module internal/ProviderInfoInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class ProviderInfoInternalApi {

    /**
    * Constructs a new ProviderInfoInternalApi. 
    * @alias module:internal/ProviderInfoInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/ProviderInfo} providerInfoPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProviderInfo} and HTTP response
     */
    providerinfoCreateWithHttpInfo(providerInfoPost) {
      let postBody = providerInfoPost;

      // verify the required parameter 'providerInfoPost' is set
      if (providerInfoPost === undefined || providerInfoPost === null) {
        throw new Error("Missing the required parameter 'providerInfoPost' when calling providerinfoCreate");
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
      let returnType = ProviderInfo;

      return this.apiClient.callApi(
        '/api/providerinfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/ProviderInfo} providerInfoPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProviderInfo}
     */
    providerinfoCreate(providerInfoPost) {
      return this.providerinfoCreateWithHttpInfo(providerInfoPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProviderInfo} and HTTP response
     */
    providerinfoDeleteWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling providerinfoDelete");
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
      let returnType = ProviderInfo;

      return this.apiClient.callApi(
        '/api/providerinfo/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProviderInfo}
     */
    providerinfoDelete(id) {
      return this.providerinfoDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProviderInfo} and HTTP response
     */
    providerinfoGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling providerinfoGet");
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
      let returnType = ProviderInfo;

      return this.apiClient.callApi(
        '/api/providerinfo/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProviderInfo}
     */
    providerinfoGet(id) {
      return this.providerinfoGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProviderInfoPaginationResult} and HTTP response
     */
    providerinfoListWithHttpInfo() {
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
      let returnType = ProviderInfoPaginationResult;

      return this.apiClient.callApi(
        '/api/providerinfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProviderInfoPaginationResult}
     */
    providerinfoList() {
      return this.providerinfoListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/ProviderInfo} providerInfoPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProviderInfo} and HTTP response
     */
    providerinfoUpdateWithHttpInfo(id, providerInfoPut) {
      let postBody = providerInfoPut;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling providerinfoUpdate");
      }

      // verify the required parameter 'providerInfoPut' is set
      if (providerInfoPut === undefined || providerInfoPut === null) {
        throw new Error("Missing the required parameter 'providerInfoPut' when calling providerinfoUpdate");
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
      let returnType = ProviderInfo;

      return this.apiClient.callApi(
        '/api/providerinfo/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/ProviderInfo} providerInfoPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProviderInfo}
     */
    providerinfoUpdate(id, providerInfoPut) {
      return this.providerinfoUpdateWithHttpInfo(id, providerInfoPut)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
