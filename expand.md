# Expand - Lab 5

1. **Why is it important to put thought into your IDs & Classes when it comes to technology intersections?**
   IDs and classes connect HTML with CSS and JavaScript. Good naming helps make the code easy to understand, reuse, and maintain across different parts of the application.

2. **What are Data attributes? Why might they be useful?**
   Data attributes store extra information directly on HTML elements. They're useful for accessing custom data in JavaScript without needing to change the structure or styling of the page.

3. **What is a DOM fragment? Why are they powerful?**
   A DOM fragment is a lightweight container used to hold nodes before attaching them to the DOM. It's powerful because it improves performance by minimizing reflows and repaints.

4. **What is the point of a "Virtual DOM"? What do you gain? What do you lose?**
   Virtual DOM is used in frameworks like React to improve performance by minimizing direct changes to the actual DOM. You gain speed and predictability, but lose direct control.

5. **Why is `className` used in JavaScript instead of `.class` like in CSS?**
   In JavaScript, `className` is the correct property to access or modify the class of an element. `.class` is CSS syntax and doesn’t work in JS.

6. **What is the difference between `addEventListener()` and `onclick`?**
   `addEventListener()` allows multiple listeners on one element and keeps structure flexible. `onclick` can only hold one function and will overwrite others.