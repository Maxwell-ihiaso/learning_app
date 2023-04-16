export interface ISubject {
  _id: string;
  title: string;
}

export interface ITopic {
  _id: string;
  title: string;
  videoUrl: string;
  description: string;
  subject?: string;
}
