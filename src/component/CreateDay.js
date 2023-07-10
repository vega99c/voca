import { useRef } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateDay(){
    const dayRef = useRef(null);
    const history = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        
        fetch(`http://localhost:3001/days/`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                day : dayRef.current.value,                                
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료 되었습니다");
                //v6에서 history->push에서 push를 빼는걸로 변경
                //링크에서 /#은 index 페이지로 보내는 것.
                history(`/#`);
            }
        });
    }

    return (
        <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Day</label>
                    <input type="text" placeholder="원하는 날짜 입력" ref={dayRef} />
                </div>
                
                <button>저장</button>            
        </form>
    )
}