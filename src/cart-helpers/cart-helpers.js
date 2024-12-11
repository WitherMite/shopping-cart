function isItem(item) {
  const isSimpleObject =
    typeof item === "object" &&
    item !== null &&
    !Array.isArray(item) &&
    !(item instanceof Set) &&
    !(item instanceof Map);

  const requiredProps = [
    ["id", (i) => !(typeof i.id === "object")],
    ["title", (i) => typeof i.title === "string"],
    [
      "price",
      (i) =>
        (typeof i.price === "number" || typeof i.price === "string") &&
        !isNaN(Number(i.price)),
    ],
  ];

  let hasRequiredProps = true;
  for (const [key, checkType] of requiredProps) {
    try {
      if (!Object.hasOwn(item, key) || !checkType(item)) {
        hasRequiredProps = false;
        break;
      }
    } catch {
      break;
    }
  }

  return isSimpleObject && hasRequiredProps;
}

function addToCart(cart, item, count, setStateCallback) {
  if (typeof count !== "number" || count < 1 || count % 1 !== 0)
    throw new Error("Invalid count argument", { cause: count });
  if (!isItem(item)) throw new Error("Invalid item argument", { cause: item });
  const newCart = [];
  let inCart = false;
  cart.forEach((entry) => {
    if (entry.id === item.id) {
      inCart = true;
      newCart.push({ ...entry, count: entry.count + count });
    } else newCart.push(entry);
  });
  if (!inCart) newCart.push({ ...item, count });
  setStateCallback(newCart);
}

function removeFromCart(cart, item, setStateCallback) {
  if (!isItem(item)) throw new Error("Invalid item argument", { cause: item });
  const newCart = [];
  let inCart = false;
  cart.forEach((entry) => {
    if (entry.id === item.id) {
      const count = entry.count - 1;
      count > 0 && newCart.push({ ...entry, count });
      inCart = true;
    } else newCart.push(entry);
  });
  inCart && setStateCallback(newCart);
}

function deleteEntryFromCart(cart, item, setStateCallback) {
  if (!isItem(item)) throw new Error("Invalid item argument", { cause: item });
  let inCart = false;
  const newCart = cart.filter((entry) => {
    const found = entry.id === item.id;
    if (found) inCart = true;
    return !found;
  });
  inCart && setStateCallback(newCart);
}

export { addToCart, removeFromCart, deleteEntryFromCart };
