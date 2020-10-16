import React, { useCallback, useRef } from 'react';

import NotAvailable from '@components/not-available';
import Message from '@components/message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';

import { faTrashAlt, faChevronLeft, faChevronRight, faSync } from '@fortawesome/free-solid-svg-icons'
import { PATH_DASHBOARD, PATH_ROOT } from '@app/paths';

import { useChat } from './useChat';

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
        buyer,
        currentUserId,
        removeTrade,
        sendMessage,
        swapUsers,
        trade,
    } = useChat();

    const chatBodyBottom = useRef<HTMLDivElement>(null);

    const handleSubmit = useCallback(({ message }: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        sendMessage(message);
        chatBodyBottom?.current?.scrollIntoView({ behavior: 'smooth' });
        resetForm();
    }, [sendMessage]);

    return trade ? (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__left-area">
                    {smallScreen && <div className="chat__header__left-area_back-link">
						<Link to={`${PATH_ROOT}`}>
							<FontAwesomeIcon icon={faChevronLeft} color="black" />
						</Link>
					</div>}
                    <div>
                        <button
                            onClick={removeTrade}
                            disabled={currentUserId === buyer?.id}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} color="white" />
                        </button>
                    </div>
                </div>
                <div className="chat__header__trade-info">
                    <div className="chat__header__trade-info__payment-method">
                        <b>{trade.paymentMethod}</b>
                    </div>
                    <div className="chat__header__trade-info__buyer">
                        <span className="text-secondary">{buyer?.name} </span>
                        <span className="text-primary">+{buyer?.positiveReputation}</span>
                        <span className="text-secondary"> / </span>
                        <span className="text-danger">-{buyer?.negativeReputation}</span>
                    </div>
                </div>
                <div className="chat__header__right-area">
                    <div>
                        <button
                            onClick={swapUsers}
                        >
                            <FontAwesomeIcon icon={faSync} color="white" />
                        </button>
                    </div>
                    <div>
                        {smallScreen && <div className="chat__header__right-area_dashboard-link">
                            <Link to={`${PATH_DASHBOARD}/${trade.hash}`}>
							    <FontAwesomeIcon icon={faChevronRight} color="black" />
						    </Link>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="chat__body">
                {trade?.messageIds.map((id) => (
                    <Message id={id} key={id} />
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
    ): (
        <NotAvailable>
            No such trade
        </NotAvailable>
    );
}

export default React.memo<ChatProps>(Chat);
