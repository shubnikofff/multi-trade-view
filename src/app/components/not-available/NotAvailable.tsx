import React from 'react';

import './NotAvailable.scss';

interface NotAvailableProps {
    children: React.ReactNode;
}


function NotAvailable({ children }: NotAvailableProps) {
    return (
        <div className="not-available">
            {children}
        </div>
    );
}

export default React.memo<NotAvailableProps>(NotAvailable);
