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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SeminarCatalogApi);
  }
}(this, function(expect, SeminarCatalogApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SeminarCatalogApi.AddressInternalApi();
  });

  describe('(package)', function() {
    describe('AddressInternalApi', function() {
      describe('addressCreate', function() {
        it('should call addressCreate successfully', function(done) {
          // TODO: uncomment addressCreate call and complete the assertions
          /*

          instance.addressCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Address);
            expect(data.addressType).to.be.a('string');
            // expect(data.addressType).to.be("");
            expect(data.company).to.be.a('string');
            // expect(data.company).to.be("");
            expect(data.department).to.be.a('string');
            // expect(data.department).to.be("");
            expect(data.gender).to.be.a('string');
            // expect(data.gender).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.firstname).to.be.a('string');
            // expect(data.firstname).to.be("");
            expect(data.lastname).to.be.a('string');
            // expect(data.lastname).to.be("");
            expect(data.degree).to.be.a('string');
            // expect(data.degree).to.be("");
            expect(data.customerNumber).to.be.a('string');
            // expect(data.customerNumber).to.be("");
            expect(data.street).to.be.a('string');
            // expect(data.street).to.be("");
            expect(data.zipcode).to.be.a('string');
            // expect(data.zipcode).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.country).to.be.a('string');
            // expect(data.country).to.be("");
            expect(data.countryId).to.be.a('number');
            // expect(data.countryId).to.be(0);
            expect(data.countryCode).to.be.a('string');
            // expect(data.countryCode).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.invoiceEmail).to.be.a('string');
            // expect(data.invoiceEmail).to.be("");
            expect(data.useInvoiceEmail).to.be.a('number');
            // expect(data.useInvoiceEmail).to.be(0);
            expect(data.extra1).to.be.a('string');
            // expect(data.extra1).to.be("");
            expect(data.extra2).to.be.a('string');
            // expect(data.extra2).to.be("");
            expect(data.orderNumber).to.be.a('string');
            // expect(data.orderNumber).to.be("");
            expect(data.supplierNumber).to.be.a('string');
            // expect(data.supplierNumber).to.be("");
            expect(data.vatNo).to.be.a('string');
            // expect(data.vatNo).to.be("");
            expect(data.noOrderNumberNeeded).to.be.a('number');
            // expect(data.noOrderNumberNeeded).to.be(0);
            expect(data.participationDefault).to.be.a('number');
            // expect(data.participationDefault).to.be(0);
            expect(data.shippingDefault).to.be.a('number');
            // expect(data.shippingDefault).to.be(0);
            expect(data.billingDefault).to.be.a('number');
            // expect(data.billingDefault).to.be(0);
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressDelete', function() {
        it('should call addressDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for addressDelete call and complete the assertions
          /*
          var id = 56;

          instance.addressDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Address);
            expect(data.addressType).to.be.a('string');
            // expect(data.addressType).to.be("");
            expect(data.company).to.be.a('string');
            // expect(data.company).to.be("");
            expect(data.department).to.be.a('string');
            // expect(data.department).to.be("");
            expect(data.gender).to.be.a('string');
            // expect(data.gender).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.firstname).to.be.a('string');
            // expect(data.firstname).to.be("");
            expect(data.lastname).to.be.a('string');
            // expect(data.lastname).to.be("");
            expect(data.degree).to.be.a('string');
            // expect(data.degree).to.be("");
            expect(data.customerNumber).to.be.a('string');
            // expect(data.customerNumber).to.be("");
            expect(data.street).to.be.a('string');
            // expect(data.street).to.be("");
            expect(data.zipcode).to.be.a('string');
            // expect(data.zipcode).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.country).to.be.a('string');
            // expect(data.country).to.be("");
            expect(data.countryId).to.be.a('number');
            // expect(data.countryId).to.be(0);
            expect(data.countryCode).to.be.a('string');
            // expect(data.countryCode).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.invoiceEmail).to.be.a('string');
            // expect(data.invoiceEmail).to.be("");
            expect(data.useInvoiceEmail).to.be.a('number');
            // expect(data.useInvoiceEmail).to.be(0);
            expect(data.extra1).to.be.a('string');
            // expect(data.extra1).to.be("");
            expect(data.extra2).to.be.a('string');
            // expect(data.extra2).to.be("");
            expect(data.orderNumber).to.be.a('string');
            // expect(data.orderNumber).to.be("");
            expect(data.supplierNumber).to.be.a('string');
            // expect(data.supplierNumber).to.be("");
            expect(data.vatNo).to.be.a('string');
            // expect(data.vatNo).to.be("");
            expect(data.noOrderNumberNeeded).to.be.a('number');
            // expect(data.noOrderNumberNeeded).to.be(0);
            expect(data.participationDefault).to.be.a('number');
            // expect(data.participationDefault).to.be(0);
            expect(data.shippingDefault).to.be.a('number');
            // expect(data.shippingDefault).to.be(0);
            expect(data.billingDefault).to.be.a('number');
            // expect(data.billingDefault).to.be(0);
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressGet', function() {
        it('should call addressGet successfully', function(done) {
          // TODO: uncomment, update parameter values for addressGet call and complete the assertions
          /*
          var id = 56;

          instance.addressGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Address);
            expect(data.addressType).to.be.a('string');
            // expect(data.addressType).to.be("");
            expect(data.company).to.be.a('string');
            // expect(data.company).to.be("");
            expect(data.department).to.be.a('string');
            // expect(data.department).to.be("");
            expect(data.gender).to.be.a('string');
            // expect(data.gender).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.firstname).to.be.a('string');
            // expect(data.firstname).to.be("");
            expect(data.lastname).to.be.a('string');
            // expect(data.lastname).to.be("");
            expect(data.degree).to.be.a('string');
            // expect(data.degree).to.be("");
            expect(data.customerNumber).to.be.a('string');
            // expect(data.customerNumber).to.be("");
            expect(data.street).to.be.a('string');
            // expect(data.street).to.be("");
            expect(data.zipcode).to.be.a('string');
            // expect(data.zipcode).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.country).to.be.a('string');
            // expect(data.country).to.be("");
            expect(data.countryId).to.be.a('number');
            // expect(data.countryId).to.be(0);
            expect(data.countryCode).to.be.a('string');
            // expect(data.countryCode).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.invoiceEmail).to.be.a('string');
            // expect(data.invoiceEmail).to.be("");
            expect(data.useInvoiceEmail).to.be.a('number');
            // expect(data.useInvoiceEmail).to.be(0);
            expect(data.extra1).to.be.a('string');
            // expect(data.extra1).to.be("");
            expect(data.extra2).to.be.a('string');
            // expect(data.extra2).to.be("");
            expect(data.orderNumber).to.be.a('string');
            // expect(data.orderNumber).to.be("");
            expect(data.supplierNumber).to.be.a('string');
            // expect(data.supplierNumber).to.be("");
            expect(data.vatNo).to.be.a('string');
            // expect(data.vatNo).to.be("");
            expect(data.noOrderNumberNeeded).to.be.a('number');
            // expect(data.noOrderNumberNeeded).to.be(0);
            expect(data.participationDefault).to.be.a('number');
            // expect(data.participationDefault).to.be(0);
            expect(data.shippingDefault).to.be.a('number');
            // expect(data.shippingDefault).to.be(0);
            expect(data.billingDefault).to.be.a('number');
            // expect(data.billingDefault).to.be(0);
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressList', function() {
        it('should call addressList successfully', function(done) {
          // TODO: uncomment addressList call and complete the assertions
          /*

          instance.addressList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.AddressPaginationResult);
            expect(data.limit).to.be.a('number');
            // expect(data.limit).to.be(0);
            expect(data.offset).to.be.a('number');
            // expect(data.offset).to.be(0);
            expect(data.entryCount).to.be.a('number');
            // expect(data.entryCount).to.be(0);
            expect(data.maxEntryCount).to.be.a('number');
            // expect(data.maxEntryCount).to.be(0);
            {
              let dataCtr = data.entries;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SeminarCatalogApi.Address);
                expect(data.addressType).to.be.a('string');
                // expect(data.addressType).to.be("");
                expect(data.company).to.be.a('string');
                // expect(data.company).to.be("");
                expect(data.department).to.be.a('string');
                // expect(data.department).to.be("");
                expect(data.gender).to.be.a('string');
                // expect(data.gender).to.be("");
                expect(data.title).to.be.a('string');
                // expect(data.title).to.be("");
                expect(data.firstname).to.be.a('string');
                // expect(data.firstname).to.be("");
                expect(data.lastname).to.be.a('string');
                // expect(data.lastname).to.be("");
                expect(data.degree).to.be.a('string');
                // expect(data.degree).to.be("");
                expect(data.customerNumber).to.be.a('string');
                // expect(data.customerNumber).to.be("");
                expect(data.street).to.be.a('string');
                // expect(data.street).to.be("");
                expect(data.zipcode).to.be.a('string');
                // expect(data.zipcode).to.be("");
                expect(data.city).to.be.a('string');
                // expect(data.city).to.be("");
                expect(data.country).to.be.a('string');
                // expect(data.country).to.be("");
                expect(data.countryId).to.be.a('number');
                // expect(data.countryId).to.be(0);
                expect(data.countryCode).to.be.a('string');
                // expect(data.countryCode).to.be("");
                expect(data.phone).to.be.a('string');
                // expect(data.phone).to.be("");
                expect(data.fax).to.be.a('string');
                // expect(data.fax).to.be("");
                expect(data.email).to.be.a('string');
                // expect(data.email).to.be("");
                expect(data.invoiceEmail).to.be.a('string');
                // expect(data.invoiceEmail).to.be("");
                expect(data.useInvoiceEmail).to.be.a('number');
                // expect(data.useInvoiceEmail).to.be(0);
                expect(data.extra1).to.be.a('string');
                // expect(data.extra1).to.be("");
                expect(data.extra2).to.be.a('string');
                // expect(data.extra2).to.be("");
                expect(data.orderNumber).to.be.a('string');
                // expect(data.orderNumber).to.be("");
                expect(data.supplierNumber).to.be.a('string');
                // expect(data.supplierNumber).to.be("");
                expect(data.vatNo).to.be.a('string');
                // expect(data.vatNo).to.be("");
                expect(data.noOrderNumberNeeded).to.be.a('number');
                // expect(data.noOrderNumberNeeded).to.be(0);
                expect(data.participationDefault).to.be.a('number');
                // expect(data.participationDefault).to.be(0);
                expect(data.shippingDefault).to.be.a('number');
                // expect(data.shippingDefault).to.be(0);
                expect(data.billingDefault).to.be.a('number');
                // expect(data.billingDefault).to.be(0);
                {
                  let dataCtr = data.syncFields;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    // expect(data).to.be("");
                  }
                }
                expect(data.id).to.be.a('number');
                // expect(data.id).to.be(0);
                expect(data.foreignId).to.be.a('string');
                // expect(data.foreignId).to.be("");
                expect(data.language).to.be.a('number');
                // expect(data.language).to.be(0);
                expect(data.createDate).to.be.a('number');
                // expect(data.createDate).to.be(0);
                expect(data.changeDate).to.be.a('number');
                // expect(data.changeDate).to.be(0);
                expect(data.deleted).to.be.a('number');
                // expect(data.deleted).to.be(0);
                expect(data.hidden).to.be.a('number');
                // expect(data.hidden).to.be(0);
                expect(data.sorting).to.be.a('number');
                // expect(data.sorting).to.be(0);
                expect(data.tags).to.be.a('string');
                // expect(data.tags).to.be("");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressUpdate', function() {
        it('should call addressUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for addressUpdate call and complete the assertions
          /*
          var id = 56;

          instance.addressUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Address);
            expect(data.addressType).to.be.a('string');
            // expect(data.addressType).to.be("");
            expect(data.company).to.be.a('string');
            // expect(data.company).to.be("");
            expect(data.department).to.be.a('string');
            // expect(data.department).to.be("");
            expect(data.gender).to.be.a('string');
            // expect(data.gender).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.firstname).to.be.a('string');
            // expect(data.firstname).to.be("");
            expect(data.lastname).to.be.a('string');
            // expect(data.lastname).to.be("");
            expect(data.degree).to.be.a('string');
            // expect(data.degree).to.be("");
            expect(data.customerNumber).to.be.a('string');
            // expect(data.customerNumber).to.be("");
            expect(data.street).to.be.a('string');
            // expect(data.street).to.be("");
            expect(data.zipcode).to.be.a('string');
            // expect(data.zipcode).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.country).to.be.a('string');
            // expect(data.country).to.be("");
            expect(data.countryId).to.be.a('number');
            // expect(data.countryId).to.be(0);
            expect(data.countryCode).to.be.a('string');
            // expect(data.countryCode).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.invoiceEmail).to.be.a('string');
            // expect(data.invoiceEmail).to.be("");
            expect(data.useInvoiceEmail).to.be.a('number');
            // expect(data.useInvoiceEmail).to.be(0);
            expect(data.extra1).to.be.a('string');
            // expect(data.extra1).to.be("");
            expect(data.extra2).to.be.a('string');
            // expect(data.extra2).to.be("");
            expect(data.orderNumber).to.be.a('string');
            // expect(data.orderNumber).to.be("");
            expect(data.supplierNumber).to.be.a('string');
            // expect(data.supplierNumber).to.be("");
            expect(data.vatNo).to.be.a('string');
            // expect(data.vatNo).to.be("");
            expect(data.noOrderNumberNeeded).to.be.a('number');
            // expect(data.noOrderNumberNeeded).to.be(0);
            expect(data.participationDefault).to.be.a('number');
            // expect(data.participationDefault).to.be(0);
            expect(data.shippingDefault).to.be.a('number');
            // expect(data.shippingDefault).to.be(0);
            expect(data.billingDefault).to.be.a('number');
            // expect(data.billingDefault).to.be(0);
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
