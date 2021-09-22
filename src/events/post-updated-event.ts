import { Subjects } from './subjects';

export interface PostUpdatedEvent {
  subject: Subjects.PostUpdated;
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
    orderId?: string;
  };
}
