import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const ActivityCard = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const calculatePercentage = (developerCount, totalCount) => {
    if (totalCount === 0) {
      return 0;
    }
    return ((developerCount / totalCount) * 100).toFixed(0);
  };

  const getTextColor = (percentage) => {
    return percentage.toString() === "0" ? 'text-red-600' : 'text-[#5BBB7B]';
  };

  const renderArrow = (percentage) => {
    return percentage.toString() === "0" ? <FaAngleDown /> : <FaAngleUp />;
  };

  return (
    <div className="w-[60%] grid grid-cols-3 gap-[20px]">
      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Pull Request Open</p>
          <p className="text-[12px] text-[#6b7177]">Total Pull Request Opened by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[0].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[0].developer_count, data.CombineData[0].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[0].developer_count, data.CombineData[0].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[0].developer_count, data.CombineData[0].total_count)}%
            </span>
          </div>
        </div>
      </div>

      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Pull Request Merged</p>
          <p className="text-[12px] text-[#6b7177]">Total Pull Request Merged by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[1].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[1].developer_count, data.CombineData[1].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[1].developer_count, data.CombineData[1].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[1].developer_count, data.CombineData[1].total_count)}%
            </span>
          </div>
        </div>
      </div>

      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Commits</p>
          <p className="text-[12px] text-[#6b7177]">Total Commits by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[2].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[2].developer_count, data.CombineData[2].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[2].developer_count, data.CombineData[2].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[2].developer_count, data.CombineData[2].total_count)}%
            </span>
          </div>
        </div>
      </div>

      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Pull Request Reviewed</p>
          <p className="text-[12px] text-[#6b7177]">Total Pull Request Reviewed by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[3].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[3].developer_count, data.CombineData[3].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[3].developer_count, data.CombineData[3].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[3].developer_count, data.CombineData[3].total_count)}%
            </span>
          </div>
        </div>
      </div>

      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Pull Request Comments</p>
          <p className="text-[12px] text-[#6b7177]">Total Pull Request Comments by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[4].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[4].developer_count, data.CombineData[4].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[4].developer_count, data.CombineData[4].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[4].developer_count, data.CombineData[4].total_count)}%
            </span>
          </div>
        </div>
      </div>

      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Incident Alerts</p>
          <p className="text-[12px] text-[#6b7177]">Total Incident Alerts by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[5].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[5].developer_count, data.CombineData[5].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[5].developer_count, data.CombineData[5].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[5].developer_count, data.CombineData[5].total_count)}%
            </span>
          </div>
        </div>
      </div>

      <div className="shadow-md p-[15px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
        <div>
          <p className="text-[14px] font-semibold mb-[5px]">Incident Resolved</p>
          <p className="text-[12px] text-[#6b7177]">Total Incident Resolved by Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[30px] font-bold">{data?.chartData[6].count}</h2>
          <div className={`flex items-center font-semibold ${getTextColor(calculatePercentage(data?.CombineData[6].developer_count, data.CombineData[6].total_count))}`}>
            {renderArrow(calculatePercentage(data?.CombineData[6].developer_count, data.CombineData[6].total_count))}
            <span className="font-semibold">
              {calculatePercentage(data?.CombineData[6].developer_count, data.CombineData[6].total_count)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
