// use local storage to manage card data
const addToLs = id => {
  let favoriteItem = getFavoriteItem()

  // add quantity
  const quantity = favoriteItem[id]
  if(!quantity){
    favoriteItem[id] = 1
  }else{
    const newQuantity = quantity + 1;
    favoriteItem[id] = newQuantity
  }
  localStorage.setItem("favorite-item", JSON.stringify(favoriteItem))
}

// get local storage item
const getFavoriteItem = () =>{
  let getItem = {}
  const storeItem = localStorage.getItem("favorite-item")
  if(storeItem){
    getItem = JSON.parse(storeItem)
  }
  return getItem;
}

export {addToLs, getFavoriteItem}