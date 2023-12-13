"use client";
import { useEffect, useState } from "react";

import { CirclePacking } from "../drawing_circles/CirclePacking";
import ArtistInfo from "./displays/ArtistInfo";
import TimeFramePicker from "./displays/TimeFramePicker";
import TopItemsVariantPicker from "./displays/TopItemsVariantPicker";

import { RegularTrack, LocalTrack, Node, TimeFrame, TopItemsVariant } from "../../_types/data";
import SpotifyWebApi from "spotify-web-api-node";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { artistsToNodes, tracksToNodes } from "@/app/_utlis/nodeConverters";



export default function TopArtists({ accessToken }: { accessToken: string }) {
  const [data, setData] = useState<Node[]>();
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("medium_term");
  const [limit, setLimit] = useState<number>(25);
  const [information, setInformation] = useState<RegularTrack | LocalTrack | undefined>(undefined);
  const [topItemsVariant, setTopItemsVariant] = useState<TopItemsVariant>("artist_view");
  const [bubbleSize, setBubbleSize] = useState<number>(30);
  const [dimensions, setDimensions] = useState<number>(650);

  const fitScreen = (width: number) => {
    if (width >= 1536) {
      setBubbleSize(30);
      setDimensions(650);
    }
    else if (width >= 940) {
      setBubbleSize(22.5);
      setDimensions(550);
    } else if (width >= 480) {
      setBubbleSize(14);
      setDimensions(400);
    } else {
      setBubbleSize(12);
      setDimensions(350);
    }
  };

  useEffect(() => {
    // Sets initial size of bubbles and canvas based on size of viewport
    fitScreen(window.innerWidth);

    const handleResize = (event: Event) => {
      const target = event.target as Window;
      fitScreen(target.innerWidth);
    };

    // Handles in cases of screen resize
    window.addEventListener("resize", handleResize);


    const destroyResize = () => {
      window.removeEventListener("resize", handleResize);
    };
    return destroyResize;

  }, []);

  useEffect(() => {
    const retrieve = async () => {
      const api = new SpotifyWebApi();
      api.setAccessToken(accessToken);
      if (topItemsVariant == "artist_view") {
        const response = await api.getMyTopArtists({ limit: limit, time_range: timeFrame });
        const topArtists = response.body.items;
        return artistsToNodes(topArtists);
      }
      const response = await api.getMyTopTracks({ limit: limit, time_range: timeFrame });
      const topTracks = response.body.items;
      return tracksToNodes(topTracks);

    };
    retrieve().then(setData).catch(console.log);
  }, [accessToken, limit, timeFrame, topItemsVariant]);

  if (data) {
    return (
      <div className="flex h-fit">
        <div className="2xl:flex 2xl:flex-row flex-col justify-center bg-gray-200 xs:rounded-[5rem] rounded-[3rem] bg-opacity-40 mx-auto md:p-12 xs:p-4 p-2 w-fit my-4">
          <div className="flex flex-col max-h-fit py-6 xs:p-8 text-center min-w-full md:w-[40rem] w-[20rem] border-4 border-black xs:rounded-[5rem] rounded-[3rem] justify-center mb-8 2xl:hidden">
            <ArtistInfo information={information} limit={limit} view={topItemsVariant} />
          </div>
          <div className="mb-0 flex flex-col justify-center align-middle pb-12 border-4 border-black xs:rounded-[5rem] rounded-[3rem] bg-gradient-to-b from-[#11005e] to-[#080135b7]">
            <div className="flex justify-center">
              <CirclePacking width={dimensions} height={dimensions} data={data} setInformation={setInformation} bubbleSize={bubbleSize}></CirclePacking>
            </div>
            <span className="text-center text-fontBlue my-4 md:text-3xl text-2xl font-semibold">Number of artists: {limit}</span>
            <div className="pb-5 mx-12 self-center flex md:w-[30rem] w-[15rem] justify-center">
              {/* Setting information only to undefined if user is actually changing into a different limit, otherwise 
                            results in unnecessary updates in the DOM */}
              <Slider className=" md:px-12 w-12"
                marks={
                  {
                    3: <p>3</p>,
                    5: <p>5</p>,
                    10: <p>10</p>,
                    15: <p>15</p>,
                    20: <p>20</p>,
                    25: <p>25</p>,
                    30: <p>30</p>,
                    35: <p>35</p>,
                  }
                }
                reverse={false}
                vertical={false}
                onChangeComplete={(event) => { if (event as Number != limit) { setInformation(undefined); } setLimit(event as number); }}
                defaultValue={25}
                max={35}
                min={3} />
            </div>
          </div>
          <div className="justify-center w-full 2xl:h-full h-fit 2xl:flex 2xl:mt-0">
            <div className="flex flex-col justify-center align-center 2xl:ml-8">
              <div className="2xl:flex flex-col max-h-fit md:h-[20rem] h-[10 rem] md:p-8 p-2 text-center min-w-full w-[40rem] border-4 border-black rounded-[5rem] justify-center hidden ">
                <ArtistInfo information={information} limit={limit} view={topItemsVariant} />
              </div>
              <div className="flex flex-col h-fit  w-full border-4 border-black xs:rounded-[5rem] rounded-[3rem] xs:my-8 my-4 xs:p-4 p-2">
                <TimeFramePicker timeFrame={timeFrame} setTimeFrame={setTimeFrame} setInformation={setInformation} />
              </div>
              <div className="border-4 border-black xs:rounded-[5rem] rounded-[3rem] xs:p-4 p-2">
                <TopItemsVariantPicker topItemsVariant={topItemsVariant} setTopItemsVariant={setTopItemsVariant} setInformation={setInformation} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <p className="  text-center font-bold text-fontBlue text-5xl mt-24">Loading...</p>
  );


}
