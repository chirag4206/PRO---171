AFRAME.registerComponents("markerHandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display="flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning", title:"Rate dish",text:"work in progress"
            })
        })
        
        orderButton.addEventListener("click",()=>{
            swal({
                title:"thanks for order",text:"your order will be served"
            })
        })
        
    },
    handleMarkerLost:function(){
        var buttondiv= document.getElementById("button-div")
        buttondiv.style.display="none"
    }

})