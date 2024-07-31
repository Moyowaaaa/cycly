import { defineStore, acceptHMRUpdate } from "pinia";
import type { bike, Item } from "~/types/declarations";
import useBikeStore from "./BikesStore";
import useToastStore from "./ToastStore";

const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as Item[],
  }),
  getters: {
    productsInCart: (state) => {
      const BikeStore = useBikeStore();
      let cartProducts: bike[] = [];
      state.cart.forEach((item) => {
        const bike: any = BikeStore.bikes.find(
          (bike) => bike.slug === item.slug
        );
        if (bike) {
          cartProducts.push({ ...bike, ...item });
        }
      });

      return cartProducts;
    },
    itemCount(): number {
      return this.cart.length;
    },
    itemsInCart: (state): number => {
      return state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    totalAmountOfItemInCart: (state) => {
      const BikeStore = useBikeStore();
      return state.cart.reduce((total, item) => {
        const product = BikeStore.bikes.find((p) => p.slug === item.slug);
        if (product && typeof product.price === "number") {
          return total + product.price * item.quantity;
        }
        return total;
      }, 0);
    },
  },
  actions: {
    addItemToCart(slug: string, quantity: number = 1) {
      const toastStore = useToastStore();
      const ItemId = this.cart.find((product: Item) => product.slug === slug);
      if (ItemId) {
        ItemId.quantity++;
        toastStore.increasedItem();
      } else {
        this.cart.push({ slug, quantity });
        toastStore.addedItem();
      }
    },
    increaseItem(slug: string) {
      const toastStore = useToastStore();
      const ItemId = this.cart.find((item) => item.slug === slug);
      if (ItemId) {
        ItemId.quantity++;
        toastStore.increasedItem();
      }
    },
    decreaseItem(slug: string) {
      const toastStore = useToastStore();
      const ItemId = this.cart.find((item) => item.slug === slug);
      if (ItemId) {
        ItemId.quantity--;
        toastStore.decreasedItem();
        if (ItemId.quantity <= 0) {
          this.removeItemFromCart(slug);
          toastStore.removedItem();
        }
      }
    },
    removeItemFromCart(slug: string) {
      const toastStore = useToastStore();
      this.cart = this.cart.filter((item) => item.slug !== slug);
      toastStore.removedItem();
    },
  },
});

export default useCartStore;
