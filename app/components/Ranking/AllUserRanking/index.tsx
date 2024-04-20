/* eslint-disable react-hooks/rules-of-hooks */
import useSWR, { Fetcher } from "swr";
import request from "@/app/request";
import { List } from "antd";
import { ISearchRecord } from "@/app/interface";
import dayjs from "dayjs";

export const AllUserRanking = () => {
  const { data, error } = useSWR<{ data: ISearchRecord[] }>(
    "/api/searchRecord/recent-search-by-all-users",
    request,
    {
      refreshInterval: 10000,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    }
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="w-6/12">
      <h4 className="mb-2">All user recent search</h4>
      <List
        itemLayout="horizontal"
        dataSource={data.data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.location}
              description={dayjs(item.search_date_time).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
