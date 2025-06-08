import React, { useState } from "react";
import "./Gallery.css";
import detail1 from "../assets/detailing1.jpg";
import detail2 from "../assets/detailing2.jpg";
import detail3 from "../assets/detailing3.jpg";
import detail4 from "../assets/detailing4.mp4";
import polish1 from "../assets/polishing1.mp4";
import polish2 from "../assets/polishing2.mp4";
import polish3 from "../assets/polish3.avif";
import polish4 from "../assets/polish4.jpg";
import service1 from "../assets/servicing1.avif";
import service2 from "../assets/servicing1.mp4";
import service3 from "../assets/service3.jpg";

const galleryData = [
  {
    category: "DETAILING",
    items: [
      { type: "image", src: detail1 },
      { type: "image", src: detail2 },
      { type: "image", src: detail3 },
      { type: "video", src: detail4 },
    ],
  },
  {
    category: "POLISHING",
    items: [
      { type: "image", src: polish4 },
      { type: "video", src: polish2 },
      { type: "image", src: polish3 },
      { type: "video", src: polish1 },
    ],
  },
  {
    category: "SERVICING",
    items: [
      { type: "image", src: service1 },
      { type: "video", src: service2 },
      { type: "image", src: service3 },
      { type: "video", src: detail4 },
    ],
  }
];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'

  const handleMediaClick = (src, type) => {
    setSelectedMedia(src);
    setMediaType(type);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setMediaType(null);
  };

  return (
    <div className="gallery-page">
      <div className="category-card-container">
        {galleryData.map((section, idx) => (
          <div key={idx} className="category-card">
            <h2 className="category-title">{section.category}</h2>
            <div className="image-grid">
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className={`media-container ${item.type}-container`}
                  onClick={() => handleMediaClick(item.src, item.type)}
                >
                  {item.type === "image" ? (
                    <img
                      src={
                        typeof item.src === "string"
                          ? `${item.src}?auto=compress&cs=tinysrgb&w=600`
                          : item.src
                      }
                      alt={`${section.category} ${i + 1}`}
                      className="gallery-image"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        className="gallery-video"
                        muted
                        loop
                        playsInline
                      />
                      <div className="video-play-icon">▶</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {mediaType === "image" ? (
              <img
                src={`${selectedMedia}?auto=compress&cs=tinysrgb&w=1200`}
                alt="Preview"
              />
            ) : (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="modal-video"
              />
            )}
            <button
              className="modal-close"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;