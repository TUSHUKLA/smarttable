sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
function (Controller,ODataModel) {
    "use strict";

    return Controller.extend("com.tushar.project1.controller.SMART", {
        onInit: function () {
            var oSmartTable = this.byId("A_SalesOrderType");

// Access the inner table (e.g., sap.m.Table)
var oInnerTable = oSmartTable.getTable();

// Set the sticky property to keep column headers and the header toolbar fixed
oInnerTable.setSticky(["ColumnHeaders", "HeaderToolbar"]);
            

        },
       
        onItemPress: function (oEvent) {
            var id = oEvent.getSource().getBindingContext().getProperty("SalesOrder");
            this.getOwnerComponent().getRouter().navTo("RouteViewDetail", {
                id: id
            });
        }
    });
});
