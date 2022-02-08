const hyperlinksAnchored = text => {
  const urlPattern =
    /\b(?:https?|ftp):\/\/[a-z0-9-+&@#/%?=~_|!:,.;]*[a-z0-9-+&@#/%=~_|]/gim;

  const pseudoUrlPattern = /(^|[^/])(www\.[\S]+(\b|$))/gim;

  const emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;

  return {
    __html: text
      .replace(urlPattern, '<a target="_blank" href="$&">$&</a>')
      .replace(pseudoUrlPattern, '$1<a target="_blank" href="http://$2">$2</a>')
      .replace(
        emailAddressPattern,
        '<a target="_blank" href="mailto:$&">$&</a>',
      ),
  };
};

export default hyperlinksAnchored;
