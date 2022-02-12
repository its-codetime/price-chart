# React Price Chart   

- bootstrap for styling
- font awesome for icons
-	components
  - App
    - mounts on root
		- contains state(consists of all the card details)
  		- cards data state is assigned to state in constructor
  - CardList
    - rendered in app component.
    - receives cards as props
    - iterates and create card components
  - Card
    - receives card details as props