sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
function (Controller,ODataModel) {
    "use strict";

    return Controller.extend("com.tushar.project1.controller.SMART", {
        onInit: function () {
            

        },
       
        onItemPress: function (oEvent) {
            var id = oEvent.getSource().getBindingContext().getProperty("SalesOrder");
            this.getOwnerComponent().getRouter().navTo("RouteViewDetail", {
                id: id
            });
        }
    });
});
