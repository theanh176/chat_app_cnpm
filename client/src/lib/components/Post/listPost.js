import React from "react";
import { useQuery } from "react-query";
import LoadingIcons from "react-loading-icons";

import Post from "./post";
import { ListPostApi } from "../../../api/postApi";

const ListPost = () => {
  const {
    data: listPostData,
    isLoading,
    isError,
  } = useQuery("listPost", () => ListPostApi(1, 40));

  if (isLoading) {
    return <LoadingIcons.ThreeDots />;
  }

  return (
    <div>
      {listPostData?.data?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default ListPost;
