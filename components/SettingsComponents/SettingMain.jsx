import { motion, AnimatePresence } from "framer-motion";

import ContactBtn from "../UI Component/ContactBtn";
import CoffeBtn from "../UI Component/CoffeBtn";
import GithubBtn from "../UI Component/GithubBtn";
import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";
import TemplateSwitcher from "../UI Component/TemplateSwitcher";

const SettingMain = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">CV Builder | MediaZ</h1>
        <div className="mt-5">
          <p>
            Chào bạn, đây là trình tạo CV (hồ sơ xin việc) được vận hành bởi MediaZ. <br/>Ứng dụng này hoàn toàn miễn phí, bạn có thể sử dụng để tạo ra những CV xuất sắc nhất! 
          </p>
          <div className="bg-sky-50 border-2 border-sky-700/50 px-2 mt-4 mb-2 pt-4 py-2 rounded-xl">
            <h1 className="text-sky-900 text-xl font-bold">Trước khi sử dụng</h1>
            <ol className="list-none mt-2 text-sky-900 space-y-2">
              <li>
                ● Nhấp vào <strong>Reset</strong> để xóa dữ liệu and nhấp
                <strong> Điền dữ liệu DEMO </strong>
                để xóa dữ liệu và điền dữ liệu mặc định.
              </li>
              <li>
                ● Đôi khi các hộp kiểm không hoạt động như bình thường. 
                <strong> Chỉ cần nhấp hai lần để nó hoạt động bình thường.</strong>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex space-x-2 ">
            <SetEmpty />
            <SetSample />
          </div>
          <motion.div
            layout
            className="w-44 h-1 mx-auto mt-2 bg-gray-200 rounded-full"
          />
          <div className="flex space-x-2 mt-2">
            <ContactBtn />

            <GithubBtn />
          </div>
          <div className="mt-2">
            <CoffeBtn />
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-bold">Giao diện</h1>
            <div className="flex flex-row space-x-4 mt-2">
              <TemplateSwitcher value={1} />
              <TemplateSwitcher value={2} />
              <TemplateSwitcher value={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;
