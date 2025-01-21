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

  export type TContentDetail = {
    contentDetailId: number;
    contentDetailOrderNo: number;
    contentPage: string;
    contentDetailName: string;
};

export type TContentItem = {
    contentId: number;
    contentPage: string;
    contentTitle: string | null;
    contentDescription: string | null;
    contentImagePath: string | null;
    contentFeedback: any;
    contentFeedbackUserId: any;
    contentOrderNo: number;
    feedback: any;
    orderNo: any;
    userId: any;
    userName: any;
    contentDetailsList: TContentDetail[];
};

export type TContent = {
    home: TContentItem[];
    details: TContentItem[];
    subscription: TContentItem[];
    features: Array<any>;
    footer: Array<any>;
};



export type TFeature = {
  title: string;
  description: string;
  imgPath: string;
};