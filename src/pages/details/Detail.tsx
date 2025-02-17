import { useParams } from "react-router-dom";

import { useStyle } from "../../styles/useStyle";
import { CreditType, videoType } from "../../types/Credit";
import fetchDataFromApi from "../../api";
import { useQuery } from "@tanstack/react-query";
import Cast from "./Cast/Cast";
import DetailBanner from "./DetailBanner";

const Detail = () => {
  const { classes } = useStyle();

  const { name, id } = useParams();

  const { data: detailvideo } = useQuery<videoType>({
    queryKey: ["detail-video", id],
    queryFn: () => fetchDataFromApi(`${name}/${id}/videos`),
    refetchOnWindowFocus: false,
  });

  const { data: credits, isFetching: creditloading } = useQuery<CreditType>({
    queryKey: ["credits", { id, name }],
    queryFn: () => fetchDataFromApi(`${name}/${id}/credits`),
  });

  return (
    <>
      <DetailBanner video={detailvideo?.results[0]} crew={credits?.crew} />
      <Cast cast={credits?.cast} loading={creditloading} />

      <div className={classes.backShadow}></div>
    </>
  );
};

export default Detail;
