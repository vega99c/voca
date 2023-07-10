import {useEffect, useState } from "react"; 

export default function useFetch(url){
    const [data, setData] = useState([]);
    
    // count가 변경되었을때만 이 함수가 실행된다. 이를 의존성 배열이라 함.
    // 그리고 초기에 한번만 실행되게 하고 싶으면 빈 배열을 매개변수로 넣어주면 됨.
    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data =>  {
            setData(data);
        });
    }, [url]);

    return data;
}

