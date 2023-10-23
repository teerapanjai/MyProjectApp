import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiSupport,
  HiOutlineCloudUpload,
} from "react-icons/hi";
import { FaBlog } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/admin/dashboard/user" img={user?.photoURL} imgAlt="User Image">
        <p>
          {
            user?.displayname || "Demo User"
          }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>Upload</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/user" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item> */}
          <Sidebar.Item href="/" icon={HiArrowSmRight}>
            <p>Home</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Upgrade to Pro</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>Documentation</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            <p>Help</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
