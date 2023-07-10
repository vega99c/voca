import { useRef } from "react";
//v6에서 useHistory->useNavigate로 수정됨
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    //react 라우터에서 제공하는 기능    
    const history = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        
        fetch(`http://localhost:3001/words/`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            //POST로 생성하면 id는 자동으로 생성
            body : JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료 되었습니다");
                //v6에서 history->push에서 push를 빼는걸로 변경
                history(`/day/${dayRef.current.value}`);
            }
        });
    }
    //useRef : 리액트에서 제공하는 기능
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>

            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day =>(
                        <option key={day.id} value={day.day} >
                            {day.day}
                        </option>
                    ))}                    
                </select>                
            </div>
            <button>저장</button>            
        </form>
    );
}