'use strict';
import * as models from './models';

export interface CreateRestaurant {

    name?: string;

    address?: string;

    phone?: string;

    imageUrl?: string;

    facebookId?: string;

    twitterAccount?: string;

    websiteUrl?: string;

    foursquareId?: string;
}

