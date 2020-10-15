export type Message = {
    id: number;
    senderId: number;
    sendTime: number;
    text: string;
}

export type Chat = {
    id: number;
    hasUnreadMessages: boolean;
    messages: number[];
}
