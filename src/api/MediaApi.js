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
import {MediaInternalApi} from "../internal/MediaInternalApi";

/**
* Media service.
* @module api/MediaApi
* @version 1.0.0
* @mixes {module:internal/MediaInternalApi}
*/
export class MediaApi extends MediaInternalApi {
 // Implement your custom stuff here
}

export const MediaApiSingleton = MediaApi.instance = new MediaApi();
