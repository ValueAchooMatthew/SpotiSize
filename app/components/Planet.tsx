"use client";
import Image from "next/image";
import { CSSProperties } from "react";

type Props = {
  name: string;
  artistInfo: SpotifyApi.ArtistObjectFull;
};
const imageStyle: CSSProperties = {
  borderRadius: "9999px",
};

export default function Planet({ name, artistInfo }: Props) {
  return (
    <div
      className={
        "rounded-full animate-bounce p-2 m-1 text-black w-32 h-32 flex items-center justify-center text-base font-bold mx-12"
      }
    >
      <Image
        src={artistInfo.images[0].url}
        alt={name}
        fill={true}
        style={imageStyle}
      />
    </div>
  );
}
