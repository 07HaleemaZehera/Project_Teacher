import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleIsloading ,getDetail} from "../Redux/action";

export default function Teacher_detail() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleGender = (value) => {
    setGender(value);
  };

  const handleAge=(value)=>{
      setAge(value)
  }
  useEffect(() => {
    dispatch(getDetail())
  }, []);
  const r_data = useSelector((state) => state.data);
  console.log(r_data);
  const r_isLoading = useSelector((state) => state.isLoading);
  console.log(r_isLoading);

  if (r_isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <h1>Teacher Details</h1>

      <div >
        <button>Filter by gender</button>
        <button onClick={() => handleGender("male")}>Male</button>
        <button onClick={() => handleGender("female")}>Female</button>
      </div>
      <br></br>
      <div >
        <button>Sort by Age</button>
        <button onClick={()=>handleAge("HTL")}>High to Low</button>
        <button onClick={()=>handleAge("LTH")}>Low to High</button>
      </div>

      {r_data[0] &&
        r_data[0].sort((a,b)=>
            age=== "LTH"
            ? a.age - b.age
            : age=== "HTL"
            ? b.age - a.age
            : true
          ).filter((e) => {
              if(gender==""){
                  return true
              }
            return e.gender === gender;
          })
          .map((e) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <p>{e.name}</p>
                <p>{e.age}</p>
                <p>{e.gender}</p>
                <p>{e.no_of_classes}</p>
              </div>
            );
          })}
    </div>
  );
}



            