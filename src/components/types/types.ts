export type messageType = {
  text: string;
  author: string;
  id: string | number;
  fire: boolean;
  chatId?: string | number;
}

export type messagesType = {
  text: string;
  author: string;
  handleDeleteMessage: (id: string | number) => void;
  id: string | number 
}

export type messageFormType = {
  onSend: (dataForm: {text: string, author: string}) => void;
}

export type chatFormType = {
  onSend: (dataForm: {title: string, messages: string[]}) => void;
}

export type chatItemType = {
  chat: any;
  id: number | string;
  handleDeleteChat: (id: string | number) => void;
  fire: boolean;
  handleChatUnfire: (id: string | number) => void;
}

export type chatListType = {
  chats: messageType[];
  onSend: () => void;
  handleDeleteChat: () => void;
  handleChatUnfire: () => void;
}

export type messengerType = {
  messages: messageType[];
  handleMessageSend: () => void;
  chats: any;
  handleAddChat: () => void;
  handleDeleteMessage: () => void;
  handleDeleteChat: () => void;
  handleChatUnfire: () => void;
  isLoading: boolean;
  isError: boolean;
}