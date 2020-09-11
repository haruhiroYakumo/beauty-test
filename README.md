To avoid compiling errors, make sure that you have TypeScript installed.

List of items can be sorted into three main block of the screen: full width, half width and tri width. So, the item object should have a field "type" with a 
value one of: fullwidth/halfwidth/triwidth. To correctly display data each item type need to have:
"fullwidth" item:
avatar: string
name: string

"halfwidth" item:
avatar: string
storyImage: string
storyTitle: string
name: string

"triwidth" item:
storyImage: string
itemName: string
itemSource: string

Most of the fields represent abstract item data.
