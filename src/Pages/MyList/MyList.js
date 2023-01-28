import React, { useContext, useEffect } from "react";
import { MyListContext } from "../../context/MyListContext";
import SingleContent from "../../components/SingleContent/SingleContent";
import { FormattedMessage } from "react-intl";

const MyList = () => {
  const { myList } = useContext(MyListContext);
  const { setMyList } = useContext(MyListContext);

  useEffect(() => {
    const contentMyList = JSON.parse(localStorage.getItem("add-my-list"));
    if (contentMyList) setMyList(contentMyList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span className="pageTitle">
        <FormattedMessage id="app.myList" defaultMessage="My List" />
      </span>
      <div className="trending">
        {myList &&
          myList.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            ></SingleContent>
          ))}
      </div>
    </div>
  );
};

export default MyList;
