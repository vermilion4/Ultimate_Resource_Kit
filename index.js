// progress bar
const sliders = document.querySelectorAll('.slider');
const datas = document.querySelectorAll('.range-data p');

sliders.forEach((slider, index) =>
{
  // Attach listener to current slider
  slider.addEventListener('input', () =>
  {

    // Access current slider using 'this'
    const value = slider.value;
    slider.style.setProperty('--width', `${ value }%`);

    // Update just this data element 

    datas[index].textContent = index === 0 ? `${ value }%` : value;
  });

});

// End of progree bar

const icons = document.querySelectorAll('#mobile i');
const desktopIcons = document.querySelectorAll('#desktop i');

// Add click event to each menu icon
function menuIcons (iconType)
{
  return (iconType.forEach(icon =>
  {

    icon.addEventListener('click', () =>
    {

      // Remove active class from all icons first
      iconType.forEach(el => el.classList.remove('active'));

      // Add active to clicked icon
      icon.classList.add('active');

    });

  }));
}

// mobile icons
menuIcons(icons);
// desktop icons
menuIcons(desktopIcons);
