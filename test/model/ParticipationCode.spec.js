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

  describe('(package)', function() {
    describe('ParticipationCode', function() {
      beforeEach(function() {
        instance = new SeminarCatalogApi.ParticipationCode();
      });

      it('should create an instance of ParticipationCode', function() {
        // TODO: update the code to test ParticipationCode
        expect(instance).to.be.a(SeminarCatalogApi.ParticipationCode);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property redemptionDate (base name: "redemptionDate")', function() {
        // TODO: update the code to test the property redemptionDate
        expect(instance).to.have.property('redemptionDate');
        // expect(instance.redemptionDate).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property syncFields (base name: "_syncFields")', function() {
        // TODO: update the code to test the property syncFields
        expect(instance).to.have.property('syncFields');
        // expect(instance.syncFields).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property foreignId (base name: "foreignId")', function() {
        // TODO: update the code to test the property foreignId
        expect(instance).to.have.property('foreignId');
        // expect(instance.foreignId).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property createDate (base name: "createDate")', function() {
        // TODO: update the code to test the property createDate
        expect(instance).to.have.property('createDate');
        // expect(instance.createDate).to.be(expectedValueLiteral);
      });

      it('should have the property changeDate (base name: "changeDate")', function() {
        // TODO: update the code to test the property changeDate
        expect(instance).to.have.property('changeDate');
        // expect(instance.changeDate).to.be(expectedValueLiteral);
      });

      it('should have the property deleted (base name: "deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property hidden (base name: "hidden")', function() {
        // TODO: update the code to test the property hidden
        expect(instance).to.have.property('hidden');
        // expect(instance.hidden).to.be(expectedValueLiteral);
      });

      it('should have the property sorting (base name: "sorting")', function() {
        // TODO: update the code to test the property sorting
        expect(instance).to.have.property('sorting');
        // expect(instance.sorting).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));