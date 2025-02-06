export type TMenuItem = {
    id: number;
    name: string;
    type: string;
    parentId?: number;
    orderNo: number;
  };
export type TMenus = TMenuItem & {
    subMenus: TMenuItem[];
  };
