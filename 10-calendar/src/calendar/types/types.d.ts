
export interface Event {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
  user: User;
  id: string;
}

export interface User {
  name: string;
  uid: string;
}