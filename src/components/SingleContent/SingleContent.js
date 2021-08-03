import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import { FormattedMessage, FormattedDate } from "react-intl";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      ></Badge>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      {/* <button className="myList_button" onClick={addToMyList}>+ Mi Lista</button> */}
      <div className="subtitle">
        <span>
          {media_type === "tv" ? (
            <FormattedMessage
              id="app.series"
              defaultMessage="Series"
            ></FormattedMessage>
          ) : (
            <FormattedMessage
              id="app.movies"
              defaultMessage="Movies"
            ></FormattedMessage>
          )}
        </span>
        <span>
          <FormattedDate year="numeric" value={date}></FormattedDate>
        </span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
