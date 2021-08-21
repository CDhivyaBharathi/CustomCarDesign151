AFRAME.registerComponent("carbase" , {
    schema:{
        radius:{ type: "number", default: 150},
        height:{ type: "number", default: 3},
        clickCounter:{type:"number", default:0}
    },

    init:function(){
        this.el.setAttribute("geometry",{
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material",{ color: "#1769aa"});
    },

    update: function(){

        //Adding the event listeners
        //Increasing the rotation by 20 for each click
        window.addEventListener ("click", e=>{
            this.data.clickCounter = this.data.clickCounter+1
            if (this.data.clickCounter === 1){
                const rotation = {x:0 , y:20, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 2){
                const rotation = {x:0 , y:40, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 3){
                const rotation = {x:0 , y:60, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 4){
                const rotation = {x:0 , y:80, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 5){
                const rotation = {x:0 , y:100, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 6){
                const rotation = {x:0 , y:120, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 7){
                const rotation = {x:0 , y:140, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 8){
                const rotation = {x:0 , y:160, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 9){
                const rotation = {x:0 , y:180, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 10){
                const rotation = {x:0 , y:200, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 11){
                const rotation = {x:0 , y:220, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 12){
                const rotation = {x:0 , y:240, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 13){
                const rotation = {x:0 , y:260, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 14){
                const rotation = {x:0 , y:280, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 15){
                const rotation = {x:0 , y:300, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 16){
                const rotation = {x:0 , y:320, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 17){
                const rotation = {x:0 , y:340, z:0};
                this.el.setAttribute("rotation",rotation)
            }else  if (this.data.clickCounter === 18){
                const rotation = {x:0 , y:360, z:0};
                this.el.setAttribute("rotation",rotation)
            }
        })
    }
})