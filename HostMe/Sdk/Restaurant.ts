
namespace HostMe.Sdk {
    'use strict';

    export interface Restaurant {

        "id"?: number;

        "name"?: string;

        "address"?: string;

        "location"?: string;

        "imageUrl"?: string;

        "lat"?: number;

        "lon"?: number;

        "facebookId"?: string;

        "twitterAccount"?: string;

        "websiteUrl"?: string;

        "foursquareId"?: string;

        "phone"?: string;

        "timeOffSet"?: number;

        "timeZone"?: string;

        "settings"?: RestaurantSettings;

        "googlePlaceId"?: string;

        "yelpId"?: string;

        "city"?: string;

        "state"?: string;

        "country"?: string;

        "isPublished"?: boolean;
    }

}
