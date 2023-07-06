import World from "./World";
import "./Hello.css";

const Hello = () => {
    {/* 컴포넌트 return 값에는 ()로 처리해서 <div> 로 묶어서 보내야 함 */}
    return (
        <div>
            <h1 style={{
                color: "#f00",
                borderRight: "12px solid #000",
                marginBottom: "50px",
                opacity:1 ,
            }}                  
            >Hello</h1>
            {/* <World /> */}
        
        </div>
    );
};

export default Hello;