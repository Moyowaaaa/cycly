import { acceptHMRUpdate, defineStore } from "pinia";
import type { bike } from "~/types/declarations";

const useBikeStore = defineStore("BikeStore", {
  state: () => {
    return {
      bikes: [
        {
          name: "TrailBlazer X1",
          imageName: "mountainBike2",
          price: 100,
          type: ["Mountain Bike"],
          rating: 4,
          slug: "trail-blazer-x1",
        },
        {
          name: "VoltRide 1",
          imageName: "eBike1",
          price: 300,
          type: ["Electric Bike"],
          rating: 5,
          slug: "VoltRide1",
        },
        {
          name: "TrailBlazer X2",
          imageName: "mountainBike1",
          price: 150,
          type: ["Mountain Bike"],
          rating: 4,
          slug: "trail-blazer-x2",
        },
        {
          name: " PeakMaster Pro",
          imageName: "mountainBike3",
          price: 175,
          type: ["Mountain Bike"],
          rating: 4,
          slug: "peakmaster-pro",
        },

        {
          name: "AeroGlide 1",
          imageName: "roadBike1",
          price: 200,
          type: ["Road Bike"],
          rating: 4,
          slug: "aeroglide-1",
        },
        {
          name: "AeroGlide 1 pro",
          imageName: "roadBike2",
          price: 350,
          type: ["Road Bike"],
          rating: 4,
          slug: "aeroglide-1-pro",
        },
        {
          name: "TrailBlazer Ultima",
          imageName: "mountainBike5",
          price: 600,
          type: ["Mountain Bike"],
          rating: 5,
          slug: "trail-blazer-ult",
        },
        {
          name: "CitySprint xv",
          imageName: "cityBike3",
          price: 125,
          type: ["City Bike"],
          rating: 5,
          slug: "city-sprint-xv",
        },
        {
          name: "StreetGlide v",
          imageName: "cityBike1",
          price: 150,
          type: ["City Bike"],
          rating: 5,
          slug: "street-glide-v",
        },
        {
          name: "EnduroRide chase",
          imageName: "cityBike2",
          price: 150,
          type: ["City Bike"],
          rating: 5,
          slug: "enduro-chase",
        },
        {
          name: "CommuterCycle Eco",
          imageName: "cityBike4",
          price: 200,
          type: ["City Bike"],
          rating: 4,
          slug: "commuter-eco",
        },
        {
          name: "Speedster Aero",
          imageName: "roadBike3",
          price: 185,
          type: ["Road Bike"],
          rating: 4,
          slug: "speedster-aero",
        },
        {
          name: " PowerPedal Eco",
          imageName: "eBike3",
          price: 350,
          type: ["Electric Bike"],
          rating: 5,
          slug: "powerpedal-eco",
        },
        {
          name: "CitySprint Elite",
          imageName: "cityBike5",
          price: 150,
          type: ["City Bike"],
          rating: 4,
          slug: "citysprint-elite",
        },
        {
          name: " E-Glide Boost",
          imageName: "eBike2",
          price: 385,
          type: ["Electric Bike"],
          rating: 5,
          slug: "eglide-boost",
        },
      ] as unknown as bike[],
    };
  },
  getters: {
    allBikes: (state) => state.bikes,
    singleBikeBySlug: (state) => {
      return (slug: string) => state.bikes.find((bike) => bike.slug === slug);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBikeStore, import.meta.hot));
}

export default useBikeStore;
