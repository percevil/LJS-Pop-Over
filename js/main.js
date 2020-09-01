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
});
