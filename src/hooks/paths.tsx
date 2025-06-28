import { GroupCreate, GroupMore, Groups, Home, Major, MajorCreate, MajorMore, Students, Teachers } from "../pages/Dashboard"
import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import NotFound from "../pages/Dashboard/NotFound";
import { NavLink } from "react-router-dom";

export const paths = {
    home: "/",
    singIn: "/sign-in",
    major: "/major",
    majorCrud: "/major/create",
    majorMore: "/major/:id",
    majorMoreCreateGroup: "/major/:id/create-group",
    majorEdit: "/major/:id/edit",
    groups: "/groups",
    groupsCreate: "/groups/create",
    groupsMore: "/groups/:groupId",
    groupsEdit: "/groups/:groupId/edit",
    students: "/students",
    teachers: "/teachers",
    notFound: "*"
}

export const DashboardRouteList = [
    {
        id: 1,
        path: paths.home,
        element: <Home />
    },
    {
        id: 2,
        path: paths.major,
        element: <Major />
    },
    {
        id: 3,
        path: paths.groups,
        element: <Groups />
    },
    {
        id: 4,
        path: paths.students,
        element: <Students />
    },
    {
        id: 5,
        path: paths.teachers,
        element: <Teachers />
    },
    {
        id: 6,
        path: paths.notFound,
        element: <NotFound />
    },
    {
        id: 7,
        path: paths.majorCrud,
        element: <MajorCreate />
    },
    {
        id: 8,
        path: paths.majorMore,
        element: <MajorMore />
    },
    {
        id: 9,
        path: paths.majorEdit,
        element: <MajorCreate />
    },
    {
        id: 10,
        path: paths.majorMoreCreateGroup,
        element: <GroupCreate />
    },
    {
        id: 11,
        path: paths.groupsCreate,
        element: <GroupCreate />
    },
    {
        id: 12,
        path: paths.groupsMore,
        element: <GroupMore />
    },
    {
        id: 13,
        path: paths.groupsEdit,
        element: <GroupCreate />
    },
]
export const DashboardNavList = [
    {
        key: 1,
        label: <NavLink to={paths.major}>Yo'nalishlar</NavLink>,
        icon: <UnorderedListOutlined />,
    },
    {
        key: 2,
        label: <NavLink to={paths.groups}>Guruxlar</NavLink>,
        icon: <UngroupOutlined />
    },
    {
        key: 3,
        label: <NavLink to={paths.students}>O'quvchilar</NavLink>,
        icon: <TeamOutlined />
    },
    {
        key: 4,
        label: <NavLink to={paths.teachers}>Ustozlar</NavLink>,
        icon: <UserOutlined />
    },
]