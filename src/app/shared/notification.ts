export class Notification {
  private _title: string;
  private _description: string;
  private _timestamp: number;
  private _level: number;
  private _timeDelay: number;
  private _timeGroup: number;

  constructor(notificationDataObject: any, timeDelay: number) {
    this._description = notificationDataObject.description;
    this._title = notificationDataObject.title;
    this._timestamp = +notificationDataObject.timestamp;
    this._level = +notificationDataObject.level;
    this._timeDelay = timeDelay;
    this._timeGroup = 0;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get timestamp(): number {
    return this._timestamp;
  }

  set timestamp(value: number) {
    this._timestamp = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get timeDelay(): number {
    return this._timeDelay;
  }

  set timeDelay(value: number) {
    this._timeDelay = value;
  }

  get timeGroup(): number {
    return this._timeGroup;
  }

  public increaseTimeGroup() {
    this._timeGroup++;
  }

  public decreaseTimeDelay() {
    this._timeDelay--;
  }
}
