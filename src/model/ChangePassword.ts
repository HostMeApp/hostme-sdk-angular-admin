'use strict';
import * as models from './models';

export interface ChangePassword {

    oldPassword?: string;

    newPassword?: string;

    confirmPassword?: string;
}

