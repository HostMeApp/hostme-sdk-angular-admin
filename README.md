#Angular SDK for HOstMe Admin APIs

##Get started:
```
npm install hostme-sdk-angular-admin
```

##Initialize API clients:

```
import * as hm from 'hostme-sdk-angular-admin';
import * as angular from 'angular';

class ApiConfig implements hm.IApiConfig {
    constructor(
        public basePath: string,
        public timeout: number,
        public defaultHeaders?: any) {
    }
}

angular.module('app', ['ngComponentRouter', commonModule.name, componentsModule.name])
    .config(['$locationProvider',
        ($locationProvider: angular.ILocationProvider) => {
            $locationProvider.html5Mode(true);
        }])
    .value('$routerRootComponent', 'app')
    .value('state', { value: 'home' })
    .constant('apiConfig', new ApiConfig('http://hostme-services-dev.azurewebsites.net', 30))
    .service('coreAdminApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: hm.IApiConfig) => {
            return new hm.AdminCoreApi($http, apiConfig);
        }])
    .service('loyaltyAdminApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: hm.IApiConfig) => {
            return new hm.AdminLoyaltyApi($http, apiConfig);
        }])
    .service('authenticationApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: hm.IApiConfig) => {
            return new hm.AuthorizationService($http, $q, apiConfig);
        }])
```

##Create new account:

```
var userInfo = {
            fullName: 'Jon Jonson',
            email: 'jon"example.com',
            phoneNumber: '1111111111',
            password: 'password1234',
            confirmPassword: 'password1234'
        };
        this.AdminCoreApi.register(userInfo);
```

##Get token:
```
var token = AuthenticationService.getToken(user.email, user.login.password).then((result) => {
    this.AdminCoreApi.accessToken = result.access_token;
});
```

##Create new restaurant
```
let r: hm.Restaurant = {
            name: 'Demo 1',
            address: 'Bellevue, WA 98004',
            phone: '+1888 888 8888',
            imageUrl: '',
            facebookId: '',
            twitterAccount: '',
            websiteUrl: '',
            foursquareId: ''
        };
    
adminCoreApi.addNewRestaurant(r).then((response) => {
        restaurant = response.data.data;
    }, (err) => {
        console.log(err);
        done();
    });    
```

##Get list of all users restaurants and his\her roles in each of them
```
adminCoreApi.getAllUserRestaurants().then((resut) => {
            expect(resut.data[0].name).toEqual(restaurant.name);
            done();
        }, (err) => {
            console.log(err);
            done();
        });
```

##Change restaurant's general settings
```
function  BuildBusinessHours(openTime:string, closeTime: string): hm.WeekDayOpenHours[] {
    let result: hm.WeekDayOpenHours[] = [];
    let time: hm.HourlyInterval = {};
    time.open = openTime;
    time.close = closeTime;
    
    for(var i = 0; i < 7; i++) {
        let h: hm.WeekDayOpenHours = {};
        h.weekDay = i;
        h.time = [time];
        result.push(h);
    }
    
    return  result;
}

 adminCoreApi.getRestaurantById(1).then((resut) => {
            var r1 = resut.data;
            r1.settings.areas = ['area1', 'area2', 'area3'];
            r1.settings.tableSizes = [1, 2, 4, 6, 8];
            r1.settings.openingHours = BuildBusinessHours('8:00', '2:00');
            r1.isPublished = true;
            r1.websiteUrl = '';
            r1.facebookId = '12321321';
            r1.foursquareId = 'fdfdsfdsfsd';
            r1.googlePlaceId = 'dfsdfsdfdsfsd';
            r1.yelpId = '1111';

            adminCoreApi.updateRestaurant(r1.id, r1).then((result) => {
                expect(resut.data).toEqual(r1);
            }, (err) => {
                console.error(JSON.stringify(err));
            })

        }, (err) => {
            console.error(JSON.stringify(err));
        });
```

##Add restaurant's staff (managers and hostess)
```
        let inv: hm.Invitation = { email: 'joe@example.com', role: 'host' };
        var uInfo: hm.UserInfo;
        let u: hm.RegisterUser = {
            fullName: 'Joe Doe',
            email: 'joe@example.com',
            phoneNumber: '+1 888 888 8888',
            password: 'password123456',
            confirmPassword: 'password123456'
        };

        this.adminCoreApi.createInvitationCode(1, inv).then((result) => {
            return this.AdminCoreApi.register(u);
        }).then((result) => {
            return this.AuthenticationService.Authorize(this.AdminCoreApi, u.email, u.password);
        }).then((result) => {
            return this.AdminCoreApi.me();
        }).then((result) => {
            uInfo = result.data;
            console.log(uInfo);
        }).catch((err) => {
            console.error(JSON.stringify(err));
        })
```
## Add new guest
```
let m: hm.MembershipCreate = {};
            m.fullName = 'Guest Name';
            m.note = 'imported from external system';
            m.phoneNumber = '+1 888 888 8888';
            m.profile = { allergy: ['onion', 'mayo'], vegetarian: true };

            adminLoyaltyApi.addMember(restaurant.id, m)
            .then((result) => {
                console.log(result.data);
            }, (err) => {
                console.error(err);
            })
```

##Find Guest by phone number
```
 adminLoyaltyApi.findMemberByPhoneNumber(restaurant.id, '7033037416').then((result) => {
            let m: hm.Member = result.data;
        })
```

#Integrarion options
##Web Hook

To receive notifications from the HostMe system you need to register your web hook:
```
POST http://hostme-services-dev.azurewebsites.net/api/webhooks/registrations
{
  "webHookUri": "YOUR API ENDPOINT",
  "description": "",
  "secret": "12345678901234567890123456789012",
  "properties": {"RestaurantId": 1}
}

You can test notifictions with Slack Incoming WebHooks plugin.
```
