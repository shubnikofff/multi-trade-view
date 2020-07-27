import React from 'react';

import { Grid, Button } from '@material-ui/core';

import { useUserPanel } from './useUserPanel';
import { UserRole } from '../../types/user';

interface UserPanelProps {
}

function UserPanel() {
    const { auth, switchUser } = useUserPanel()

    return (
        <Grid
            container
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                You are <b>{auth === UserRole.Seller ? 'Seller' : 'Buyer'}</b>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={switchUser}
                >
                    Switch user
                </Button>
            </Grid>
        </Grid>
    );
}

export default UserPanel;
