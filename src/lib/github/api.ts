import { Octokit } from "octokit";
import { IGithubCommitResponse } from "../../types/github";

/**
 * ref https://docs.github.com/en/rest/quickstart?apiVersion=2022-11-28
 */

/**
 * 12/04 react-query 사용해보기
 * ref https://tanstack.com/query/v3/docs/react/reference/useQuery
 */
export const GithubGetCommits = async () => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_API_KEY,
  });
  const response = await octokit
    .request("GET /repos/{owner}/{repo}/commits", {
      owner: "PigPenguinMan",
      repo: "PP",
      headers: {
        "content-type": "text/plain",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res) => res.data)
    return  response as IGithubCommitResponse[]
};

//   const { isLoading, error, data, isFetching } = useQuery(
//     "GitData",
//     async () =>
//       octokit
//         .request("GET /repos/{owner}/{repo}/commits", {
//           owner: "PigPenguinMan",
//           repo: "PP",
//           headers: {
//             "content-type": "text/plain",
//             "X-GitHub-Api-Version": "2022-11-28",
//           },
//         })
//         .then((res) => res.data),
//         /** 12/05 react.suspense를 사용하기 위한 옵션
//          * ref https://tanstack.com/query/v3/docs/react/guides/suspense
//          */
//     { suspense: true }
//   );
//   if (isLoading) return "Loading";

//   if (error) return "GithubGetCommits API err" + error;

//   return data as IGithubCommitResponse;
// };

//   if( request_type =='getCommits'){
//     const getCommit = async () => {
//         try {
//           const response = await octokit.request(
//             "GET /repos/{owner}/{repo}/commits",
//             {
//               owner: "PigPenguinMan",
//               repo: "PP",
//               headers: {
//                 "content-type": "text/plain",
//                 "X-GitHub-Api-Version": "2022-11-28",
//               },
//             }
//           );

//           return response.data as IGithubCommitResponse;
//         } catch (err) {
//           console.error("Github APi getCommit Err", err);
//         }
//       };
//       return getCommit();
//   }
