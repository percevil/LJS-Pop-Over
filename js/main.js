const popoverTrigger = document.querySelector('.popover-trigger');
const popover = document.querySelector('.popover');

const popoverTriggerRect = popoverTrigger.getBoundingClientRect();
// getting dimensions over the top of the pop-over element
const triggerCenter = (popoverTriggerRect.left + popoverTriggerRect.right) / 2;
//  getting center dimensions over the pop-over element

const popoverRect = popover.getBoundingClientRect();
// getting dimensions if the pop-over element
const leftPosition = triggerCenter - popoverRect.width / 2;
// getting the center dimension of the pop-over element

popover.style.left = `${leftPosition}px`;
// setting the left position of the pop-over
const space = 20;
const triggerTop = popoverTriggerRect.top;
const topPosition = triggerTop - popoverRect.height - space;
popover.style.top = `${topPosition}px`;

popover.setAttribute('hidden', true);
// Initially hides pop-over

popoverTrigger.addEventListener('click', e => {
  // adding a click event listener to pop-over trigger
  if (popover.hasAttribute('hidden')) {
    popover.removeAttribute('hidden');
    //   removes 'hidden' attribute when clicked
  } else {
    popover.setAttribute('hidden', true);
  }
  document.addEventListener('click', event => {
    //   adding an event listener to sibling elements closest to the pop-over or the pop-over trigger to close it outside of the trigger
    if (
      event.target.closest('.popover') ||
      event.target.closest('.popover-trigger')
      //    LOGIC: If the target from the click is within the closest sibling to .pop-over OR .pop-over trigger then
    )
      return;
    popover.setAttribute('hidden', true);
    // sets the pop-over state to true to hide the pop-over
  });
});
