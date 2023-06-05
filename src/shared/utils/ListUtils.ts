// i couldn't find any other way, and specifying this while rendering 
// with react didn't help because react-dnd overrides it
export const draggableList = (draggable: string) => {
  const liElements = document.getElementsByTagName("li");
  for (const liElement of liElements) {
    liElement.setAttribute("draggable", draggable);
  }
};
