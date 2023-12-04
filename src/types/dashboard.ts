import { IGithubCommitResponse } from "./github";

/**
 * 12/04 대시보드에서 사용할 데이터들의 타입
 */
type TSmBoxContent = {
    date1Arr : IGithubCommitResponse[] ;
    date2Arr : IGithubCommitResponse[]; 
}


export interface IDashboardSmBoxProps{
    class : string ;
    yester_date_data :IGithubCommitResponse[] ;
    before_yester_date_date2 : IGithubCommitResponse[];
}

export interface IDashboardChatBoxProps{
    class : string ;
    content : string ;
}

export interface IDashboardMdBoxProps{
    class : string ;
    content : string ;
}
export interface IDashboardLgBoxProps{
    class : string ;
    content : string ;
}