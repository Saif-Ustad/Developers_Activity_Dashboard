import PR_Open from "../public/PR_Open.png"
import PR_Merged from "../public/PR_Merged.png"
import Commites_Icon from "../public/Commit.png"
import PR_Reviewed from "../public/PR_Reviewed.png"
import PR_Comments from "../public/PR_Comments.jpg"
import Alert_Icon from "../public/Alerts.png"
import Resolved_Icon from "../public/Resolved.png"

import Image from "next/image"

const TotalActivityCard = () => {
  return (
    
    <div className="flex gap-[20px] justify-between">
    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">PR Open</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={PR_Open} alt="PR_Open" className="icon" height={20} width={20} />
      </div>
    </div>

    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">PR Merged</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={PR_Merged} alt="PR_Merged" className="icon" height={25} width={25} />
      </div>
    </div>

    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">Commits</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={Commites_Icon} alt="Commits" className="icon" height={35} width={35} />
      </div>
    </div>

    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">PR Reviewed</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={PR_Reviewed} alt="PR_Reviewed" className="icon" height={25} width={25} />
      </div>
    </div>

    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">PR Comments</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={PR_Comments} alt="PR_Comments" className="icon" height={25} width={25} />
      </div>
    </div>

    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">Incident Alerts</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={Alert_Icon} alt="Alerts" className="icon" height={20} width={20} />
      </div>
    </div>

    <div className="shadow-md p-[15px] w-[180px] rounded-[10px] bg-white flex items-center justify-between gap-[30px]">
      <div>
        <p className="text-[14px] text-[#6b7177]">Incident Resolved</p>
        <h2 className="text-[20px] font-bold">15</h2>
      </div>
      <div className="bg-[#1e90ff] flex items-center justify-center rounded-[10px] w-[40px] h-[40px]">
        <Image src={Resolved_Icon} alt="Resolved" className="icon" height={25} width={25} />
      </div>
    </div>

  </div>
  )
}

export default TotalActivityCard