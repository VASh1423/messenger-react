export type messagesType = {
  text: string;
  author: string;
  handleDeleteMessage: (id: string | number) => void;
  id: string | number 
}

export type messageFormType = {
  onSend: (dataForm: {text: string, author: string}) => void;
}