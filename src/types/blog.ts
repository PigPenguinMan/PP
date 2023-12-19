// 12/05 BlogPage에서 사용할 데이터 타입

import { RefObject, SetStateAction } from "react";

/**
 * 12/05 CardProps에 사용할 타입
 */
type TPartialUser = {
  object: string;
  id: string;
};

type TParent = {
  type: string;
  database_id: string;
};

type TDateProperty = {
  id: string;
  type: string;
  date: {
    start: string;
    end?: string | null;
    timezone?: string | null;
  };
};

type TAnnotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type TTitleProperty = {
  id: string;
  type: string;
  title: {
    type: string;
    text: {
      content: string;
      link: string | null;
    };
    annotations: TAnnotation;
    plain_text: string;
    href: string | null;
  }[];
};
type TTagProperty = {
  id: string;
  type: string;
  multi_select: {
    id: string;
    color: string;
    name: string;
  }[];
};

type TPropertise = {
  날짜: TDateProperty;
  이름: TTitleProperty;
  태그: TTagProperty;
};

/**
 * 12/16 파이어스토어에서 받아오는 데이터 타입
 */
type TTimeStamp = { 
  nanoseconds : string ;
  seconds : string ; 
}

type TReply = { 
  Reply_At : TTimeStamp ; 
  Reply_Content : string ;
  User_Name : string ; 
}

export interface IBlogCardProps {
  Id : string; 
  Created_At : TTimeStamp ;
  Updated_At ? : TTimeStamp ; 
  Title : string ;
  MainText: string ;
  Reply? :TReply[]; 
  Tag ? : string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;

  ref?: RefObject<HTMLElement>;
}

export interface IBlogCardContentProps {
  Id : string; 
  Created_At : TTimeStamp ;
  Updated_At ? : TTimeStamp ; 
  Title : string ;
  MainText: string ;
  Reply? :TReply[]; 
  Tag ? : string;
  ref?: RefObject<HTMLElement>;

}

/**
 * 12/06 카드를 클릭했을때 나오는 페이지 타입
 */

export type TBlogCardContent = {
  archived: boolean;
  cover: string | null;
  created_by: TPartialUser;
  created_time: string;
  icon: string | null;
  id: string;
  last_edited_by: TPartialUser;
  last_edited_time: string;
  object: string;
  parent: TParent;
  properties: TPropertise;
  public_url: string | null;
  url: string;
};

// export interface IBlogCardContentProps {
//   page_id?: string;
//   contentdata?: TBlogCardContent;
//   ref?: RefObject<HTMLDivElement>;
// }

// type TObjectType = {
//   bookmark?: string;
//   breadcrumb?: string;
//   bulleted_list_item?: string;
//   callout?: string;
//   child_database?: string;
//   child_page?: string;
//   column?: string;
//   column_list?: string;
//   divider?: string;
//   embed?: string;
//   equation?: string;
//   file?: string;
//   heading_1?: string;
//   heading_2?: string;
//   heading_3?: string;
//   image?: string;
//   link_preview?: string;
//   link_to_page?: string;
//   numbered_list_item?: string;
//   paragraph?: string;
//   pdf?: string;
//   quote?: string;
//   synced_block?: string;
//   table?: string;
//   table_of_contents?: string;
//   table_row?: string;
//   template?: string;
//   to_do?: string;
//   toggle?: string;
//   unsupported?: string;
//   video?: string;
// };

/**
 * 12/09 오브젝트 타입에 따라 값이 변하기에 extends로 타입 확장 시켜야할거같다
 */
export interface IBlogCardMainText {
  object: string;
  id: string;
  parent: TParent;
  type: string;
  created_by: TPartialUser;
  created_time: string;
  last_edited_by: TPartialUser;
  last_edited_time: string;
  archived: boolean;
  has_children: boolean;
  data : any ;
}

export interface IImageBlogMainText  {
    type : 'image' ;
    image : TFile ; 
}

export interface IParagraphBlogMainText {
    type :'paragraph';
    paragraph : TParagraph ;
}

/**
 * 12/09 content의 내용에 들어가는 object들의 타입
 */

interface IRichText {
  type: string;
  annotations: TAnnotation;
  plain_text: string;
  href?: string;
}
interface ITextRichText extends IRichText {
  type: "text";
  content: string;
  link?: object;
}
/**
 * 12/09 user 부분에 많은 데이터 타입이 있지만 지금 당장에 사용하지않기에 user만 추가
 */
interface IMentionRichText extends IRichText {
  type: "mention";
  user: object;
}
interface IEquationRichText extends IRichText {
  type: "equation";
  expression: string;
}

type TBookMark = {
  caption: IRichText[];
  url: string;
};

type TBreadCrumb = {
  rich_text: IRichText[];
  color: string;
  children: [];
};

type TCallOut = {
  rich_text: IRichText[];
  icon: object;
  color: string;
};

type TChildDatabase = {
  title: string;
};

type TChildPage = {
  title: string;

};

type TCode = {
    caption : IRichText[] ;
    rich_text: IRichText[] ;
    language : string ;
};
type TColumnList= {
    type : string ;
    column_list: object ;
};
type TColumn = {
    type : string ;
    column : object ;
}
type TDivider = {
    type : string ;
    divider : object ;

};
type TEmbed = {
    url : string ;
};
type TEquation = {
    expression : string ;
};

interface IFileObject {
    type :string ;
}

interface INFileObject extends IFileObject { 
    type : 'file';
    url :string ;
    expiry_time : string ;
}
interface IEFileObject extends IFileObject { 
    type : 'external';
    url : string ;
}

type TFile = {
    caption : IRichText[] ;
    type : string ;
    file : INFileObject | IEFileObject ;
    name : string ;

};


type THeadings = {
    rich_text : IRichText[] ;
    color : string ;
    is_toggleable : boolean ;
};
type TImage =  {
    type : string ;
    image : TFile ;
};

type TLinkPreview = {};
type TMention = {};
type TNumberedListItem = {};
type TParagraph = {
    rich_text : IRichText [] ;
    color : string ;
    children : object ;
};
type TPDF = {};
type TQuote = {};
type TSyncedBlock = {};
type TTable = {};
type TTableOfContents = {};
type TTemplate = {};
type TToDo = {};
type TToggleBlocks = {};
type TVideo = {};
