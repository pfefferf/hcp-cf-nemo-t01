sap.ui.define([
	"de/fpf/hcpcf/nodemongot01/controller/BaseController"
], function(BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("de.fpf.hcpcf.nodemongot01.controller.App", {
		onPressSideNavigationToggleButton: function (event) {
			//var oSideNavigation = this.getView().byId('sideNavigation');
			//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());
			var toolPage = this.getView().byId("toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		onItemSelect: function(oEvent){
			var item = oEvent.getParameter("item");

			switch(item.getKey()){
				case "info":
					this.getRouter().navTo("information");
					break;
				case "users":
					this.getRouter().navTo("users");
					break;
			}
		}

	});
});