AFRAME.registerComponent("carbase" , {
    schema:{
        radius:{ type: "number", default: 150},
        height:{ typr: "number", default: 3}
    },

    init:function(){
        this.el.setAttribute("geometry",{
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material",{ color: "#1769aa"});
    }
})