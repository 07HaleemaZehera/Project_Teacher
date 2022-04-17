import { HANDLE_ISLOADING, TEACHER_DETAIL } from "./actionTypes";
import axios from "axios"
export const handleDetail = (data) => ({
  type: TEACHER_DETAIL,
  payload: data,
 
 
});


export const handleIsloading=()=>({
    type:HANDLE_ISLOADING,
})

export const getDetail=()=>(dispatch)=>{
    dispatch(handleIsloading());
    axios
      .get(`http://localhost:3004/teacher_details`)
      .then((res) => {
        dispatch(handleDetail(res.data));
      })
      .catch((err) => console.log(err));
}