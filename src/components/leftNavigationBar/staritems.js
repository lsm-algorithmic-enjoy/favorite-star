import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const menuArray = [
  {
    key: "firstMenu",
    label: "데이터",
    icon: <AppstoreOutlined />,
  },
  {
    key: "secondMenu",
    label: "차트",
    icon: <PieChartOutlined />,
  },
  {
    key: "thirdMenu",
    label: "검색",
    icon: <DesktopOutlined />,
  },
  {
    key: "fourthMenu",
    label: "문서",
    icon: <ContainerOutlined />,
  },
  {
    key: "fifthMenu",
    label: "메시지",
    icon: <MailOutlined />,
  },
];

export default menuArray;
