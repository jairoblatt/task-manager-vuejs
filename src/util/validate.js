


const verifyHeight = (count) => {
    if(count <= 60)  return 2;
    if(count <= 90)  return 3;
    if(count <= 140)  return 4;
    if(count <= 200)  return 5;
}
    
   export const  gridHeigh = (data) => {
        let h = verifyHeight(data.length)
        return { h:h, w:2 }
    }

    export const gridStartPosition = (data) => {
        const item = data[data.length - 1];
        const lastItem = {};
  
        if (item != undefined) {
          (lastItem.i = item.i), (lastItem.x = item.x), (lastItem.y = item.y);
          if (lastItem.x >= 8) {
            lastItem.x = 0;
            lastItem.y++;
            lastItem.i++;
          } else {
            lastItem.x = lastItem.x + 2;
            lastItem.i++;
          }
        } else {
          lastItem.i = 0;
          lastItem.x = 0;
          lastItem.y = 0;
        }

        return lastItem
    }

  
  class Color{

      validate(level){
        if (level < 25) return "deep-purple accent-3";
        if (level < 50) return "light-blue ";
        if (level < 75) return "lime";
        if (level < 110) return "red accent-3";
        return "red accent-3";
      }

    }

export default new Color





    
