# SeminarCatalogApi.AllocationWaitingListApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationwaitinglistCreate**](AllocationWaitingListApi.md#allocationwaitinglistCreate) | **POST** /api/allocationwaitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**allocationwaitinglistDelete**](AllocationWaitingListApi.md#allocationwaitinglistDelete) | **DELETE** /api/allocationwaitinglist/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**allocationwaitinglistGet**](AllocationWaitingListApi.md#allocationwaitinglistGet) | **GET** /api/allocationwaitinglist/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**allocationwaitinglistList**](AllocationWaitingListApi.md#allocationwaitinglistList) | **GET** /api/allocationwaitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**allocationwaitinglistUpdate**](AllocationWaitingListApi.md#allocationwaitinglistUpdate) | **PUT** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="allocationwaitinglistCreate"></a>
# **allocationwaitinglistCreate**
> AllocationWaitingList allocationwaitinglistCreate(allocationWaitingListPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const allocationWaitingListPost = new SeminarCatalogApi.AllocationWaitingList(); // AllocationWaitingList | 

apiInstance.allocationwaitinglistCreate(allocationWaitingListPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationWaitingListPost** | [**AllocationWaitingList**](AllocationWaitingList.md)|  | 

### Return type

[**AllocationWaitingList**](AllocationWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="allocationwaitinglistDelete"></a>
# **allocationwaitinglistDelete**
> AllocationWaitingList allocationwaitinglistDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.allocationwaitinglistDelete(id, lng).then((data) => {
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

[**AllocationWaitingList**](AllocationWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="allocationwaitinglistGet"></a>
# **allocationwaitinglistGet**
> AllocationWaitingList allocationwaitinglistGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.allocationwaitinglistGet(id, lng).then((data) => {
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

[**AllocationWaitingList**](AllocationWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="allocationwaitinglistList"></a>
# **allocationwaitinglistList**
> AllocationWaitingListPaginationResult allocationwaitinglistList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();
apiInstance.allocationwaitinglistList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllocationWaitingListPaginationResult**](AllocationWaitingListPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="allocationwaitinglistUpdate"></a>
# **allocationwaitinglistUpdate**
> AllocationWaitingList allocationwaitinglistUpdate(id, allocationWaitingListPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const id = 56; // Number | The resource identifier

const allocationWaitingListPut = new SeminarCatalogApi.AllocationWaitingList(); // AllocationWaitingList | 

apiInstance.allocationwaitinglistUpdate(id, allocationWaitingListPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **allocationWaitingListPut** | [**AllocationWaitingList**](AllocationWaitingList.md)|  | 

### Return type

[**AllocationWaitingList**](AllocationWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

