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
    describe('Media', function() {
      beforeEach(function() {
        instance = new SeminarCatalogApi.Media();
      });

      it('should create an instance of Media', function() {
        // TODO: update the code to test Media
        expect(instance).to.be.a(SeminarCatalogApi.Media);
      });

      it('should have the property syncFields (base name: "_syncFields")', function() {
        // TODO: update the code to test the property syncFields
        expect(instance).to.have.property('syncFields');
        // expect(instance.syncFields).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property filepath (base name: "filepath")', function() {
        // TODO: update the code to test the property filepath
        expect(instance).to.have.property('filepath');
        // expect(instance.filepath).to.be(expectedValueLiteral);
      });

      it('should have the property filetype (base name: "filetype")', function() {
        // TODO: update the code to test the property filetype
        expect(instance).to.have.property('filetype');
        // expect(instance.filetype).to.be(expectedValueLiteral);
      });

      it('should have the property isDownload (base name: "isDownload")', function() {
        // TODO: update the code to test the property isDownload
        expect(instance).to.have.property('isDownload');
        // expect(instance.isDownload).to.be(expectedValueLiteral);
      });

      it('should have the property isGlobal (base name: "isGlobal")', function() {
        // TODO: update the code to test the property isGlobal
        expect(instance).to.have.property('isGlobal');
        // expect(instance.isGlobal).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property limitedVisibility (base name: "limitedVisibility")', function() {
        // TODO: update the code to test the property limitedVisibility
        expect(instance).to.have.property('limitedVisibility');
        // expect(instance.limitedVisibility).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "endDate")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property uploaderId (base name: "uploaderId")', function() {
        // TODO: update the code to test the property uploaderId
        expect(instance).to.have.property('uploaderId');
        // expect(instance.uploaderId).to.be(expectedValueLiteral);
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

      it('should have the property glyphicon (base name: "glyphicon")', function() {
        // TODO: update the code to test the property glyphicon
        expect(instance).to.have.property('glyphicon');
        // expect(instance.glyphicon).to.be(expectedValueLiteral);
      });

    });
  });

}));