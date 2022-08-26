export class FormSearchDataType {
  private _type: string
  private _rarete: number

  constructor(type: string, rarete: number) {
    this._type = type;
    this._rarete = rarete;
  }


  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get rarete(): number {
    return this._rarete;
  }

  set rarete(value: number) {
    this._rarete = value;
  }
}
