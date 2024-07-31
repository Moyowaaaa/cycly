import { defineStore, acceptHMRUpdate } from "pinia";

const useToastStore = defineStore("ToastStore", {
  state: () => ({
    message: "",
    bike: "",
    color: "",
    show: false,
  }),
  actions: {
    addedItem() {
      (this.message = `Added Item To cart`),
        (this.color = "#AAE759"),
        (this.show = true),
        setTimeout(() => {
          (this.message = ""), (this.color = ""), (this.show = false);
        }, 4000);
    },
    increasedItem() {
      (this.message = "Increased item quantity"),
        (this.color = "teal"),
        (this.show = true),
        setTimeout(() => {
          (this.message = ""), (this.color = ""), (this.show = false);
        }, 4000);
    },
    decreasedItem() {
      (this.message = "Decreased item quantity"),
        (this.color = "#ead00d"),
        (this.show = true),
        setTimeout(() => {
          (this.message = ""), (this.color = ""), (this.show = false);
        }, 4000);
    },
    removedItem() {
      (this.message = "Item removed from cart"),
        (this.color = "#e64747"),
        (this.show = true),
        setTimeout(() => {
          (this.message = ""), (this.color = ""), (this.show = false);
        }, 4000);
    },

    addedWishList() {
      (this.message = "Item added to Wishlist"), (this.show = true);
      this.color = "#02886B";

      setTimeout(() => {
        (this.message = ""), (this.show = false);
      }, 2000);
    },

    removedWishList() {
      (this.message = "Item removed from WishList"), (this.show = true);
      this.color = "orange";
      setTimeout(() => {
        (this.message = ""), (this.show = false);
      }, 2000);
    },
  },
});

export default useToastStore;
