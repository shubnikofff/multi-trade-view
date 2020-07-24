import React from 'react';

interface TradeListProps {
}

function TradeList() {
    return (
        <div>Trade List</div>
    );
}

export default React.memo<TradeListProps>(TradeList);
