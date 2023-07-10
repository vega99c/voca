import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1>
                <a href="/">단어장 프로젝트</a>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">
                    단어 추가
                </Link>                
                <Link to="/create_day" className="link">
                    Day 추가
                </Link>
            </div>
        </div>
    );
}