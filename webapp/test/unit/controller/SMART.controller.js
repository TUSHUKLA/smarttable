/*global QUnit*/

sap.ui.define([
	"comtushar/project1/controller/SMART.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SMART Controller");

	QUnit.test("I should test the SMART controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
