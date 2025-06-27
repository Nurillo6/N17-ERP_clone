import { PlusOutlined } from "@ant-design/icons"
import Caption from "../../components/Caption"
import GroupData from "../../components/GroupData"

const Groups = () => {
  return (
    <div className="p-5">
      <div className="bg-white p-5 rounded-md">
        <Caption title="Guruhlar" count={0} icon={<PlusOutlined/>}/>
        <GroupData/>
      </div>
    </div>
  )
}

export default Groups