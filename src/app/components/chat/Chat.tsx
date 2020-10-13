import React, { useRef } from 'react';

import NotAvailable from '@components/not-available';
import Message from '@components/message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';

import { faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { PATH_DASHBOARD, PATH_ROOT } from '@app/paths';

import { UserRoleEnum } from '@type/User';

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
        auth,
        chat,
        removeTrade,
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
                                disabled={auth === UserRoleEnum.Buyer}
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
                {chat && chat.messages.map((id) => (
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
    );
}

export default React.memo<ChatProps>(Chat);
