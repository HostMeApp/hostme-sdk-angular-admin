'use strict';
import * as models from './models';

export interface Restaurant {

    id?: number;

    name?: string;

    address?: string;

    location?: string;

    imageUrl?: string;

    lat?: number;

    lon?: number;

    facebookId?: string;

    twitterAccount?: string;

    websiteUrl?: string;

    foursquareId?: string;

    phone?: string;

    timeZone?: string;

    settings?: models.RestaurantSettings;

    googlePlaceId?: string;

    yelpId?: string;

    city?: string;

    state?: string;

    country?: string;

    isPublished?: boolean;

    reservationIncomeEmail?: string;
}

