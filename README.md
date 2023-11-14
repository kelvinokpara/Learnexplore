design requirements for responsiveness
-We will be working with the tailwind equivalents of the small, medium, large and default screens (sm, md, lg and def).

NOTE: "def" is not a tailwind utility or component.
It is a mere keyword for illustration of mobile viewports, as it is the default viewport for tailwind style processing.

#BOX MODEL ARRANGEMENT
-Each box model or container of JSX elements will employ a flex box model. Below is the arrangement specifications for each viewport.

DEF
-Flex direction of column

SM, MD, LG
-Flex direction of row
-Flex wrap enabled

Flex basis and flex grow/shrimk will be left to developer's discretion.

#PADDING & MARGIN
DEF
-Padding: 40px
-margin: 0

SM
-padding: 65px
-margin: 0

MD
-padding: 90px
-margin: 0

LG
-padding: over 115px
-margin: 0

#NOTE:
Discretion is left to developers to make exceptions to these guidelines. More updates will be made to the requirements with time. Happy coding!
