import type { bike, wishListItem } from "~/types/declarations";
import useBikeStore from "./BikesStore";
import useToastStore from "./ToastStore";

const useWishlistStore = defineStore("WishlistStore", {
  state: () => ({
    wishlist: [] as unknown as wishListItem[],
    isInWishList: false,
  }),
  getters: {
    favouritesCount: (state) => {
      return state.wishlist.length;
    },
    itemExists: (state) => {},
    itemsinWishlist: (state) => {
      const BikeStore = useBikeStore();

      let wishlistProducts: bike[] = [];
      state.wishlist.forEach((item) => {
        const bike: any = BikeStore.bikes.find(
          (bike) => bike.slug === item.slug
        );
        if (bike) {
          wishlistProducts.push({ ...bike, ...item });
        }
      });
      return wishlistProducts;
    },
  },
  actions: {
    addItemToWishList(slug: string, inList: boolean = true) {
      const toastStore = useToastStore();

      const bikeSlug = this.wishlist.find(
        (bike: wishListItem) => bike.slug === slug
      );
      if (!bikeSlug) {
        this.wishlist.push({ slug, inList });
        toastStore.addedWishList();
      }
    },
    removeItemfromWishlist(slug: string) {
      const toastStore = useToastStore();

      this.wishlist = this.wishlist.filter((item) => item.slug !== slug);
      toastStore.removedWishList();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWishlistStore, import.meta.hot));
}

export default useWishlistStore;
