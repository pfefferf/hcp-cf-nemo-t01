sap.ui.define([
	"de/fpf/hcpcf/nodemongot01/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("de.fpf.hcpcf.nodemongot01.controller.info.Information", {
		onInit: function(){
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			this._loadInfoData();
		},

		_loadInfoData: function(){
			this.getView().getModel().loadData("/api/info");
		}
	});
});