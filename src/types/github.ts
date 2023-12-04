
/**
 * 12/04 페이지에서 API함수를 부를때 사용할 Request
 * 
 */

export interface IGithubAPIRequest {
  request_type : string ;

}

/**
 * 12/04 깃허브 리포지토리의 commit을 불러올떄 사용할 타입
 * 주석 아래부터 interface 까지 IGithubCommitResponse 에서 사용할 타입
 */
type TGithubUser = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

type TCommitResauthor = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

type TCommitauthor = {
  name?: string;
  email?: string;
  date?: string;
};

type TCommitcommiter = {
  name?: string;
  email?: string;
  date?: string;
};
type TCommittree = {
  sha?: string;
  url?: string;
};
type TCommitverification = {
  verified?: boolean;
  reason?: string;
  signature?: string | null;
  payload?: string | null;
};
type TCommit = {
  author?: TCommitauthor;
  comment_count?: number;
  committer?: TCommitcommiter;
  message?: string;
  tree?: TCommittree;
  url?: string;
  verification?: TCommitverification;
};

type Tparent = {
  html_url?: string;
  sha?: string;
  url?: string;
};
type Tparents = {
  parents?: Tparent[];
};
export interface IGithubCommitResponse {
  author?: TGithubUser;
  comments_url?: string;
  commit?: TCommit;
  committer?: TGithubUser;
  html_url?: string;
  node_id?: string;
  parents?: Tparents;
  sha?: string;
  url?: string;
}
