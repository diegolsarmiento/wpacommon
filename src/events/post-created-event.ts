import { Subjects } from './subjects';

export interface PostCreatedEvent {
  subject: Subjects.PostCreated;
  data: {
    id: string;
    version: number;
    title: string;
    image: string[];
    preview: string;
    content: string;
    type: string;
    price: number;
    userId: string;
  };
}
