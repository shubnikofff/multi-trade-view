import React from 'react';
import classNames from 'classnames';

import { useDashboard } from './useDashboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Avatar from '../avatar';
import NotAvailable from '../not-available';

import { UserRole } from '../../types/user';

import { PATH_CHAT } from '../../constants';

import './Dashboard.scss';

interface DashboardProps {
    smallScreen?: boolean;
}

function Dashboard({ smallScreen }: DashboardProps) {
    const { auth, convert, trade, releaseBitcoins } = useDashboard();

    if (auth === UserRole.Buyer) {
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
					<Link to={`${PATH_CHAT}/${trade.id}`}>
						<FontAwesomeIcon icon={faChevronLeft} color="black" />
					</Link>
				</div>}
                <div>
                    You are trading with <b>{trade.buyer.name}</b>
                </div>
                <div className="dashboard__start-time">
                    Started {trade.started.toLocaleString()}
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
                            <Avatar url={trade.buyer.avatarUrl} />
                            <div className="chat__header__trade-info__buyer">
                                <span className="text-primary">+{trade.buyer.positiveReputation}</span>
                                <span> / </span>
                                <span className="text-danger">-{trade.buyer.negativeReputation}</span>
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
