"use client";

import { WorkData } from "@/Data/Work";
import Link from "next/link";
import React, { useState, useRef } from "react";
import TinderCard from "react-tinder-card";

function CarouselTinder() {
  const getDataByType = (type) => {
    const typeMap = {
      type1: WorkData.slice(0, 5),
      type2: WorkData.slice(5, 10),
      type3: WorkData.slice(10),
    };
    return typeMap[type] || [];
  };
  const [selectedType, setSelectedType] = useState("type1");
  const [currentIndex, setCurrentIndex] = useState(
    getDataByType(selectedType).length - 1,
  );
  const [lastDirection, setLastDirection] = useState();
  const [shuffledData, setShuffledData] = useState(getDataByType(selectedType));
  const currentIndexRef = useRef(currentIndex);

  const childRefs = Array(shuffledData.length)
    .fill(0)
    .map(() => React.createRef());

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < shuffledData.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < shuffledData.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const handleShuffleClick = () => {
    const shuffledData = [...getDataByType(selectedType)].sort(
      () => Math.random() - 0.5,
    );
    setShuffledData(shuffledData);
    setCurrentIndex(shuffledData.length - 1);
    childRefs.forEach(async (ref) => {
      if (ref.current) {
        await ref.current.restoreCard();
      }
    });
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    setShuffledData(getDataByType(newType));
    setCurrentIndex(getDataByType(newType).length - 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 overflow-hidden ">
      <div>
        <label htmlFor="typeSelect" className="text-5xl font-bold">
          Choose your Type:
        </label>
        <select
          id="typeSelect"
          value={selectedType}
          onChange={handleTypeChange}
          className="text-5xl font-bold"
        >
          <option value="type1">Transit</option>
          <option value="type2">Outdoor</option>
          <option value="type3">Green</option>
        </select>
      </div>

      <div className="cardContainer mx-auto flex w-full justify-center overflow-hidden  overflow-x-hidden   px-20  ">
        {shuffledData.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe "
            key={character.id}
            onSwipe={(dir) => swiped(dir, character.title, index)}
            onCardLeftScreen={() => outOfFrame(character.title, index)}
          >
            <div
              style={{ backgroundImage: "url(" + character.img + ")" }}
              className="card h-full  w-[80vw] overflow-x-hidden rounded-2xl"
              onDoubleClick={() =>
                (window.location.href = `/work/${character.id}`)
              }
            >
              <h3>{character.title}</h3>

              {/* <p>Covered Locations: {character.coveredLocations.join(", ")}</p> */}
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons mt-32 flex gap-5 ">
        <button
          style={{ opacity: !canGoBack && "30%" }}
          onClick={() => swipe("left")}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={48}
            viewBox="0 -960 960 960"
            width={48}
          >
            <path d="M470-80q-21.882 0-41.941-8T392-112L184-320l15-22q11-16 28.5-22.5T264-366l96 26v-340q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T420-680v290h67v-150q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T547-540v150h66v-110q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T673-500v110h67v-30q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T800-420v180q0 66-47 113T640-80zM80-700v-180h40v93q81-64 174-98.5T490-920q134 0 237.5 57.5T880-700h-45q-51-88-140.5-134T490-880q-99.968 0-191.984 35.5T127-740h133v40z" />
          </svg>
        </button>
        <button
          style={{ opacity: !canGoBack && "30%" }}
          onClick={() => goBack()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={48}
            viewBox="0 -960 960 960"
            width={48}
          >
            <path d="M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5 78 113.5T840-482t-28.5 141-78 115T618-148.5 477-120m128-197L451-469v-214h60v189l137 134z" />
          </svg>
        </button>
        <button
          style={{ opacity: !canGoBack && "30%" }}
          onClick={() => swipe("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={48}
            viewBox="0 -960 960 960"
            width={48}
          >
            <path d="M470-80q-21.882 0-41.941-8T392-112L184-320l15-22q11-16 28.5-22.5T264-366l96 26v-340q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T420-680v290h67v-150q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T547-540v150h66v-110q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T673-500v110h67v-30q0-12.75 8.675-21.375t21.5-8.625 21.325 8.625T800-420v180q0 66-47 113T640-80zM80-700q49-105 152.5-162.5T470-920q103 0 196 34.5T840-787v-93h40v180H700v-40h133q-79-69-171.016-104.5T470-880q-115 0-204.5 46T125-700z" />
          </svg>
        </button>
        <button onClick={handleShuffleClick}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={48}
            viewBox="0 -960 960 960"
            width={48}
          >
            <path d="M576-160v-60h120L522-393l42-43 176 174v-121h60v223zm-374 0-42-43 538-537H576v-60h224v223h-60v-120zm193-363L160-757l43-43 235 234z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CarouselTinder;
