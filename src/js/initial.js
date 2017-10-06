// Check for jQuery.
window.jQuery = $;
if (typeof(jQuery) === 'undefined') {
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $;
    console.log(jQuery)
    console.log($)
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
