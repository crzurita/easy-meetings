import { Topic } from './topic.class';

export class Meeting {
  date: Date;
  id: string;
  groupId: string;
  owner: string;
  place: string;
  status: boolean = true;
  time: Date;
  nextTopics?: string;
  topics?: Topic[] = [];

  constructor(meeting: Meeting) {
    Object.keys(meeting)
      .forEach(item => {
        item == 'date' ?
          this[item] = new Date(meeting[item])
            : this[item] = meeting[item]
      });
  }

  toPlain() {
    return JSON.parse(JSON.stringify(this));
  }
}
