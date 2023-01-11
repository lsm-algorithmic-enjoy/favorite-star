import LeftNavigationBar from "./components/leftNavigationBar/index.jsx";
import "./style.css";
const Descriptions = (
  <div>
    <h1>즐겨찾기 기능 구현 프로젝트</h1>
    <h2>좌측에 있는 Navbar 항목을 즐겨찾기 할 수 있도록 만들었습니다.</h2>
  </div>
);

export default function App() {
  return (
    <div className="App">
      <LeftNavigationBar />
      <div className="content">{Descriptions}</div>
    </div>
  );
}
