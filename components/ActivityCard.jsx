import { FaAngleUp } from "react-icons/fa";

const ActivityCard = () => {
    return (
        <div className="w-[60%] grid grid-cols-3 gap-[20px]">
    <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Pull Request Open</p>
      <p className="text-[12px] text-[#6b7177]">Total Pull Request Opened by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">15</h2>
      <div className="flex items-center text-[#5BBB7B]">
        <FaAngleUp />
        <span className="font-semibold ">25%</span>
      </div>
    </div>
  </div>

  <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Pull Request Merged</p>
      <p className="text-[12px] text-[#6b7177]">Total Pull Request Merged by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">4</h2>
      <div className="flex items-center text-[#5BBB7B]">
        <FaAngleUp />
        <span className="font-semibold ">55%</span>
      </div>
    </div>
  </div>

  <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Commits</p>
      <p className="text-[12px] text-[#6b7177]">Total Commits by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">30</h2>
      <div className="flex items-center text-[#5BBB7B]">
        <FaAngleUp />
        <span className="font-semibold ">45%</span>
      </div>
    </div>
  </div>


  <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Pull Request Reviewed</p>
      <p className="text-[12px] text-[#6b7177]">Total Pull Request Reviewed by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">1</h2>
      <div className="flex items-center text-red-600">
        <FaAngleUp />
        <span className="font-semibold ">2%</span>
      </div>
    </div>
  </div>

  <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Pull Request Comments</p>
      <p className="text-[12px] text-[#6b7177]">Total Pull Request Comments by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">3</h2>
      <div className="flex items-center text-[#5BBB7B]">
        <FaAngleUp />
        <span className="font-semibold ">6%</span>
      </div>
    </div>
  </div>

  <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Incident Alerts</p>
      <p className="text-[12px] text-[#6b7177]">Total Incident Alerts by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">1</h2>
      <div className="flex items-center text-[#5BBB7B]">
        <FaAngleUp />
        <span className="font-semibold ">25%</span>
      </div>
    </div>
  </div>

  <div className="shadow-md p-[15px]  rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
    <div>
      <p className="text-[14px] font-semibold mb-[5px]">Incident Resolved</p>
      <p className="text-[12px] text-[#6b7177]">Total Incident Resolved by Developer</p>
    </div>
    <div className="flex flex-col items-end">
      <h2 className="text-[30px] font-bold">5</h2>
      <div className="flex items-center text-red-600">
        <FaAngleUp />
        <span className="font-semibold ">27%</span>
      </div>
    </div>
  </div>
  </div>
    )
}

export default ActivityCard