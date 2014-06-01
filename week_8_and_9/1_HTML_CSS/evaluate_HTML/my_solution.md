## Evaluate a Website! 
 
1) How does this website follow HTML Best Practices? Are there any places where 
it does not?  Provide examples of the "bad" code.

This website has several examples of not following best practices:
1 - there's no doctype declaration
2 - there's style in the html. For example: <img src="y18.gif" width=18 height=18 style="border:1px #ffffff solid;">
3 - the navigation ideally would be in the form of an unordered list instead of a span
4 - the arrangement of elements on the page is structured as a table rather than through the css

 
2) What do you think of the HTML? Did the writers use IDs and Classes properly? 

ID's and classes are used properly

Did you like the way they used HTML tags?  Please use examples with your arguments.

I don't like the way they use tables to format the page. They've also got div's within 'a' elements, for example:
 <a id=up_7781878 onclick="return vote(this)" href="vote?for=7781878&amp;dir=up&amp;by=Arctostaphylos&amp;auth=1b5cfecd744d5c5e04f624b2ed5b56c88c2afb5d&amp;whence=%6e%65%77%73">
                <div class="votearrow" title="upvote">
                </div>
              </a>
 
3) How did the authors handle formatting? Did they include it in the HTML or 
separate it into a CSS file? Or did they do both?  Again, include examples.

Formatting in the document is a mix of in the HTML and CSS file. Example in the first question.
 
4) Did the authors include anything you didn't immediately understand? 
If so, what?

No
 
5) How did the authors organize the CSS file? Was it DRY?

There's a lot of repetition in the CSS file, each class is given it's own styling, including the font family which is consistent across the site and I don't think needs to be repeated for each class. Because the styling for most common elements is in the HTML,
there's not a lot of styling in the CSS.
 
6) Did the authors incorporate any responsive design into the site?
No
 
7) What are your overall thoughts on the HTML/CSS from this website based on 
what you've read?

I'm sure there's more issues with this site than I've identified. The HTML is a nightmare to read even with the proper formatting due to the mix of styling within the HTML and the use of tables to structure the site. The CSS doesn't seem to have much organization, and is rather repetitive. 