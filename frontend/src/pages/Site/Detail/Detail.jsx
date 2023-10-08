import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [item, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:7075/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Veri alımı sırasında bir hata oluştu:", error);
      });
  }, [id]);

  return (
    <>
      {/* Burada alınan detay verilerini göstermek için gerekli JSX'i ekleyebilirsiniz */}
      {/* <img
                  src={`http://localhost:7075/public/${item.mainimage}`}
                  alt="img"
                /> */}
              
              <h1>{item.title}</h1>
              <p>{item.price}tl</p>
</>
  );
};

export default Detail;
