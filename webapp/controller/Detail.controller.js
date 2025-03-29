sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel"


],
function (Controller,ODataModel,JSONModel) {
    "use strict";

    return Controller.extend("com.tushar.project1.controller.Detail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteViewDetail").attachMatched(this.onObjectMatched, this);
        },

        onObjectMatched : function (oEvent) {
            const that = this
            var sPID =  oEvent.getParameter("arguments").id;
            this.sPID = sPID;

            const oModel = that.getOwnerComponent().getModel();
            oModel.read("/A_SalesOrder('"+sPID+"')/to_Item/", {
                success : function(oSALESDETAIL, response) {
                   console.log('SALES DATA IS', oSALESDETAIL)
                   let oJSONMOdel = new JSONModel()
                   oJSONMOdel.setData(oSALESDETAIL)
                   that.getView().setModel(oJSONMOdel,"S")    
                },
                
                error: function(oError) {
                   console.log(oError)
               },
              
            
            });
    }
       
      
    });
});
