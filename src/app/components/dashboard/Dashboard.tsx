import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Avatar from '@components/avatar';
import NotAvailable from '@components/not-available';

import { UserRoleEnum } from '@type/User';

import { PATH_CHAT } from '@app/paths';

import { useDashboard } from './useDashboard';

import './Dashboard.scss';

interface DashboardProps {
    smallScreen?: boolean;
}

function Dashboard({ smallScreen }: DashboardProps) {
    const {
        auth,
        buyer,
        convert,
        trade,
        releaseBitcoins,
    } = useDashboard();

    if (auth === UserRoleEnum.Buyer) {
        return (
            <NotAvailable>
                Not available for this user
            </NotAvailable>
        )
    }

    if (!trade) {
        return (
            <NotAvailable>
                No such trade
            </NotAvailable>
        );
    }

    return (
        <div className="dashboard">
            <div className="dashboard__top">
                {smallScreen && <div className="dashboard__navigation-area">
                    <Link to={`${PATH_CHAT}/${trade.hash}`}>
                        <FontAwesomeIcon icon={faChevronLeft} color="black"/>
                    </Link>
                </div>}
                <div>
                    You are trading with <b>{buyer?.name}</b>
                </div>
                <div className="dashboard__start-time">
                    Started {new Date(trade.started).toLocaleString()}
                </div>
                <div className="dashboard__action-area">
                    <button
                        className="btn"
                        disabled={trade.paid}
                        onClick={releaseBitcoins}
                    >
                        Release bitcoins
                    </button>
                </div>
            </div>
            <table className="dashboard__bottom">
                <tbody>
                <tr>
                    <td>
                        <Avatar url={buyer?.avatarUrl}/>
                        <div className="chat__header__trade-info__buyer">
                            <span className="text-primary">+{buyer?.positiveReputation}</span>
                            <span> / </span>
                            <span className="text-danger">-{buyer?.negativeReputation}</span>
                        </div>
                    </td>
                    <td>
                        <div className="dashboard__bottom_label">
                            <b># Of trades</b>
                        </div>
                        <div>4</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="dashboard__bottom_label">
                            <b>Trade status</b>
                        </div>
                        <div className={classNames('dashboard__status', trade.paid
                            ? 'dashboard__status_green'
                            : 'dashboard__status_gray'
                        )}>
                            {trade.paid ? 'Paid' : 'Not paid'}
                        </div>
                    </td>
                    <td>
                        <div className="dashboard__bottom_label">
                            <b>Trade hash</b>
                        </div>
                        <div className="text-secondary">
                            {trade.hash}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="dashboard__bottom_label">
                            <b>Amount USD</b>
                        </div>
                        <div>{trade.amount.toFixed(2)}</div>
                    </td>
                    <td>
                        <div className="dashboard__bottom_label">
                            <b>Amount BTC</b>
                        </div>
                        <div className="text-secondary">
                            {convert(trade.amount).toFixed(8)}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default React.memo<DashboardProps>(Dashboard);
