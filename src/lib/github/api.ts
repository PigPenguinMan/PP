

import { Octokit } from "octokit"
/**
 * ref https://docs.github.com/en/rest/quickstart?apiVersion=2022-11-28
 */
export const GithubAPI =async () => {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_KEY,
    })

    const getRepo = async ()=>{
            const response = await octokit.request("GET /repos/{owner}/{repo}/commits",{
                owner:"PigPenguinMan",
                repo:"PP",
                headers: {
                    "content-type": "text/plain",
                    "X-GitHub-Api-Version": "2022-11-28",
                  }
            })

        
        return response.data 
    }
    return getRepo()
}