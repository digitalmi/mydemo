var ajaxRequestServicesModule = angular.module('ajaxRequestServicesModule', []);

ajaxRequestServicesModule.service('ajaxRequestServices', function() {
	     this.baseURL=null;
         this.serverURL=null;
         this.staticURL=null;
         this.mode=null;
         this.param=null;
         this.url=null;

            this.listofURI=[
            'getUserRepo'

        ];

            this.postMethod=[

        ];
            this.deleteMethod=[

        ];
          this.BASEURL = {
            "production":'https://api.github.com',
            "stage":'https://api.github.com',
            "static": 'stubs'

        };


         this.URI = {
            'getUserRepo': 'users/{param}/repos'


        };

         this.STATIC_URI = {
             'getUserRepo': 'getUserProfile.json'


        };

        this.init=function (mode)
        {

            if (mode === null || mode === undefined) {
                return;
            }

            if (this.setServerURL) {
                this.setServerURL = null;
            }
            this.mode=mode;
            this.serverURL= new HashMap();
            this.addURL();

        };


        this.addURL=function(){

            //static // production
            var mode = this.mode;

            console.log("Mode",this.mode);

            var listofURI = this.listofURI;

            var requesturl;

            for (var urlindex = 0; urlindex < this.listofURI.length; urlindex++) {
                serverUrl = listofURI[urlindex];

                //getPicture needs to add

                if( serverUrl =='getUserRepo')
                    requesturl = this.BASEURL[mode] + '/' + (((mode === 'production') ||(mode === 'stage') || (mode === 'dev'))? this.URI[serverUrl] : this.STATIC_URI[serverUrl]);
                else
                    requesturl = this.BASEURL["static"] + '/' + this.STATIC_URI[serverUrl];

                console.log("request url",requesturl);

                this.serverURL.put(serverUrl, requesturl);
            }


        };

        this.getURL=function(serverUrl){

            if(this.serverURL)
            return this.serverURL.get(serverUrl);
        };
        this.setParam = function(param){
            this.param = param;
        }
        this.getParam = function(){
            return this.param;
        }

});
