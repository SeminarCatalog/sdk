# SeminarCatalogApi.OrganizerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizerCreate**](OrganizerApi.md#organizerCreate) | **POST** /api/organizer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**organizerDelete**](OrganizerApi.md#organizerDelete) | **DELETE** /api/organizer/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**organizerGet**](OrganizerApi.md#organizerGet) | **GET** /api/organizer/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**organizerList**](OrganizerApi.md#organizerList) | **GET** /api/organizer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**organizerUpdate**](OrganizerApi.md#organizerUpdate) | **PUT** /api/organizer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="organizerCreate"></a>
# **organizerCreate**
> Organizer organizerCreate(organizerPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrganizerApi();

const organizerPost = new SeminarCatalogApi.Organizer(); // Organizer | 

apiInstance.organizerCreate(organizerPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizerPost** | [**Organizer**](Organizer.md)|  | 

### Return type

[**Organizer**](Organizer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="organizerDelete"></a>
# **organizerDelete**
> Organizer organizerDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrganizerApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.organizerDelete(id, lng).then((data) => {
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

[**Organizer**](Organizer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="organizerGet"></a>
# **organizerGet**
> Organizer organizerGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrganizerApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.organizerGet(id, lng).then((data) => {
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

[**Organizer**](Organizer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="organizerList"></a>
# **organizerList**
> OrganizerPaginationResult organizerList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrganizerApi();
apiInstance.organizerList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OrganizerPaginationResult**](OrganizerPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="organizerUpdate"></a>
# **organizerUpdate**
> Organizer organizerUpdate(id, organizerPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrganizerApi();

const id = 56; // Number | The resource identifier

const organizerPut = new SeminarCatalogApi.Organizer(); // Organizer | 

apiInstance.organizerUpdate(id, organizerPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **organizerPut** | [**Organizer**](Organizer.md)|  | 

### Return type

[**Organizer**](Organizer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

