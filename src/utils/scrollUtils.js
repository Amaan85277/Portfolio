const freezeScroll = () => {
  if (typeof window !== "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
};

const freeScroll = () => {
  document.body.style.overflow = "unset";
};

export { freezeScroll, freeScroll };
