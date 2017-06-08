$("#colorCustom").spectrum({
  preferredFormat: "hex",
  color: "#000000",
  showInput: true,
  move: function(color) { setLineColor(color.toHexString()); }
});
