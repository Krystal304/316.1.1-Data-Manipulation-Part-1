// Menu data structure


var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// Part 1
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");


// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';

//Setting background color using custom CSS properties

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add(`flex-ctr`);

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`)


// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) =>{ 

// Create an <a> element.     - .create
let newLink = document.createElement(`a`);


// On the new element, add an href attribute with its value set to the href property of the "link" object.
newLink.setAttribute(`href`, link.href);


// Set the new element's content to the value of the text property of the "link" object.
newLink.textContent = link.text;

// Append the new element to the topMenuEl element.
topMenuEl.appendChild(newLink);
});

// Part 3
// Select and cache the <nav id="subLinks-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('subLinks-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --subLinks-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = (`var(--subLinks-menu-bg)`);


// Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add(`flex-around`);

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolute`;

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;


// Part 4
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// get all a tags
 let topMenuLinks = topMenuEl.getElementsByTagName('a');



// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', handleClick);
function handleClick(event) {

// The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault();

// The second line of code of the function should immediately return if the element clicked was not an <a> element.
if (event.target.tagName !== 'A') return;

// Log the content of the <a> to verify the handler is working.
console.timeLog(event.target.textContent);

// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!
for (i = 0; i < topMenuLinks.length; i++){
  topMenuLinks[i].classList.remove('active');
}
event.target.classList.add('active');
}

// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):

let clickedLinkText = event.target.textContent;
let linkObject = menuLinks.find (link => link.text === clickedLinktext);

// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
if (linkObject && linkObject.subLinks){
  subMenuEl.style.top = '100';

} else { 
  subMenuEl.style.top = '0';
}
// Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.


// Clear the current contents of subMenuEl.
function buildSubmenu(subLinks){
  subMenuEl.innerHTML = '';

// Iterate over the subLinks array, passed as an argument, and for each "link" object:
subLinks.forEach(link => {

// Create an <a> element.
let subLink = document.creatElement('a');
})
// Add an href attribute to the <a>, with the value set by the href property of the "link" object.
subLink.setAttribute('href', link.href);

// Set the element's content to the value of the text property of the "link" object.
sublink.textContent = link.text;
// Append the new element to the subMenuEl.
subMenuEl.appendChild(subLink);
}

// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', handleSubmenuClick);
function handleSubmenuClick(event){



// The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault();
// The second line of code within the function should immediately return if the element clicked was not an <a> element.
if (event.target.tagName !== 'A') return;
// Log the content of the <a> to verify the handler is working.
console.log(event.target.textContent);
// Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = '0'
// Remove the active class from each <a> element in topMenuLinks.
for(let i = 0; i < topMenuLinks.length; i++){

}
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
mainEl.innerHTML = '<h1>${event.target.textContent}</h1>';
}
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.