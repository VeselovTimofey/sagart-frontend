interface IFilterField {
  inputName: string;
  title: string;
}

export interface IFilterFields extends Array<IFilterField> {}

interface IFilter {
  name: string;
  fields: IFilterFields;
}

export interface IForm extends Array<IFilter> {}
