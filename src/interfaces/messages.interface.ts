export interface IThread {
    userId: number;
    friendId: number;
    threadId: number;
    recentMessages: string;
    lastMessageTime: string;
    lastMessage: string;
}

export interface IDirect {
    userId: number;
    friendId: number;
    threadId: number;
    recentMessages: string;
    lastMessageTime: string;
    lastMessage: string;
}
export interface IDirect2 {
    id: number;
    userId: number;
    friendId: number;
    threadId: number;
    messageText: string;
    createdTime: Date;
    friendName: string;
}