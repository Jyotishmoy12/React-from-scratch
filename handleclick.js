//You can handle events by passing a function as a prop to an element like <button>.
You can define an event handler function separately or inline.
Event handlers are defined inside a component, so they can access props.
You can declare an event handler in a parent and pass it as a prop to a child.
You can define your own event handler props with application-specific names.
Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
Explicitly calling an event handler prop from a child handler is a good alternative to propagation.



here this concept is used-->   Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}
