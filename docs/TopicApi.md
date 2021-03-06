# SeminarCatalogApi.TopicApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**topicCreate**](TopicApi.md#topicCreate) | **POST** /api/topic | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**topicDelete**](TopicApi.md#topicDelete) | **DELETE** /api/topic/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**topicGet**](TopicApi.md#topicGet) | **GET** /api/topic/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**topicList**](TopicApi.md#topicList) | **GET** /api/topic | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**topicUpdate**](TopicApi.md#topicUpdate) | **PUT** /api/topic/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="topicCreate"></a>
# **topicCreate**
> Topic topicCreate(topicPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TopicApi();

const topicPost = new SeminarCatalogApi.Topic(); // Topic | 

apiInstance.topicCreate(topicPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicPost** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="topicDelete"></a>
# **topicDelete**
> Topic topicDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TopicApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.topicDelete(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**Topic**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="topicGet"></a>
# **topicGet**
> Topic topicGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TopicApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.topicGet(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**Topic**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="topicList"></a>
# **topicList**
> TopicPaginationResult topicList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TopicApi();
apiInstance.topicList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TopicPaginationResult**](TopicPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="topicUpdate"></a>
# **topicUpdate**
> Topic topicUpdate(id, topicPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TopicApi();

const id = 56; // Number | The resource identifier

const topicPut = new SeminarCatalogApi.Topic(); // Topic | 

apiInstance.topicUpdate(id, topicPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **topicPut** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

