'use strict';
import * as models from './models';

export interface TimeDimension {

    hour?: number;

    weekDay?: string;

    weekDayNumber?: number;

    month?: string;

    monthNumber?: number;

    year?: number;

    weekNumber?: number;

    typeOfMeal?: string;
}

