const categories = document.querySelectorAll('.item');
console.log(categories);
console.log(categories.length);
for(const item of categories){
    console.log(item);
    const title = item.querySelector('h2').textContent;
    console.log(title);
    const subList = item.querySelector('ul');
    console.log(subList);
     const subItemsCount = subList.children.length
      console.log(`Category: ${title}`);
      console.log(`Elements: ${subItemsCount}`);
}