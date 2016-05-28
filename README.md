#Angular SDK for HOstMe Admin APIs

##Get started:
```
npm install hostme-sdk-angular-admin
```

##Initialize API clients:

```
import * as HostmeSdk from 'hostme-sdk-angular-admin';
import * as angular from 'angular';

class ApiConfig implements HostmeSdk.IApiConfig {
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
        ($http: ng.IHttpService, apiConfig: HostmeSdk.IApiConfig) => {
            return new HostmeSdk.AdminCoreApi($http, apiConfig);
        }])
    .service('loyaltyAdminApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: HostmeSdk.IApiConfig) => {
            return new HostmeSdk.AdminLoyaltyApi($http, apiConfig);
        }])
    .service('authenticationApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: HostmeSdk.IApiConfig) => {
            return new HostmeSdk.AuthorizationService($http, $q, apiConfig);
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
var user: IUser = g.GetRandomStaffProfile();
        var r1;
        let inv: hm.Invitation = { email: user.email, role: 'host' };
        var uInfo: hm.UserInfo;

        adminCoreApi.getRestaurantById(restaurant.id).then((result) => {
            return result.data;
        }).then((result) => {
            r1 = result;
            adminCoreApi.getUsers(r1.id).then((result) => {
                var promise: ng.IHttpPromise<{}>;
                result.data.forEach((r) => {
                    if (r.email === inv.email && r.role === inv.role) {
                        return adminCoreApi.deleteUser(r1.id, r.userId, r.role);
                    }
                })
            })
        }).then((result) => {
            return adminCoreApi.createInvitationCode(r1.id, inv);
        }).then((result) => {
            return accountHelper.RegisterNewUserIfNotExists(user);
        }).then((result) => {
            uInfo = result.data;
            console.log(uInfo);
            adminCoreApi.getUsers(r1.id).then((result) => {
                let u: hm.RestaurantUserInfo = { email: inv.email, role: inv.role, userId: uInfo.id, userName: uInfo.fullName };
                expect(result.data).toContain(u);
                done();
            })
        }).catch((err) => {
            fail(JSON.stringify(err));
        })
