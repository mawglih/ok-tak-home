1. The original progeam created a problem when I tried to run after yarn install. node-sass appeared to be incompatible with some files on my PC and on my mac. After  research, I found the solution:
yarn remove node-sass
yarn add node-sass

After that I got another error that version 6 is not wirking with version 4. Very strange. Finally, one article in Medium explained that there is a problem of compatibility of library and the solution is to install version 4.14.1, which I did finally 
yarn remove node-sass
yarn add node-sass@4.14.4

To simplify and to save time I disabled linting and did not use prop types.
In general I completed about 3/4 of tasks, since you ask to limit work to 4 hours. For example changes to textarea at the end are not saved as well as changes to existent line adds another line, not rewrites existing note.

Anyway it is an interesting application, and probably of type of work usually done in OKCupid, which I never did before.

I used different hooks from react, react-redux and redux, created several actions and updated reducer. I did not change any code in constants and helpers.

So this is short and fast app that is done close to requirements in short period of time. Of course it needs more work,for example i just started function handleOnFocus that is needed to check if the data in input field is present.