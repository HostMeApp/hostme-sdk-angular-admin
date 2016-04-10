
namespace HostMe.Sdk {
    'use strict';

    export interface NewRestaurantBindingModel {

        "name": string;

        "address": string;

        "phone"?: string;

        "timeZone": string;

        /**
         * Url of the restaurant's logo. The logo size should be 100x100
         */
        "imageUrl"?: string;

        "facebookId"?: string;

        "twitterAccount"?: string;

        "websiteUrl"?: string;

        "foursquareId"?: string;
    }

}
