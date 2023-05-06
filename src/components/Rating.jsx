import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((item, i) => {
        return (
          <span key={i} onClick={() => onClick(i + 1)} style={style}>
            {rating > i ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
