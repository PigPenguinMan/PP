// 12/05 BlogPage에서 사용할 데이터 타입

import { RefObject } from "react";

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

type TTitleProperty = {
  id: string;
  type: string;
  title: {
    type: string;
    text: {
      content: string;
      link: string | null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
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

export interface IBlogCardProps {
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
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  ref?: RefObject<HTMLElement>;
}


/**
 * 12/06 카드를 클릭했을때 나오는 페이지 타입
 */

export type TBlogCardContent ={
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

export interface IBlogCardContentProps {
    page_id? : string ;
   data? : TBlogCardContent;
    ref? : RefObject<HTMLDivElement>
}


