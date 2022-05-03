import React from "react";
import '../CSS/App.css'
import { Link } from 'react-router-dom'

export default function blackNav() {
    return (
        <div className="blackNav">
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/create'>
                    <li>Create</li>
                </Link>
                <Link to='/find'>
                    <li>Find</li>
                </Link>
            </ul>
        </div>
        
    );
}

/*
  <Link to='/'>
    <img className="logo" src={logo} />
  </Link>
*/

/*
------------------------------LINK NOTES-------------------------------
React's <Link> tag replaces HTML's <a> anchor tag.

In HTML, to make a nav bar with links you would make an unordered list <ul> with list items <li> in it along with
the anchor tag <a> to make the list items clickable:

<nav>
    <ul>
        <li><a href="my-link">Home</a></li>
        <li><a href="my-link">Create</a></li>
    </ul>
</nav>

But in React you do not use the <a> tag to make something clickable
Instead, to make something clickable you must use <Link>

So to make your list items <li>'s clickable/redirectable, you surround the list 
item <li> with the <Link> tag. The <Link> tag also has an attribute called "to" where you assign
the file that you want the link to redirect to.

Anything surrounded by the <Link> tag along with an assigned "to" attribute is made 
clickable and redirectable

------------------------------CSS STYLING FOR LINKS-------------------------------
The list item <li> tag is the actual word itself. So if I wanted to change the properties of how the
words on my navigation bar looks, I would need to reference the actual <li> in my CSS file. In my CSS file 
I just reference ALL <li>'s anywhere.

The <Link> tag is referenced in the CSS file when you want to customize what happens when you hover or click
the <Link>ed item. In my case I referenced the <Link> class "react-links" to customize the hover color.

*/
