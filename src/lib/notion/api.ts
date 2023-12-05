import { Client } from "@notionhq/client";
import axios from "axios";
import { INotionAPIRequest } from "../../types/notion";

export const NotionDbQuery = async () => {
  const response = await axios
    .post(
      `${process.env.REACT_APP_PROXY_URL}https://api.notion.com/v1/databases/${process.env.REACT_APP_NOTION_DB_ID}/query`,
      {
        filter: {
          property: "%3DbRF",
          multi_select: {
            contains: "test",
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
  return response;
};

export const NotionGetPage = async (pageId:string) => {
  const response = await axios
    .get(
      `${process.env.REACT_APP_PROXY_URL}https://api.notion.com/v1/pages/${pageId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
  return response;
};
export const NotionAPI = async ({
  requestType,
  requestContent,
}: INotionAPIRequest) => {
  const notion = new Client({
    auth: process.env.REACT_APP_NOTION_API_KEY,
  });
  /**
   * 11/30 notion API를 불러올때 cors오류 발생
   * 프록시 서버 사용 시도
   */

  const corsAw = "https://cors-anywhere.herokuapp.com/";
  const dbId = "b09f44665ba0466dbf34037c85f97ccf";
  /**
   * 12/03 NotionApi의 인자로 받아오는 type에 따라 다른 함수를 부르게 하기
   */
  if (requestType == "GetDB") {
    // const getDB = async () => {
    //   try {
    //     const response = await axios.get(
    //       `${corsAw}https://api.notion.com/v1/databases/${dbId}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
    //           "Notion-Version": "2022-06-28",
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     return response.data;
    //   } catch (err) {
    //     console.error("Notion API Err", err);
    //   }
    // };
    // return getDB();
  } else if (requestType == "Query") {
    // 블로그페이지를 들어갔을때 노션DB에서 필터링한 데이터를 부르는 함수
    const queryDb = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_PROXY_URL}https://api.notion.com/v1/databases/${process.env.REACT_APP_NOTION_DB_ID}/query`,
          {
            filter: {
              property: "%3DbRF",
              multi_select: {
                contains: "test",
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
              "Notion-Version": "2022-06-28",
              "Content-Type": "application/json",
            },
          }
        );
        return response.data.results;
      } catch (err) {
        console.error("Notion API QueryDb Err", err);
      }
    };
    return queryDb();
  } else if (requestContent && requestType == "GetPage") {
    // 블로그페이지의 카드를 눌렀을때 누른 카드ID값에 해당하는 데이터를 불러오는 함수
    const getPage = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PROXY_URL}https://api.notion.com/v1/pages/${requestContent}`,
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
        console.error("Notion API GetPage Err", err);
      }
    };
  }

  /**
   * 12/03 데이터를 불러올 때 cover가 null로 나옴 다른방법 찾아보기
   */
};
