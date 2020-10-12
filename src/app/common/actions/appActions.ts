import { createAction } from '@reduxjs/toolkit';

import { InitialData } from '@type/Store';

export const initApp = createAction<InitialData>('application/init');
