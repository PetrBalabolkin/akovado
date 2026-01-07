export interface CartItem {
  slug: string;
  imgSrc: string;
  title: string;
  price: number;
  quantity: number;
}

export const useCart = () => {
  const cart = useState<CartItem[]>('cart', () => []);
  const isInitialized = useState<boolean>('cart-initialized', () => false);

  if (import.meta.client && !isInitialized.value) {
    isInitialized.value = true;

    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          cart.value = parsed;
        }
      } catch {
        console.error('Could not parse cart.');
      }
    }

    watch(cart, (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }, { deep: true });
  }

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    const existingIndex = cart.value.findIndex(item => item.slug === product.slug);

    if (existingIndex > -1) {
      cart.value = cart.value.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      cart.value = [...cart.value, { ...product, quantity: 1 }];
    }
  };

  const removeFromCart = (slug: string) => {
    cart.value = cart.value.filter(item => item.slug !== slug);
  };

  const increaseQuantity = (slug: string) => {
    cart.value = cart.value.map(item =>
      item.slug === slug
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  };

  const decreaseQuantity = (slug: string) => {
    const item = cart.value.find(item => item.slug === slug);
    if (item) {
      if (item.quantity > 1) {
        cart.value = cart.value.map(i =>
          i.slug === slug
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
      } else {
        removeFromCart(slug);
      }
    }
  };

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  const cartItemsCount = computed(() => {
    return cart.value.reduce((count, item) => count + item.quantity, 0);
  });

  const clearCart = () => {
    cart.value = [];
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
    cartItemsCount
  };
};