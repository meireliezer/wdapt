export enum ActionEnum {
    add,
    edit,
    delete
};


export interface ActionLog {
    id: number;
    date: number;
    websiteName: string;
    url:string;
    type: ActionEnum;
};
