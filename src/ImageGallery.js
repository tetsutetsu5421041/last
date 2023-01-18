import React from "react"
import "./ImageGallery.css"

const ImageGallery = ({fetchData}) => {
  return (
    <div>
        <div className = "images-wrapper">
            {fetchData.map((data) => (
                <div className = "image" key = {data.id} id = "img-select">
                  <img src = {data.largeImageURL} alt = ""/>
                  <ul class="menu">
                      <ul>
                        <li><a href={data.pageURL} target = "_blank" rel="noreferrer">画像元リンク</a></li>
                        <li><a href={data.webformatURL} target = "_blank" rel="noreferrer">画像プレビュー</a></li>
                      </ul>
                  </ul>
                  <p>tags : {data.tags}</p>
                  <p>user : {data.user}</p>
                </div>
                
            ))}
        </div> 
    </div>
  );
}

export default ImageGallery