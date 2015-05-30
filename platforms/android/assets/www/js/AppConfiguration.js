/**
 * @ ##AppConfiguration
 *
 */
var AppConfigurationModule = angular.module('AppConfigurationModule', ['ajaxRequestServicesModule']);
AppConfigurationModule.service('AppConfiguration', function(ajaxRequestServices) {

        this.mode="";
        
        this.init=function(modeConfiguration)
        {

            var me = this;

            this.mode=modeConfiguration;
            
            this.version = localeString.version + " " + modeConfiguration;


            ajaxRequestServices.init(localeString.applicationMode);

            if(me.mode == localeString.applicationMode_stage)
            {
                console.log("AppConfiguration with Stage Configuration");

                //Stage configuration.

            }
            else if(me.mode == localeString.applicationMode_production)
            {

                console.log("AppConfiguration with Production Configuration");
              
            }

        };




    });

