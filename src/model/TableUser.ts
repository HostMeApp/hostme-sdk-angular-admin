'use strict';
import * as models from './models';

export interface TableUser {

    table?: models.TableInfo;

    user?: models.UserProfile;

    registrationTime?: Date;

    estimatedReleaseTime?: Date;
}

