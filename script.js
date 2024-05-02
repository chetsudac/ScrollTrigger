document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
      .then((response) => response.json())
      .then((blocks) => {
        blocks.forEach((block, index) => {
          let element = document.createElement("div");
          element.innerText = block.name;
          element.classList.add(`block`);
          element.style.BackgroundColor = block.color;
          element.dataset.index = index

          let container = document.querySelector('.squirrel')
          container.append(element)

          container.append(element)

          if(index != 0)
            element.classList.add(`hidden`);

        });

        container.addEventListener('click', (e) => {
            let visibleBlock = document.querySelector('.block:not(.hidden)')
            let visibleIndex = parseInt(visibleBlock.dataset.index)

            let nextBlock = document.querySelector(`.block[data-index="${nextIndex}"]`)
           
            visibleBlock.classList.add('hidden')
            nextBlock.classList.add('hidden')
        })
        
      });
  });
  
  
  console.log('event', event);

document.addEventListener('scroll', (event) => {
    let container = document.querySelector('.tree')
    let containerHeight = container.offsetHeight - document.documentElement.clientHeight

    let scrollPercent = window.scrollY / containerHeight * 100

    let leftColumn = document.querySelector('.street')
    let rightColumn = document.querySelector('.car')

    console.log('scrollPercent', scrollPercent);

    leftColumn.style.transform = `translateY(-${scrollPercent}%)`
    rightColumn.style.transform = `translateY(-${scrollPercent}%)`
});