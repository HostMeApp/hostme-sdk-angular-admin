'use strict';
import * as models from './models';

export interface CreateAccountWithRestaurant {

    fullName?: string;

    userPhone?: string;

    userEmail?: string;

    restaurantName?: string;

    restaurantAddress?: string;

    restaurantPhone?: string;
}

