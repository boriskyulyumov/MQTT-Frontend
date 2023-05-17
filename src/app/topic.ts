export class Topic {
  name: string;
  qos: number;
  constructor(name: string, qos: number = 0) {
    this.name = name;
    this.qos = qos;
  }
}
