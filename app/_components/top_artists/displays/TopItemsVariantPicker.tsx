"use client";
import { LocalTrack, RegularTrack, TopItemsVariant } from "@/app/_types/data";
import { Dispatch, SetStateAction } from "react";


export default function TopItemsVariantPicker({ topItemsVariant, setTopItemsVariant, setInformation }: {
  topItemsVariant: TopItemsVariant,
  setTopItemsVariant: Dispatch<SetStateAction<TopItemsVariant>>
  setInformation: Dispatch<SetStateAction<LocalTrack | RegularTrack | undefined>>
}) {

  return (
    <div className="text-center h-fit">
      <span className="md:text-3xl text-2xl text-fontBlue font-semibold">
        View
      </span>
      <div className="flex flex-col 2xl:flex-row md:mt-4 mt-2 w-full justify-around md:text-2xl text-base">
        {/* Setting information only to undefined if user is actually changing into a different view, otherwise 
                results in unnecessary updates in the DOM */}
        <button data-topitemsvariant={topItemsVariant}
          className="transition-all duration-300 py-0.5 hover:scale-110 data-[topitemsvariant='artist\_view']:text-purple"
          onClick={() => {
            if (topItemsVariant != "artist_view") { setInformation(undefined); }
            setTopItemsVariant("artist_view");
          }}>
          Artist View
        </button>
        <button data-topitemsvariant={topItemsVariant}
          className="transition-all duration-300 py-0.5 hover:scale-110 data-[topitemsvariant='track\_view']:text-purple"
          onClick={() => {
            if (topItemsVariant != "track_view") { setInformation(undefined); } setTopItemsVariant("track_view");
          }}>
          Track View
        </button>
      </div>
    </div>
  );

}