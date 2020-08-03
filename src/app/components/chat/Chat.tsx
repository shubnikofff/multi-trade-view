import React, { useRef } from 'react';
import classNames from 'classnames';

import { useChat } from './useChat';

import Avatar from '../avatar';
import NotAvailable from '../not-available';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';

import { faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { PATH_DASHBOARD, PATH_ROOT } from '../../paths';

import { UserRole } from '../../types/user';

import './Chat.scss';

interface ChatProps {
    smallScreen?: boolean,
}

interface FormValues {
    message: string;
}

function validate({ message }: FormValues) {
    let errors: Partial<FormValues> = {};

    if (!message.trim()) {
        errors.message = 'Required';
    }

    return errors;
}

function Chat({ smallScreen }: ChatProps) {
    const {
        auth,
        chat,
        removeTrade,
        sellerAvatarUrl,
        sendMessage,
        trade,
    } = useChat();

    const chatBodyBottom = useRef<HTMLDivElement>(null);

    if (!trade) {
        return (
            <NotAvailable>
                No such trade
            </NotAvailable>
        );
    }

    const handleSubmit = ({ message }: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        sendMessage(message);
        chatBodyBottom?.current?.scrollIntoView({ behavior: 'smooth' });
        resetForm();
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div>
                    <div className="chat__header__left-area">
                        {smallScreen && <div className="chat__header__left-area_back-link">
							<Link to={`${PATH_ROOT}`}>
								<FontAwesomeIcon icon={faChevronLeft} color="black" />
							</Link>
						</div>}
                        <div>
                            <button
                                onClick={removeTrade}
                                disabled={auth === UserRole.Buyer}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} color="white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chat__header__trade-info">
                    <div className="chat__header__trade-info__payment-method">
                        <b>{trade.paymentMethod}</b>
                    </div>
                    <div className="chat__header__trade-info__buyer">
                        <span className="text-secondary">{trade.buyer.name} </span>
                        <span className="text-primary">+{trade.buyer.positiveReputation}</span>
                        <span className="text-secondary"> / </span>
                        <span className="text-danger">-{trade.buyer.negativeReputation}</span>
                    </div>
                </div>
                <div>
                    {smallScreen && <Link to={`${PATH_DASHBOARD}/${trade.id}`}>
						<FontAwesomeIcon icon={faChevronRight} color="black" />
					</Link>}
                </div>
            </div>
            <div className="chat__body">
                {chat && chat.messages.map((message, index) => (
                    <div
                        className={classNames('chat__message', {
                            'chat__message_reversed': message.sender !== auth,
                        })}
                        key={index}
                    >
                        <div className="chat__message__avatar">
                            <Avatar url={message.sender === UserRole.Seller
                                ? sellerAvatarUrl
                                : trade?.buyer.avatarUrl
                            } />
                        </div>
                        <div>
                            <div className={classNames('chat__message__text', message.sender === auth
                                ? 'chat__message__text_outgoing'
                                : 'chat__message__text_incoming'
                            )}>
                                {message.text}
                            </div>
                            <div className={classNames('chat__message__date', {
                                'chat__message__date_align-right': message.sender !== auth,
                            })}>
                                {message.sendTime.toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={chatBodyBottom} />
            </div>
            <Formik
                initialValues={{ message: '' }}
                onSubmit={handleSubmit}
                validate={validate}
            >
                <Form>
                    <div className="chat__footer">
                        <div className="chat__footer__left-area">
                            <Field
                                name="message"
                                placeholder="Type your message..."
                            />
                        </div>
                        <div className="chat__footer__right-area">
                            <button type="submit">
                                Send
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default React.memo<ChatProps>(Chat);
