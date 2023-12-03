import { Client } from "@notionhq/client";
import axios from "axios";

export const NotionAPI = async () => {
  const notion = new Client({
    auth: process.env.REACT_APP_NOTION_API_KEY,
  });
  /**
   * 11/30 notion API를 불러올때 cors오류 발생
   * 프록시 서버 사용 시도
   */

  const corsAw = "https://cors-anywhere.herokuapp.com/";
  const pageId = "b09f44665ba0466dbf34037c85f97ccf";

  const getDB = async () => {
    try {
      const response = await axios.get(
        `${corsAw}https://api.notion.com/v1/databases/${pageId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Notion API Err", err);
    }
  };


  /**
   * 12/03 데이터를 불러올 때 cover가 null로 나옴 다른방법 찾아보기
   */
  const QueryDb = async () => {
    try {
      const response = await axios.post(
        `${corsAw}https://api.notion.com/v1/databases/${pageId}/query`,{
            "filter":{
                "property" : "%3DbRF",
                "multi_select" : {
                    "contains" : "test"
                }
            }
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Notion API QueryDb Err", err);
    }
  };
  // const search =async ()=>{
  //     try {
  //         const response = await axios.post(`${corsAw}https://api.notion.com/v1/search`,{
  //             headers :{
  //             Authorization : `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
  //             'Notion-Version' : '2022-06-28' ,
  //             "Content-Type": "application/json",
  //         }}
  //         )
  //         return response
  //     } catch (err) {
  //         console.error('Notion API Seach Err',err)
  //     }
  // }

  // search()
  //  getDB()
  return QueryDb();
};
