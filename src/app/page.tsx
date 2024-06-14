"use client";
import { useQuery } from "@tanstack/react-query";
import Qoutes from "./Components/quotes";
import { getQoute } from "./actions";

function Home() {
  // const { data } = useMutation({
  //   mutationFn: getQoute,

  //   onSuccess: ({ data }) => {
  //     console.log(data);

  //     return data;
  //   },
  //   onError: (error) => {
  //     console.log("Something went wrong", error);
  //   },
  // });

  // console.log(data);

  const { data, error, isLoading } = useQuery({
    queryKey: ["qoutes"],
    queryFn: getQoute,
  });

  console.log(data);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {JSON.stringify(data?.[0].quote)}
      <Qoutes data={data} />
    </div>
  );
}

export default Home;
